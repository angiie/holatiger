from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
TEMPLATE = ROOT / "_sources/guizang-social-card-skill/assets/template-swiss-card.html"
OUT = Path(__file__).resolve().parent / "index.html"

css = r"""

    /* ---------- Task: NAS proxy evolution, Swiss / IKB ---------- */
    .page-body { display: flex; flex-direction: column; gap: var(--sp-7); }
    .page-foot { margin-top: auto; display: flex; justify-content: space-between; align-items: baseline; gap: var(--sp-6); border-top: var(--rule); padding-top: var(--sp-4); color: var(--text-helper); }
    .page-foot > * { margin: 0; }
    .cover-title { max-width: 8em; }
    .entry-shift { display: grid; grid-template-columns: 1fr 88px 1fr; align-items: stretch; gap: var(--sp-5); }
    .entry-shift .stat { display: flex; flex-direction: column; justify-content: space-between; gap: var(--sp-7); padding: var(--sp-7) 0; border-top: var(--rule-strong); border-bottom: var(--rule); }
    .entry-shift .stat-accent { padding: var(--sp-7); }
    .entry-shift .arrow { display: flex; align-items: center; justify-content: center; color: var(--accent-ink); }
    .entry-shift .num { font-family: var(--font-display); font-size: 152px; font-weight: 200; line-height: .95; letter-spacing: -.03em; margin: 0; }
    .entry-shift .lbl { font-family: var(--font-sans); font-size: 26px; line-height: 1.45; margin: 0; color: var(--text-secondary); }
    .entry-shift .stat-accent .lbl { color: var(--text-body); }
    .callout { padding: var(--sp-6) var(--sp-7); border-left: 4px solid var(--accent); background: var(--paper-2); }
    .callout > * { margin: 0; }
    .request-flow { display: flex; flex-direction: column; gap: 0; }
    .request-node { display: grid; grid-template-columns: 80px 1fr; gap: var(--sp-6); align-items: center; min-height: 112px; padding: var(--sp-5) 0; border-top: var(--rule-strong); }
    .request-node:last-of-type { border-bottom: var(--rule); }
    .request-node .node-nb { font-family: var(--font-mono); font-size: 22px; color: var(--accent-ink); }
    .request-node .node-title { font-family: var(--font-display); font-size: 42px; font-weight: 400; line-height: 1.15; margin: 0; }
    .request-node .node-desc { font-family: var(--font-sans); font-size: 25px; line-height: 1.45; color: var(--text-secondary); margin: var(--sp-2) 0 0; }
    .flow-arrow { height: 40px; display: flex; align-items: center; justify-content: center; color: var(--accent-ink); }
    .middleware-band { display: grid; grid-template-columns: 1fr 1fr; gap: var(--sp-7); }
    .middleware-band > div { padding: var(--sp-6); }
    .middleware-band p { margin: 0; }
    .middleware-band .band-title { font-family: var(--font-display); font-size: 32px; font-weight: 500; line-height: 1.3; }
    .middleware-band .band-note { font-family: var(--font-sans); font-size: 24px; line-height: 1.45; margin-top: var(--sp-3); color: var(--text-body); }
    .final-list { list-style: none; margin: 0; padding: 0; border-top: var(--rule-strong); }
    .final-row { display: grid; grid-template-columns: 76px 190px 1fr; gap: var(--sp-6); align-items: baseline; padding: var(--sp-7) 0; border-bottom: var(--rule); }
    .final-row .nb { font-family: var(--font-mono); font-size: 22px; color: var(--accent-ink); }
    .final-row .name { font-family: var(--font-display); font-size: 38px; font-weight: 400; margin: 0; }
    .final-row .desc { font-family: var(--font-sans); font-size: 25px; line-height: 1.5; color: var(--text-secondary); margin: 0; }
    .poster[data-surface="ink"] { background: var(--ink); color: var(--paper); }
    .poster[data-surface="ink"] :is(.h-hero, .h-statement, .h-xl, .h-md, .num-mega, .num-xl) { color: var(--paper); }
    [data-surface="ink"] .page-foot { color: var(--text-helper); }
    [data-surface="ink"] .gz-quote { margin: auto 0; }
    [data-surface="ink"] .gz-quote__text { color: var(--paper); }
    /* Measured title-to-content spacing (R9). */
    #xhs-02-problem .stack.gap-5 { gap: var(--sp-7); }
    #xhs-03-evolution .callout.gap-4 { gap: var(--sp-5); }
    #xhs-04-request-flow > .content,
    #xhs-05-migration > .content { gap: var(--sp-7); }
"""

