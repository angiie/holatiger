# 从 DSM nginx 到 NPM 再到 Traefik：NAS 反向代理演进记录

更新时间：2026-11-11

相关文档：

- [当前统一入口方案](README.md)
- [原端口与服务映射表](port-inventory.md)
- [Traefik 管理页](admin.md)

## 一句话总结

这个 NAS 的公网入口经历了三个阶段：

1. **DSM 内置 nginx 反向代理**：一个服务一个公网端口，配置在 DSM 图形界面里，证书和规则都与 DSM 绑定。
2. **Nginx Proxy Manager（NPM）**：把所有服务收口到一个 `9443`，按域名分流，用 DNSPod DNS-01 申请泛域名证书，但每个服务仍要手工建一条 Proxy Host。
3. **Traefik**：保留单一入口和泛域名证书，改为**声明式配置 + Docker 标签自动发现 + 可组合中间件**，并补上统一登录、维护模式、路由状态等运维能力。

最终形态不是“把 DSM 的反代换了个软件”，而是把入口模型从**“端口为中心”**改成了**“域名 + 服务为中心”**：公网只开一个 HTTPS 端口，新增服务只需要加域名和一条路由，不再新增端口映射和防火墙洞。

---

## 1. 三代架构总览

| 代次 | 入口 | 配置位置 | 证书 | 新增一个服务的成本 |
|---|---|---|---|---|
| DSM nginx | 每个服务一个公网端口（`8092`、`8456`、`9100`…） | DSM 控制面板 → 登录门户 → 高级 → 反向代理 | DSM 证书中心，逐条规则绑定 | 容器发布新宿主端口 + DSM 建反代 + 路由器加映射 + 处理证书 |
| NPM | 单一 `9443`，按 Host 分流 | NPM Web UI，状态存 SQLite，生成 nginx 配置 | NPM 内置 Let's Encrypt + DNSPod 插件，泛域名 | 建 DNS + 手工建 Proxy Host |
| Traefik | 单一 `9443`（`19443` 测试），按 Host/Path 分流 | Compose Labels + `config/dynamic/*.yml` | acme.sh DNS-01 签发，Traefik 读文件热加载 | 建 DNS + 给容器加 Labels（或加一个 YAML 路由） |

### 1.1 DSM nginx 阶段

```text
互联网
  │ 多个公网端口：5280 / 5231 / 8000 / 8081 / 8084 / 8092 / 8093 / 8300 / 8456 / 9100 / 9101 …
  ▼
路由器（每个端口一条映射）
  ▼
DSM 内置 nginx（每条反代规则独占一个前端端口）
  ▼
localhost:8123 / 5230 / 3001 / 9001 / 9005 …
  ▼
各 Docker 容器（同时还有大量直连 HTTP 端口对外开放）
```

### 1.2 NPM 阶段

```text
互联网
  │ TCP 9443
  ▼
路由器 9443 → 192.168.1.88:9443
  ▼
NPM（nginx + Web UI + SQLite）
  ├─ n.amdyes.tech      → MinIO API / 控制台
  ├─ photos.amdyes.tech → 192.168.1.88:5101
  ├─ memos.amdyes.tech  → 192.168.1.88:5230
  └─ gitea.amdyes.tech  → 192.168.1.88:3001
```

### 1.3 Traefik 阶段（当前）

```text
互联网
  │ TCP 9443（标准 443 被运营商阻断，暂用 9443）
  ▼
Redmi RB04 / 192.168.1.1
  │ TCP 9443 → 192.168.1.88:9443
  ▼
Traefik v3.6（只发布 192.168.1.88:9443 和 :19443）
  ├─ home.amdyes.tech     → portal（导航页，forwardAuth 登录）
  │    └─ /admin/         → traefik-admin（路由管理、维护模式、审计）
  ├─ n.amdyes.tech        → DSM / Synology Photos（5101）
  ├─ minio.amdyes.tech    → MinIO API（根路径）+ 控制台（/console/）
  ├─ ha.amdyes.tech       → Home Assistant（host.docker.internal:8123）
  ├─ gitea / gogs / memos / calibre / bambuddy / photos …
  └─ mi.amdyes.tech       → 小米路由器（passHostHeader=false）
        │
        ├─ Docker Labels（自动发现）：portal、minio、gitea、gogs、memos、calibre、bambuddy
        └─ File Provider（静态服务）：DSM、Photos、HA、路由器、admin、console 别名
```

---

## 2. 第一代：DSM 内置 nginx 反向代理

### 2.1 工作方式

Synology DSM 自带 nginx，并提供“登录门户 → 高级 → 反向代理”的图形界面。每条规则的形式是：

```text
前端：HTTPS <某个专用端口>
后端：http(s)://localhost:<容器发布到宿主机的端口>
```

规则保存在 `/usr/syno/etc/www/ReverseProxy.json`，由 DSM 生成 nginx 配置并加载。DSM 的控制面板、Photos、File Station 等自身服务也依赖这套 nginx。

迁移前从 `ReverseProxy.json` 盘点出的规则（共 11 条）：

| 名称 | 前端端口 | 后端 |
|---|---:|---|
| homeassistant（hs） | 8456 | localhost:8123 |
| minio-admin | 9101 | localhost:9001 |
| minio-api | 9100 | localhost:9005 |
| memos | 5231 | localhost:5230 |
| bambuddy | 8092 | localhost:8091 |
| nginx（静态站） | 8081 | localhost:8080 |
| xiaomi-router | 5280 | miwifi.com:81（覆盖 Host: 192.168.1.1） |
| gogs | 8000 | localhost:7999 |
| calibre | 8084 | localhost:8083 |
| gitea-web | 8093 | localhost:3001 |
| motion | 8300 | localhost:3000 |

除此之外，很多容器还把 HTTP 端口直接发布到公网，绕过 HTTPS 反代，例如 `5230`（Memos）、`7999`（Gogs）、`8083`（Calibre）、`8091`（Bambuddy）、`8123`（HA）、`9000`（MinIO nginx 代理），以及和 Web 无关的 `5306`（MySQL）、`8221`（Gogs SSH）、`8094`（Gitea SSH）。MinIO 还有独立的 `minio-api-proxy` 容器，在 `9000` 上自己终止 TLS 并提供 `/console/` 路径分流。

### 2.2 当时暴露出的问题

1. **端口爆炸**：11 条 DSM 反代规则对应 11 个专用前端端口（其中多数有路由器公网映射），另有多个直连端口。每新增一个服务，要同时改容器端口、DSM 反代、路由器映射三处。
2. **一份服务两套入口**：通常一个服务既有直连 HTTP 端口，又有 DSM HTTPS 反代端口；两者都能从公网到达，HTTPS 的意义被削弱。
3. **配置不可版本化**：规则在 DSM 私有 JSON 和生成的 nginx 配置里，只能通过 DSM 界面修改，无法 diff、code review 或随 Compose 一起备份。
4. **与 DSM 强绑定**：DSM 升级、证书变更、套件调整都可能影响反代；NAS 迁移或 DSM 重装时配置不能直接带走。
5. **证书按规则维护**：备份中能看到多套 `ReverseProxy_*` 证书目录，证书与服务/规则分别绑定；DSM 自带的 Let's Encrypt 走 HTTP-01，不能直接申请泛域名。新增子域名就要重复处理证书。
6. **没有中间件模型**：DSM 能加自定义请求头、开关 HSTS/HTTP2，但没有路径重写、统一鉴权、限流、维护页、路由优先级这些能力。
7. **可观测性弱**：只有系统级 nginx 日志，没有“这条路由的后端是否 UP”的统一视图，也没有集中管理入口。
8. **安全边界差**：后端容器必须把端口发布到宿主机才能被反代，直连端口顺带暴露；MySQL、SSH 这类非 HTTP 服务也混在同一批公网映射里。

这些问题的根因不是 nginx 性能不行，而是 **DSM 的入口模型以端口为单位**，在服务数量增长后必然失控。

---

## 3. 第二代：Nginx Proxy Manager

### 3.1 为什么先上 NPM

2026-11-11 的迁移没有直接从 DSM nginx 跳到 Traefik，而是先用 NPM 做过渡，原因是：

- NPM 有成熟的 Web UI，迁移风险低，能快速验证“单端口 + 域名分流 + 泛域名证书”这条路。
- 业务端口用 `9443`，管理后台 `81` 只绑定局域网，可以与 DSM 反代并行运行，逐服务切换。
- 内置 Let's Encrypt 和 DNSPod DNS-01 插件，可以直接申请 `*.amdyes.tech`，不依赖公网 80。

### 3.2 部署与配置

Compose 位于 `/volume1/docker/acme/npm/compose.yml`（项目名 `nas-gateway`）：

- 镜像：`jc21/nginx-proxy-manager:2.16.0`
- 管理后台：`192.168.1.88:81`，仅内网
- 业务入口：`192.168.1.88:9443`，临时测试端口 `9080` 验证后移除
- 数据：`./data`（含 SQLite、生成的 nginx 配置、日志）
- 证书：`./letsencrypt`
- 额外接入 `minio_default` 网络，便于直接代理 MinIO

证书：

- DNSPod DNS-01 申请 `*.amdyes.tech`，证书 ID 1，到期时间 2027-02-09。
- 私钥权限 `600`，DNSPod 临时凭据文件自动清理。

创建过的 Proxy Host：

| ID | 域名 | 后端 | 关键配置 |
|---:|---|---|---|
| 1 | n.amdyes.tech | `minio:9000` / `minio:9001` | 根路径走 S3 API；`/console/`、`/api/`、`/static/`、`/styles/` 走控制台；WebSocket；关闭缓冲 |
| 2 | photos.amdyes.tech | `https://192.168.1.88:5101` | 泛域名证书，HTTPS/HTTP2 |
| 3 | memos.amdyes.tech | `http://192.168.1.88:5230` | 泛域名证书，HTTPS/HTTP2 |
| 4 | gitea.amdyes.tech | `http://192.168.1.88:3001` | 泛域名证书，HTTPS/HTTP2 |

同时通过 DNSPod API 新增了 `photos`、`memos`、`gitea` 三条 CNAME，后续又加了 `*.amdyes.tech → n.amdyes.tech` 泛解析。

### 3.3 迁移中遇到的问题