posters = r"""
    <!-- Page 01 / S01 Accent Cover -->
    <section class="poster xhs" id="xhs-01-cover">
      <div class="content stack gap-8">
        <div class="gz-chrome gz-t-meta" data-pos="top">
          <div class="gz-chrome__group"><span class="gz-chrome__accent">HOMELAB</span><span>反向代理</span></div>
          <div class="gz-chrome__group"><span>01 / 07</span></div>
        </div>
        <div class="stack gap-5">
          <p class="t-cat">NAS PORT CLEANUP</p>
          <h1 class="h-statement cover-title">NAS 端口<br>太多了</h1>
        </div>
        <div class="entry-shift">
          <div class="stat">
            <p class="num">11+</p>
            <p class="lbl">原来的公网入口<br>服务越多，越难盘</p>
          </div>
          <div class="arrow"><i data-lucide="arrow-right" width="52" height="52"></i></div>
          <div class="stat stat-accent card-accent">
            <p class="num">1</p>
            <p class="lbl">目标：统一 HTTPS 主入口<br>按域名与路径分流</p>
          </div>
        </div>
        <p class="lead">从 DSM 自带反代，到 NPM，再到 Traefik。主入口先收敛，旧端口再收尾。</p>
        <div class="page-foot gz-t-meta"><span>PORT-DRIVEN → SERVICE-DRIVEN</span><span>NAS 反代升级记</span></div>
      </div>
    </section>

    <!-- Page 02 / S02 Comparison -->
    <section class="poster xhs" id="xhs-02-problem">
      <div class="content stack gap-7">
        <div class="gz-chrome gz-t-meta" data-pos="top"><div class="gz-chrome__group"><span class="gz-chrome__accent">WHY</span><span>起因</span></div><span>02 / 07</span></div>
        <div class="stack gap-5">
          <h2 class="h-xl">不是 nginx 不行</h2>
          <p class="lead">真正失控的是「一个服务一个端口」的入口模型。</p>
        </div>
        <div class="gz-compare">
          <section class="gz-compare__side" data-side="before">
            <div class="gz-compare__tag gz-t-label">BEFORE · 端口驱动</div>
            <h3 class="gz-compare__title gz-t-heading">每多一个服务，就多出一串配置</h3>
            <ul class="gz-compare__list gz-t-small">
              <li>新增公网端口和路由器映射</li>
              <li>证书与反代规则分散维护</li>
              <li>直连 HTTP 可能绕过统一入口</li>
            </ul>
          </section>
          <div class="gz-compare__rule"></div>
          <section class="gz-compare__side" data-side="after">
            <div class="gz-compare__tag gz-t-label">AFTER · 域名 + 服务驱动</div>
            <h3 class="gz-compare__title gz-t-heading">入口固定，路由按服务增加</h3>
            <ul class="gz-compare__list gz-t-small">
              <li>Web 服务统一走 HTTPS 主入口</li>
              <li>按域名、路径和优先级分流</li>
              <li>后端优先只走内部网络</li>
            </ul>
          </section>
        </div>
        <div class="callout"><p class="body">先收敛暴露面，再提升可维护性。</p></div>
        <div class="page-foot gz-t-meta"><span>THE REAL BOTTLENECK</span><span>入口模型，而非性能</span></div>
      </div>
    </section>

    <!-- Page 03 / S06 Architecture Evolution -->
    <section class="poster xhs" id="xhs-03-evolution">
      <div class="content stack gap-7">
        <div class="gz-chrome gz-t-meta" data-pos="top"><div class="gz-chrome__group"><span class="gz-chrome__accent">EVOLUTION</span><span>三代架构</span></div><span>03 / 07</span></div>
        <h2 class="h-xl">三次升级<br>解决三件事</h2>
        <ol class="gz-process" style="--n:3">
          <li class="gz-process__step"><span class="gz-process__nb gz-t-label">01 · DSM</span><h3 class="gz-process__title gz-t-heading">自带反代</h3><p class="gz-process__desc gz-t-small">能用，但端口、规则和证书一起增长。</p></li>
          <li class="gz-process__step"><span class="gz-process__nb gz-t-label">02 · NPM</span><h3 class="gz-process__title gz-t-heading">入口收拢</h3><p class="gz-process__desc gz-t-small">统一入口、域名分流、泛域名证书。</p></li>
          <li class="gz-process__step"><span class="gz-process__nb gz-t-label">03 · TRAEFIK</span><h3 class="gz-process__title gz-t-heading">声明式治理</h3><p class="gz-process__desc gz-t-small">路由跟服务走，自动发现，中间件组合。</p></li>
        </ol>
        <div class="callout stack gap-4">
          <p class="t-cat">新增一个 Docker 服务</p>
          <p class="h-md">确认 DNS + 加一条路由</p>
          <p class="body">不再需要为每个 Web 服务新增公网端口映射。</p>
        </div>
        <div class="page-foot gz-t-meta"><span>DSM → NPM → TRAEFIK</span><span>先收口，再声明式化</span></div>
      </div>
    </section>

    <!-- Page 04 / S06 Request Flow -->
    <section class="poster xhs" id="xhs-04-request-flow">
      <div class="content stack gap-6">
        <div class="gz-chrome gz-t-meta" data-pos="top"><div class="gz-chrome__group"><span class="gz-chrome__accent">REQUEST FLOW</span><span>统一入口</span></div><span>04 / 07</span></div>
        <h2 class="h-xl">一次访问<br>到底怎么走</h2>
        <div class="request-flow">
          <div class="request-node"><span class="node-nb">01</span><div><p class="node-title">互联网用户</p><p class="node-desc">通过 HTTPS 访问服务域名</p></div></div>
          <div class="flow-arrow"><i data-lucide="arrow-down" width="30" height="30"></i></div>
          <div class="request-node"><span class="node-nb">02</span><div><p class="node-title">路由器 / 防火墙</p><p class="node-desc">仅转发统一主入口</p></div></div>
          <div class="flow-arrow"><i data-lucide="arrow-down" width="30" height="30"></i></div>
          <div class="request-node"><span class="node-nb">03</span><div><p class="node-title">Traefik</p><p class="node-desc">Host + Path + 优先级匹配</p></div></div>
          <div class="flow-arrow"><i data-lucide="arrow-down" width="30" height="30"></i></div>
          <div class="request-node"><span class="node-nb">04</span><div><p class="node-title">后端服务</p><p class="node-desc">Docker 容器 · 宿主服务 · 其他内网服务</p></div></div>
        </div>
        <div class="middleware-band">
          <div class="card-accent"><p class="band-title">中间件</p><p class="band-note">统一登录 / 路径处理 / 维护模式</p></div>
          <div class="card-fill"><p class="band-title">证书闭环</p><p class="band-note">独立申请续期，入口热加载</p></div>
        </div>
        <div class="page-foot gz-t-meta"><span>DEFAULT DENY</span><span>默认不暴露 · 只读代理</span></div>
      </div>
    </section>

    <!-- Page 05 / S06 Migration Pipeline -->
    <section class="poster xhs" id="xhs-05-migration">
      <div class="content stack gap-6">
        <div class="gz-chrome gz-t-meta" data-pos="top"><div class="gz-chrome__group"><span class="gz-chrome__accent">MIGRATION</span><span>平滑迁移</span></div><span>05 / 07</span></div>
        <h2 class="h-xl">不停机迁移<br>按这个顺序</h2>
        <ol class="gz-process" style="--n:5">
          <li class="gz-process__step"><span class="gz-process__nb gz-t-label">01</span><h3 class="gz-process__title gz-t-heading">盘点备份</h3><p class="gz-process__desc gz-t-small">记录规则、证书与回退点。</p></li>
          <li class="gz-process__step"><span class="gz-process__nb gz-t-label">02</span><h3 class="gz-process__title gz-t-heading">并行部署</h3><p class="gz-process__desc gz-t-small">旧服务不停，先跑过渡与测试入口。</p></li>
          <li class="gz-process__step"><span class="gz-process__nb gz-t-label">03</span><h3 class="gz-process__title gz-t-heading">单服务验证</h3><p class="gz-process__desc gz-t-small">逐项迁移，并做外网多节点检查。</p></li>
          <li class="gz-process__step"><span class="gz-process__nb gz-t-label">04</span><h3 class="gz-process__title gz-t-heading">切换主入口</h3><p class="gz-process__desc gz-t-small">证书解耦，逐项回归。</p></li>
          <li class="gz-process__step"><span class="gz-process__nb gz-t-label">05</span><h3 class="gz-process__title gz-t-heading">退役旧方案</h3><p class="gz-process__desc gz-t-small">客户端验证后，逐个关闭旧入口。</p></li>
        </ol>
        <div class="callout"><p class="body">旧入口只作临时回退，不是最终状态。</p></div>
        <div class="page-foot gz-t-meta"><span>NO BIG-BANG CUTOVER</span><span>每一步都可回退</span></div>
      </div>
    </section>

    <!-- Page 06 / S05 Warning Ledger -->
    <section class="poster xhs" id="xhs-06-pitfalls">
      <div class="content stack gap-7">
        <div class="gz-chrome gz-t-meta" data-pos="top"><div class="gz-chrome__group"><span class="gz-chrome__accent">PITFALLS</span><span>踩坑记录</span></div><span>06 / 07</span></div>
        <h2 class="h-xl">这些坑，提前避开</h2>
        <ol class="gz-ledger">
          <li class="gz-ledger__row"><span class="gz-ledger__nb gz-t-label">01</span><div><div class="gz-ledger__title gz-t-heading">NAT 回环</div><p class="gz-ledger__note gz-t-small">内网访问成功，不等于公网可用。</p></div><span class="gz-ledger__value gz-t-meta">外网验证</span></li>
          <li class="gz-ledger__row"><span class="gz-ledger__nb gz-t-label">02</span><div><div class="gz-ledger__title gz-t-heading">后端 502</div><p class="gz-ledger__note gz-t-small">检查 Host 头、Docker 网络与协议。</p></div><span class="gz-ledger__value gz-t-meta">别只重启</span></li>
          <li class="gz-ledger__row"><span class="gz-ledger__nb gz-t-label">03</span><div><div class="gz-ledger__title gz-t-heading">应用对外地址</div><p class="gz-ledger__note gz-t-small">重定向、Webhook、预签名链接都要同步。</p></div><span class="gz-ledger__value gz-t-meta">同步修改</span></li>
          <li class="gz-ledger__row"><span class="gz-ledger__nb gz-t-label">04</span><div><div class="gz-ledger__title gz-t-heading">非 HTTP 流量</div><p class="gz-ledger__note gz-t-small">SSH、SMB 等仍需独立方案。</p></div><span class="gz-ledger__value gz-t-meta">别硬套</span></li>
        </ol>
        <div class="callout"><p class="body">自签证书只针对单独后端处理，不要全局关闭证书校验。</p></div>
        <div class="page-foot gz-t-meta"><span>VERIFY LAYER BY LAYER</span><span>DNS → 入口 → TLS → 路由 → 后端</span></div>
      </div>
    </section>

    <!-- Page 07 / S07 Closing Ledger -->
    <section class="poster xhs" id="xhs-07-takeaway" data-surface="ink">
      <div class="content stack gap-7">
        <div class="gz-chrome gz-t-meta" data-pos="top"><div class="gz-chrome__group"><span class="gz-chrome__accent">TAKEAWAY</span><span>选型结论</span></div><span>07 / 07</span></div>
        <h2 class="h-xl">先收敛端口<br>再谈自动化</h2>
        <ol class="final-list">
          <li class="final-row"><span class="nb">01</span><p class="name">少量服务</p><p class="desc">DSM 自带反代或 NPM 就够。</p></li>
          <li class="final-row"><span class="nb">02</span><p class="name">快速统一</p><p class="desc">NPM 的图形界面更友好。</p></li>
          <li class="final-row"><span class="nb">03</span><p class="name">持续增长</p><p class="desc">再考虑 Traefik：自动发现、配置即代码、统一治理。</p></li>
        </ol>
        <figure class="gz-quote">
          <blockquote class="gz-quote__text gz-t-quote"><p>最大的收益，是入口变得可描述、可验证、可回滚。</p></blockquote>
        </figure>
        <div class="page-foot gz-t-meta"><span>FINAL CHECK</span><span>旧端口关闭后，安全收尾才完成</span></div>
      </div>
    </section>
"""

html = TEMPLATE.read_text()
html = html.replace("<title>[必填] 替换为社交卡组标题 · Social Card Set</title>", "<title>NAS 端口收敛：反向代理三代演进 · Social Card Set</title>")
html = html.replace("</style>", css + "\n  </style>", 1)
start = html.index("    <!-- POSTERS_HERE -->")
end = html.index("  </main>", start)
html = html[:start] + posters + html[end:]
OUT.write_text(html)
print(OUT)