- **运营商封锁 80/443**：路由器已配置 `WAN 443 → 192.168.1.88:9443`，但多节点外网检测 80/443 均超时，最终公网入口使用 `9443`。这直接影响后续所有应用的对外 URL（Gitea `ROOT_URL`、Gogs `EXTERNAL_URL`、MinIO `MINIO_SERVER_URL` 都要带 `:9443`）。
- **NAT 回环不等于公网可用**：NAS 自己访问公网域名成功只能证明路由器回环和反代配置正确，不能证明运营商放行。
- **Host 头问题**：小米路由器收到 `Host: n.amdyes.tech:5280` 返回 502，需要在反代里覆盖 `Host: 192.168.1.1`。这个问题后来在 Traefik 里用 `passHostHeader: false` 解决。

### 3.4 NPM 的局限

NPM 解决了“单端口 + 泛域名证书”，但本质上仍是**图形界面逐条维护的 nginx**：

- 每个服务都要手工建 Proxy Host，配置存在 SQLite 和自动生成的 nginx 文件里，难以版本化和评审。
- 没有 Docker 服务发现；容器换了端口或网络，要回 UI 改。
- 路径分流、请求头、超时等高级能力要写 custom location / 高级配置片段。
- 中间件不可组合，没有统一的 forwardAuth、维护模式、路由优先级模型。
- 管理后台本身是额外的 Web 应用和数据库，长期看是又一层需要维护的状态。

因此 NPM 只作为过渡，最终目标是声明式的 Traefik。

---

## 4. 第三代：Traefik

### 4.1 选型理由

- **Docker 原生**：通过 Labels 自动发现容器，路由定义和服务部署放在同一个 Compose 文件里。
- **静态 + 动态配置分离**：静态配置（entryPoint、provider、API）启动时读取；动态配置（router、middleware、service）支持文件 watch 热加载，改路由不用重启容器。
- **中间件可组合**：`stripPrefix`、`replacePath`、`forwardAuth`、`headers`、`rateLimit`、`retry` 等可以像积木一样挂在路由上。
- **按 Host + Path + 优先级匹配**，能在同一个域名下拆分 API 和控制台、首页和管理页。
- **API 可观测**：容器内的 `/api` 能列出 router/service 状态，供自建管理页读取。
- **文件证书热加载**：acme.sh 续期后 `touch` 动态配置文件即可让 Traefik 重新读取证书。

### 4.2 运行形态

当前 Compose：`/volume1/docker/traefik/compose.yml`，项目名 `nas-traefik`。

```yaml
services:
  socket-proxy:   # tecnativa/docker-socket-proxy，只读访问 Docker API
  traefik:        # traefik:v3.6
    ports:
      - "192.168.1.88:9443:443"    # 正式入口
      - "192.168.1.88:19443:443"   # 内网测试入口
    volumes:
      - ./config:/etc/traefik:ro
      - ../acme.sh/traefik-certs:/certs:ro
    networks: [traefik, minio, gitea]
```

要点：

- 入口只绑定 NAS 内网地址，不在 `0.0.0.0` 上监听。
- Docker API 不直接挂 socket，而是通过 `docker-socket-proxy`；`POST=0`，只开放 containers/services/networks/events 等只读接口。
- `exposedByDefault: false`：容器不显式加 `traefik.enable=true` 就不会被暴露。
- 静态配置 `config/traefik.yml` 只定义一个 `websecure:443` entryPoint、Docker/File 两个 provider、容器内 `:8080` API。
- 动态配置在 `config/dynamic/`，`watch: true`，包括手写路由 `dynamic.yml` 和管理页生成的 `zz-override-*.yml`。

### 4.3 两类路由

**Docker Labels（自动发现）**：适合由 Compose 管理的容器。例如 Gogs：

```yaml
labels:
  - "traefik.enable=true"
  - "traefik.http.routers.gogs.rule=Host(`gogs.amdyes.tech`)"
  - "traefik.http.routers.gogs.entrypoints=websecure"
  - "traefik.http.routers.gogs.tls=true"
  - "traefik.http.services.gogs.loadbalancer.server.port=3000"
  - "traefik.docker.network=gitea-net"
```

容器重建后路由自动跟随，不需要回管理界面改配置。

**File Provider（静态路由）**：适合 DSM、Photos、Home Assistant、小米路由器等非 Docker 或被 Traefik 直接访问的服务。例如：

```yaml
http:
  routers:
    dsm:
      rule: Host(`n.amdyes.tech`)
      entryPoints: [websecure]
      service: dsm
      tls: true
  services:
    dsm:
      loadBalancer:
        serversTransport: dsm-insecure
        servers:
          - url: https://192.168.1.88:5101
```

DSM 使用自签证书，因此单独定义了 `serversTransport.dsm-insecure` 做 `insecureSkipVerify`，作用范围只限这个后端，不影响全局。

其他几个有代表性的配置：

- **MinIO**：同一域名下用优先级拆分——`/console/` 优先级 100 且 `stripPrefix`，`/api/`、`/static/`、`/styles/` 优先级 90，根路径优先级 1 走 S3 API。这正是 DSM 反代很难优雅做到的事。
- **小米路由器**：`passHostHeader: false`，让后端看到自己的 Host `192.168.1.1`，避免 502。
- **Home Assistant**：通过 `host.docker.internal:8123` 访问宿主端口，并在 HA 里把 `172.16.0.0/12` 加入 `trusted_proxies`。
- **Bambuddy**：容器使用 host 网络，Labels 指向 `8091`，Traefik 通过 `172.17.0.1` 访问。

### 4.4 TLS 与证书

NPM 退役后，证书不再依赖 NPM：

- 签发工具：`acme.sh` 容器，`/volume1/docker/acme.sh/compose.yml`，host 网络，`daemon` 模式每天检查续期。
- 验证方式：DNSPod DNS-01，申请 `*.amdyes.tech`（EC-256），不需要公网 80。
- 证书文件：`/volume1/docker/acme.sh/traefik-certs/fullchain.pem`、`privkey.pem`，Traefik 只读挂载到 `/certs`。
- 当前证书：2026-11-11 签发，到期 2027-02-09，下次续期时间 2027-01-09。
- 续期回调：`Le_ReloadCmd=touch /traefik-config/dynamic/dynamic.yml`，acme 容器挂载了 Traefik 动态配置目录。文件被 touch 后 Traefik watch 到变化并重新加载证书。

这套方案把“证书申请、续期、部署、通知”集中到一个可脚本化的组件，不再和反代 UI 绑定。

### 4.5 安全模型

相比 DSM nginx 时代“每个服务一个公网端口 + 一堆直连 HTTP 端口”，Traefik 收紧了入口：

- 公网只映射 `9443` 到 Traefik；后端容器可以只在 Docker 内网监听。
- Traefik 自身只绑定 NAS 内网 IP，不监听 `0.0.0.0`。
- Dashboard/API 不发布到宿主机，只在容器内 `:8080`，由 `nas-traefik` 网络访问。
- Docker socket 通过只读 socket proxy，避免把完整 Docker 控制权交给反代。
- 首页 `home.amdyes.tech` 通过 `forwardAuth` 调用 `traefik-admin` 的 `/admin/verify`，未登录跳转登录页；管理页和首页共用会话。
- 路由上下线需要二次输入管理员密码，并记录审计日志。
- 域名采用泛解析 + 显式路由：DNS 解析成功不代表服务暴露，只有加了 `traefik.enable=true` 或文件路由才会生效。

### 4.6 当前路由清单

| 域名 | 后端 | 配置方式 | 备注 |
|---|---|---|---|
| `home.amdyes.tech` | portal:80 | Labels | 导航页，`admin-auth@file` 登录 |
| `home.amdyes.tech/admin` | traefik-admin:8080 | File | 优先级 100000，路由管理/维护/审计 |
| `n.amdyes.tech` | 192.168.1.88:5101 | File | DSM / Photos 统一入口 |
| `photos.amdyes.tech` | 192.168.1.88:5101 | File | Synology Photos |
| `ha.amdyes.tech` | host.docker.internal:8123 | File | WebSocket 已验证 |
| `minio.amdyes.tech` | minio:9000 / 9001 | Labels | 根路径 API，`/console/` 控制台 |
| `console.amdyes.tech` | minio:9001 | File | 控制台别名，`stripPrefix /console` |
| `gitea.amdyes.tech` | gitea:3000 | Labels | `ROOT_URL` 带 `:9443` |
| `gogs.amdyes.tech` | gogs:3000 | Labels | `EXTERNAL_URL` 带 `:9443` |
| `memos.amdyes.tech` | memos:5230 | Labels | 已完整验证 |
| `calibre.amdyes.tech` | calibre-web:8083 | Labels | |
| `bambuddy.amdyes.tech` | 172.17.0.1:8091 | Labels | 容器 host 网络 |
| `mi.amdyes.tech` | 192.168.1.1 | File | `passHostHeader=false` |

路由来源：7 个通过 Docker Labels 接入的容器（MinIO 一个容器承载 API、控制台和静态资源多条 router）+ 6 条 File Provider 路由（含 admin 与 console 别名）。

---

## 5. 迁移时间线（2026-11-11）

整个迁移在一天内完成，顺序如下：

1. **盘点与备份**
   - 导出 DSM `ReverseProxy.json`、`server.ReverseProxy.conf` 和证书目录。
   - 记录全部公网端口、DSM 反代规则、容器端口和 SSH 用途。
   - 备份文件：`/volume1/docker/backups/dsm-reverse-proxy-*.tar.gz`、`dsm-reverse-proxy-full-*.tar.gz`。

2. **并行部署 NPM**
   - 独立目录 `/volume1/docker/acme/npm`，管理口 `81` 仅内网，业务口 `9443`。
   - 不停止 DSM、MinIO、acme.sh 和现有容器。

3. **申请泛域名证书**
   - NPM 通过 DNSPod DNS-01 签发 `*.amdyes.tech`。
   - 新增 `photos`、`memos`、`gitea` CNAME，后续加 `*.amdyes.tech` 泛解析。

4. **优先迁移 MinIO**
   - NPM 建 `n.amdyes.tech`：根路径 → `minio:9000`，`/console/` → `minio:9001`，处理 `/api/`、`/static/`、`/styles/`、WebSocket、关闭缓冲。
   - 验证证书链、健康接口、控制台页面。
   - 原 `9000` nginx 入口保留回退。

5. **迁移 Photos / Memos / Gitea**
   - NPM 分别建 `photos`、`memos`、`gitea` Proxy Host，根路径均验证 200。
   - 旧端口 `5101`、`5231`、`8093` 保留，不做“一次性切换”。

6. **路由器与公网验证**
   - 先试 `WAN 443 → 9443`，多节点检测发现运营商封锁 80/443。
   - 改用 `WAN 9443 → 192.168.1.88:9443`；修复 `5280` 小米路由器反代的 Host 头问题。
   - 明确“NAT 回环成功 ≠ 公网可用”。

7. **并行部署 Traefik**
   - 先只监听 `19443`，复用 NPM 证书，Docker provider 通过 socket proxy。
   - Bambuddy、Calibre 用 Labels 接入并验证。
   - 补齐 `minio_default`、`gitea-net` 网络，处理跨网络容器。

8. **Traefik 接管正式入口**
   - Traefik 增加 `9443`，NPM 移除 `9443` 发布，仅保留 `81` 和证书续期。
   - MinIO、Photos、Memos、Gitea 逐项在 `9443` 验证；旧端口继续保留。
   - Memos 完整验证后禁用对应 NPM Proxy Host。

9. **证书从 NPM 迁移到 acme.sh**
   - acme.sh 通过 DNSPod 签发独立 `*.amdyes.tech`，输出到 `traefik-certs/`。
   - Traefik 证书路径改为该目录，续期回调 `touch dynamic.yml`。
   - 证书续期不再依赖 NPM。

10. **退役 NPM**
    - NPM 停止并删除，完整备份为 `/volume1/docker/backups/npm-retired-20261111.tar.gz`。
    - `/volume1/docker/acme/npm` 移除。
    - 全部 Traefik 路由回归通过。

11. **补齐入口与运维能力**
    - `home.amdyes.tech` 导航页（portal 容器）。
    - `ha.amdyes.tech`、`gogs.amdyes.tech`、`minio.amdyes.tech`、`console.amdyes.tech`。
    - `n.amdyes.tech` 改为 DSM 入口，MinIO 改用 `minio.amdyes.tech`。
    - `traefik-admin` 管理页：登录、路由上下线、维护页、新容器发现、审计日志。
    - `mi.amdyes.tech` 小米路由器路由。
    - 首页接入与管理页相同的登录会话。

12. **当前状态**
    - 正式入口：`https://<域名>:9443`。
    - 旧端口仍保留作回退，尚未全部关闭；MySQL `5306`、路由器 `5280` 等安全债仍需清理。
    - Photos 手机客户端、上传/视频、MinIO 大文件与预签名 URL、Gitea/Gogs 完整 Git 操作仍需完整验证。

---

## 6. 三代方案对比

| 维度 | DSM nginx | NPM | Traefik |
|---|---|---|---|
| 公网入口 | 每服务一个端口（11+） | 单一 9443 | 单一 9443（+19443 测试） |
| 路由依据 | 前端端口 | Host / 有限路径 | Host + Path + Header + 优先级 |
| 新增服务 | 容器端口 + DSM 规则 + 路由器映射 + 证书 | DNS + UI 建 Proxy Host | DNS + Labels 或一条 YAML |
| 服务发现 | 无，手工指向 localhost 端口 | 无，手工填后端 | Docker Labels 自动发现 |
| 配置位置 | DSM 私有 JSON + 生成的 nginx 配置 | SQLite + 生成的 nginx 配置 | Compose Labels + Git 友好的 YAML 文件 |
| 版本化 / diff / 回滚 | 困难，只能整目录备份 | 困难，备份 SQLite | 容易，文件可直接 diff、备份、回滚 |
| 证书 | DSM 证书中心，逐条规则绑定；HTTP-01，不能直接泛域名 | 内置 LE + DNS-01 插件，支持泛域名 | 文件证书 + acme.sh DNS-01，支持泛域名 |
| 续期 | DSM 任务/手动 | NPM 内置 | acme.sh daemon + `Le_ReloadCmd` 热加载 |
| 路径重写 / 前缀剥离 | 不支持 | 仅 custom location / 片段 | 原生中间件 |
| 统一鉴权 | 无 | Access List（Basic Auth 等） | forwardAuth、BasicAuth、headers 等可组合 |
| 维护模式 / 路由开关 | 停服务或改规则 | 禁用 Proxy Host | 高优先级维护路由，热切换，可恢复 |
| 可观测性 | DSM 系统日志 | 每 Host access/error log + UI | API + Dashboard（内网）+ 管理页 + 日志 |
| Docker 集成 | 弱，需发布宿主端口 | 弱，需发布宿主端口 | 强，可直接走 Docker 网络 |
| 后端暴露面 | 大，直连 HTTP 端口多 | 中，仍需宿主端口 | 小，可只暴露反代端口 |
| 升级影响 | DSM 升级可能影响配置 | 升级 NPM 容器 | 升级 Traefik 容器，配置外置 |
| 回滚 | 恢复 DSM 备份 | 恢复 SQLite/目录 | 改回旧 Compose/证书，或保留旧入口 |
| 非 HTTP 协议 | 不处理（SSH/SMB/NFS 仍需端口映射） | 不处理 | 不处理（需 TCP entryPoint 或单独方案） |
| 学习曲线 | 低 | 低 | 中高 |
| 适用规模 | 少量服务、端口够用 | 十几到几十个 Web 服务 | 服务持续增长、需要自动化和统一治理 |

### 6.1 能力边界说明

三者都不是“万能入口”：

- **SSH**（Gitea `2222`、Gogs `8221`、NAS `22`）、**SMB/NFS**、**Synology Drive `6690`**、**RTSP** 这类非 HTTP(S) 流量不能靠普通 HTTP 路由解决，仍需要独立端口或 VPN/管理通道。
- DSM 自身的 Web 服务仍由 DSM nginx 提供；Traefik 只是把 DSM 的 `5101` 当作一个后端，不是替换 DSM 内部 nginx。
- 如果以后公网 `443` 恢复，所有带 `:9443` 的对外 URL 都要同步修改（Gitea、Gogs、MinIO 等），这是当前运营商限制带来的临时成本。

---

## 7. 与 DSM nginx 相比，Traefik 的核心优势

### 7.1 从一个端口一个服务，变成一个端口所有服务

DSM 时代，暴露的是 11 个专用反代端口（多数映射到公网）加若干直连端口；路由器、防火墙、NAS 监听、证书都要跟着端口走。

现在统一入口只开 `9443`（未来恢复 `443`），所有 Web 服务通过 SNI/Host 分流；旧端口是迁移期回退，验证完成后逐个关闭。新增服务不再需要：

- 在路由器新增端口映射；
- 在 DSM 新增反向代理规则；
- 为新端口单独处理证书；
- 在公网防火墙再开一个洞。

只需要 DNS 能解析到入口，并加一条路由。

### 7.2 配置即代码，可审计、可回滚

DSM 的规则藏在 `/usr/syno/etc/www/ReverseProxy.json` 和生成的 nginx 配置里，改了什么只能靠记忆或整机备份。

Traefik 的路由分布在两类人类可读的文件中：

- 容器自己的 `docker-compose.yml` Labels；
- `traefik/config/dynamic/*.yml`。

它们可以直接 diff、纳入 Git、复制到另一台机器，也能在出问题时删除单个 `zz-override-*.yml` 立即恢复。迁移过程中所有旧配置都有 `.bak-before-*` 备份，回滚边界清晰。

### 7.3 Docker 原生，后端不必暴露到宿主机

DSM nginx 要反代一个容器，容器必须先把端口发布到宿主机；Traefik 可以直接通过 Docker 网络访问容器端口。

结果是：

- 后端可以只存在于 `nas-traefik`、`minio_default`、`gitea-net` 等内部网络；
- 不需要为了反代而把 `5230`、`7999`、`8083`、`8091`、`8123` 全部发布到 `0.0.0.0`；
- 容器重建、改端口、换网络时，Labels 会跟着服务走，路由自动更新。

### 7.4 证书集中、自动、与反代解耦

DSM 的证书和规则绑定，新增域名就要重复处理；NPM 把证书放进自己的数据库和目录；Traefik 只读两个 PEM 文件。

现在由 acme.sh 统一负责：

- 一张 `*.amdyes.tech` 覆盖所有子域名；
- DNS-01 不依赖公网 80；
- 续期后 `touch` 动态配置，Traefik 热加载；
- 证书组件可以独立升级、独立排障，不再和反代 UI 或 DSM 绑定。

### 7.5 中间件让“入口”具备治理能力

DSM 反代只能转发。Traefik 可以在转发前后做统一处理：

- **登录**：`home.amdyes.tech` 通过 `forwardAuth` 复用管理页会话，未登录不能看导航页；
- **路径处理**：MinIO 控制台的 `/console/` 前缀剥离、`/api/` 等资源路径分流；
- **维护模式**：管理页写入一条高优先级路由，把指定域名切到 503 维护页，后端容器不停，内网和旧端口不受影响；
- **后端适配**：`passHostHeader: false` 解决小米路由器 Host 校验；`serversTransport` 单独处理 DSM 自签证书；
- **扩展空间**：需要时还可以加限流、请求头、重试、熔断等中间件，不用改后端。

这是 DSM nginx 完全不具备的一层能力。

### 7.6 安全边界更小

DSM 方案里，HTTPS 反代和直连 HTTP 端口并存，很多服务实际上可以绕过 HTTPS 访问；MySQL、SSH 也和 Web 端口混在同一批公网映射中。

Traefik 方案把入口收敛为：

- 一个公网端口 → Traefik；
- Traefik → Docker 内网或宿主机指定端口；
- Docker API 只通过只读 socket proxy；
- 管理 API 不发布到宿主机；
- 默认不暴露任何容器（`exposedByDefault: false`）；
- 路由上下线有二次密码和审计日志。

旧端口仍然存在是**迁移期的回退策略**，不是目标状态；随着客户端验证完成，可以逐个关闭，攻击面会持续缩小。

### 7.7 可观测性和可运维性

- Traefik API 能直接看到每个 router/service 的状态和后端健康情况；
- 自建管理页把“路由列表、上下线、维护模式、新容器发现、审计日志”集中到一个入口；
- 动态配置热加载，改路由不需要重启 DSM 或中断所有服务；
- 出问题可以按“DNS → 端口 → 证书 → 路由规则 → 后端”逐层定位，每层都有独立配置和日志。

DSM 反代出问题时，通常只能看系统 nginx 日志和 DSM 界面，定位链路更长。

### 7.8 与 DSM 解耦

Traefik 跑在 Docker 里，配置在 `/volume1/docker`，证书由独立容器维护。DSM 升级、证书中心调整、套件变更都不会直接改写路由。

这带来两个长期收益：

- NAS 迁移或 DSM 重装时，`/volume1/docker` 下的 Compose、动态配置、证书和备份可以直接带走；
- DSM 从“入口 + 后端”降级为“后端之一”，入口的稳定性不再依赖 DSM 的版本和状态。

### 7.9 更适合持续增长的服务数量

DSM 模式下，服务数量增长意味着端口、规则、证书、路由器映射线性增长，管理成本是 O(n)。

Traefik 模式下，入口数量固定为 1，新增服务的边际成本只有“DNS + 一条路由”。服务越多，两者的差距越明显。

---

## 8. 相对 NPM 的增益

NPM 已经解决了 DSM 时代最痛的两个问题：单端口和泛域名证书。Traefik 在此基础上进一步解决“配置方式和运维模型”：

| 能力 | NPM | Traefik |
|---|---|---|
| 路由定义 | Web UI 逐条创建 | Compose Labels / YAML |
| 服务发现 | 手工填后端 | Docker 自动发现 |
| 路径分流 | custom location 片段 | 原生 router + 优先级 + stripPrefix |
| 统一鉴权 | Access List | forwardAuth 可对接自建登录 |
| 维护模式 | 禁用 host 或停容器 | 高优先级路由热切换 |
| 配置版本化 | SQLite + 生成文件 | 纯文本，可 Git |
| 管理面 | 内置 Web UI | 自建 `traefik-admin` + 内网 API |
| 证书依赖 | NPM 自身 | 独立 acme.sh |

代价是 Traefik 没有 NPM 那样开箱即用的完整 UI，需要自己维护一套管理页；但这套管理页是只读 Docker + 读写单个覆盖文件，比维护一个带数据库的反代应用更轻。

---

## 9. 代价、限制与当前遗留

### 9.1 引入的复杂度

- **概念更多**：entryPoint、provider、router、middleware、service、serversTransport，需要理解匹配顺序和优先级。
- **排障方式变化**：路由不生效时，要同时检查 Labels、动态 YAML、Docker 网络、DNS，而不是在一个 UI 里看。
- **没有官方 UI**：路由管理依赖自建 `traefik-admin`；它本身也是需要备份和监控的组件。
- **标签即配置**：Labels 写错不会报错，只会少一条路由；管理页的“新容器发现”能缓解，但不能完全替代校验。

### 9.2 已经踩过的坑

- **容器内回连自己**：MinIO 控制台登录 503，原因是 `host-gateway` 解析到 `172.17.0.1`，而 Traefik 只监听 `192.168.1.88:9443`；通过 `extra_hosts: minio.amdyes.tech:192.168.1.88` 解决。
- **Host 校验**：小米路由器对非自身 Host 返回 502，使用 `passHostHeader: false`。
- **自签证书**：DSM `5101` 使用自签证书，必须为它单独配置 `insecureSkipVerify` 的 serversTransport，不能全局关闭校验。
- **应用自身 URL**：Gitea、Gogs、MinIO 都在应用配置里写死了对外域名和端口，迁移入口端口时必须同步修改，否则重定向、预签名 URL、Webhook 会出错。
- **跨 Docker 网络**：Traefik 需要加入目标容器所在网络（`minio_default`、`gitea-net`），否则 Labels 存在也连不上后端。

### 9.3 尚未完成/需要持续处理

1. **公网 443 仍被运营商阻断**，当前所有 URL 带 `:9443`。恢复 443 后要统一改 Gitea、Gogs、MinIO 等应用配置。
2. **旧端口尚未全部关闭**：`5100/5101`、`5230`、`7999`、`8083`、`8091`、`8123`、`9000`、`9005` 等仍是回退入口；`5306` MySQL 和 `5280` 路由器反代是更高优先级的安全债。
3. **Photos 客户端未完整验证**：手机登录、上传、视频、断点续传、后台备份都要在关闭 `5101` 前完成。
4. **MinIO 大文件和预签名 URL**：控制台登录已验证，但上传/下载/匿名读取/旧预签名失效仍需完整回归。
5. **Gitea/Gogs 完整 Git 操作**：HTTPS 克隆、推送、Webhook 需要验证；SSH 仍走 `2222`/`8221` 或 `8094` 转发。
6. **DSM 受信任代理**：需要在 DSM 中配置受信任代理，保证 Photos/DSM 拿到正确的客户端 IP 和协议。
7. **单点风险**：Traefik、acme.sh、`traefik-admin` 都是单实例；需要纳入健康检查和备份，证书续期失败要有告警。

---

## 10. 运维手册

### 10.1 新增一个 Docker 服务

```yaml
services:
  app:
    image: example/app:latest
    networks:
      - traefik
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.app.rule=Host(`app.amdyes.tech`)"
      - "traefik.http.routers.app.entrypoints=websecure"
      - "traefik.http.routers.app.tls=true"
      - "traefik.http.services.app.loadbalancer.server.port=8080"
      - "traefik.docker.network=nas-traefik"

networks:
  traefik:
    external: true
    name: nas-traefik
```

步骤：

1. 确认 `*.amdyes.tech` 泛解析已覆盖该域名（默认覆盖一级子域名）。
2. 容器加入 `nas-traefik` 网络，Labels 里的端口是**容器内端口**。
3. `docker compose up -d` 后，Traefik 自动发现，不需要重启。
4. 用 `curl -vk --resolve app.amdyes.tech:9443:192.168.1.88 https://app.amdyes.tech:9443/` 验证。

### 10.2 新增一个非 Docker/宿主服务

在 `/volume1/docker/traefik/config/dynamic/` 下新增 YAML（或在 `dynamic.yml` 中追加）：

```yaml
http:
  routers:
    legacy:
      rule: Host(`legacy.amdyes.tech`)
      entryPoints: [websecure]
      service: legacy
      tls: true
  services:
    legacy:
      loadBalancer:
        servers:
          - url: http://192.168.1.88:8080
```

Traefik watch 到文件变化后热加载。

### 10.3 路由下线/上线

通过 `https://home.amdyes.tech:9443/admin/`：

- 下线：写入 `zz-override-<host>.yml`，高优先级维护路由，返回 503；后端不停。
- 上线：删除对应覆盖文件，原路由恢复。
- 两个操作都需要再次输入管理员密码，并写入审计日志。

手动恢复：

```bash
ls /volume1/docker/traefik/config/dynamic/zz-override-*.yml
rm /volume1/docker/traefik/config/dynamic/zz-override-<host>.yml
```

### 10.4 证书检查与续期

```bash
# 查看证书状态
docker exec acme acme.sh --list

# 查看续期日志
docker logs --tail 100 acme
tail -100 /volume1/docker/acme.sh/acme.sh.log

# 确认 Traefik 读到的证书
openssl x509 -in /volume1/docker/acme.sh/traefik-certs/fullchain.pem -noout -subject -dates

# 手动触发续期（通常不需要，daemon 自动执行）
docker exec acme acme.sh --renew -d '*.amdyes.tech' --ecc --force
```

续期成功后会执行 `touch /traefik-config/dynamic/dynamic.yml`，Traefik 自动重载证书。

### 10.5 排障顺序

```text
1. DNS：dig +short <域名>            → 是否解析到公网 IP / 内网 IP
2. 端口：nc -vz <公网IP> 9443        → 路由器映射/运营商是否放行
3. TLS：openssl s_client -connect …  → 证书是否为 *.amdyes.tech
4. 路由：Traefik API / 管理页         → router 是否存在，service 是否 UP
5. 后端：curl 直连容器/宿主端口        → 应用本身是否正常
6. 应用：ROOT_URL / 回调 / Webhook     → 域名端口是否写对
```

常见现象：

| 现象 | 优先检查 |
|---|---|
| 404 | Host 规则不匹配、路由未启用、优先级被覆盖 |
| 502 | 后端地址/端口错误、容器不在同一网络、后端未启动 |
| 503 | 管理页维护路由生效，删除 `zz-override-*.yml` |
| 证书错误 | acme.sh 续期失败、Traefik 未重载、证书路径挂载错误 |
| 登录后跳回/回连失败 | 应用对外 URL、`extra_hosts`、`X-Forwarded-*` |
| WebSocket 失败 | middleware/超时、后端代理配置、HA `trusted_proxies` |

### 10.6 备份与回滚

| 内容 | 位置 |
|---|---|
| DSM 反代规则 | `/volume1/docker/backups/dsm-reverse-proxy-20261111-180929.tar.gz` |
| DSM 反代 + 证书完整备份 | `/volume1/docker/backups/dsm-reverse-proxy-full-20261111-180957.tar.gz` |
| NPM 完整退役备份 | `/volume1/docker/backups/npm-retired-20261111.tar.gz` |
| Traefik 各阶段 Compose | `/volume1/docker/traefik/compose.yml.bak-*` |
| Traefik 各阶段动态配置 | `/volume1/docker/traefik/config/dynamic/*.bak-*` |
| 服务 Compose 迁移前备份 | 各服务目录 `*.bak-before-traefik-20261111` |
| 证书与 acme.sh 配置 | `/volume1/docker/acme.sh/` |

回滚建议：

- **单条路由**：改回对应 Labels 或恢复 YAML 备份，Traefik 热加载。
- **整个入口**：恢复旧 Compose 和证书目录；旧端口仍在，可在 Traefik 故障时把路由器映射切回旧入口。
- **DSM 反代**：在维护窗口解包 `dsm-reverse-proxy-full` 备份到原路径，并重启 DSM nginx；操作前确认不会覆盖新增规则。

---

## 11. 结论

三代方案的本质区别：

- **DSM nginx** 解决了“能不能从公网访问”，但模型是**端口驱动**的，服务一多就变成端口、规则、证书、映射的线性堆积，且与 DSM 深度绑定。
- **NPM** 把“端口驱动”升级为“域名驱动”，用单端口和泛域名证书把入口收口，但仍需要逐条手工配置，配置不可版本化，也没有服务发现。
- **Traefik** 把入口变成**声明式基础设施**：路由跟服务走，证书独立自动化，中间件提供统一治理，管理页补齐运维能力。它解决的不只是“反代”，而是“服务数量增长后入口如何持续可维护”。

对这台 NAS 来说，最直接的收益是：

1. 统一入口从 11+ 个端口收敛到 1 个（旧端口作为回退暂留，需继续清理）；
2. 新增服务从“改三处 + 加证书”变成“加 DNS + 加一条路由”；
3. 证书从按规则维护变成一张泛域名证书自动续期；
4. 后端从“必须暴露宿主端口”变成“可以直接走 Docker 内网”；
5. 入口配置变成可备份、可 diff、可回滚的文本；
6. 具备统一登录、维护模式、路由状态和审计能力。

代价是更高的理解和维护门槛，以及一套自建管理页、acme.sh 和 Traefik 三者的单点运维责任。就当前的服务数量和增长趋势而言，这个交换是值得的。

后续工作的重点不在继续加功能，而在**收尾**：验证剩余客户端、关闭旧端口、恢复标准 443（如运营商允许）、为证书续期和入口健康建立告警。只有旧入口真正关闭，安全边界才算完整。
