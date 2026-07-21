# HolaTiger Semrush 数据结构

本目录存放 6 款产品的 off-page SEO 工作底稿。**不提交实际抓取数据**（不跟踪变化，体积大，存本地即可），只提交**模板、README、策略框架**。

---

## 工具

### Semrush 镜像

主站 semrush.com 在国内访问不稳定。使用镜像：

- 镜像 URL：`https://zh.semrush.fast.wmxpro.com/`
- 入口路径：Domain Analytics → Backlinks / Organic Research / Keyword Magic
- 数据范围：与主站同步，无功能差异
- 账号：复用主站 Semrush 订阅

镜像与主站的区别：
- 主站：app.semrush.com
- 镜像：zh.semrush.fast.wmxpro.com（端口和路径可能变化，以浏览器地址栏为准）

---

## 目录结构

```
seo-data/
├── README.md                    # 本文件
├── SEMRUSH-WORKFLOW.md          # 完整抓取 SOP
├── _template/                   # CSV 模板
│   ├── keywords.csv
│   ├── backlinks-targets.csv
│   ├── content-map.csv
│   └── prospect-batch.csv
└── products/
    ├── tinypic/                 # 每产品一份策略 + 4 个 CSV
    ├── webdavy/
    ├── tinypass/
    ├── svg-studio/
    ├── text-to-png/
    ├── ezpixy/
    └── banana/
```

每个产品目录的 README 包含：
1. 核心关键词清单（手工初判）
2. 3-5 个核心竞品域名
3. 链接建设策略
4. 内容排期建议

---

## 工作流（每个产品）

按以下顺序抓取并填充 CSV。每周完成 1 个产品。

### Step 1: 竞品识别（30 分钟）
在 Semrush 镜像 → Organic Research 输入本产品主词：
- `tinypic` → "image compressor"、"jpg compress"
- `webdavy` → "webdav chrome"、"webdav client"
- `tinypass` → "password generator"
- `svg-studio` → "svg to png"、"svg editor online"
- `text-to-png` → "text to image"、"create text png"
- `ezpixy` → "ai fashion model"、"ai clothing model"
- `banana` → "remove gemini watermark"

从结果中筛 DR ≥ 30 且不是自己的域，前 3-5 个写入 `competitors.md`。

### Step 2: 反查外链（45 分钟）
Semrush → Backlinks → 输入每个竞品域 → Export CSV。
合并所有竞品的外链，按 DR 降序排列，前 50 个写入 `backlinks-targets.csv`。
去重后保留 30-50 个高价值域名。

### Step 3: 关键词挖掘（45 分钟）
Semrush → Keyword Magic → 输入主词 → 选 Long Tail + Questions。
过滤 KD ≤ 30、Volume ≥ 100，按 Volume 降序导出。
写入 `keywords.csv`，按 search intent 分组（informational / commercial / transactional）。

### Step 4: 内容映射（30 分钟）
基于关键词清单 + 已有页面，规划新增或优化内容。
写入 `content-map.csv`，含 URL、类型（blog/use case/landing）、字数、状态。

### Step 5: Prospect 外联（每批 20-30 个）
从 `backlinks-targets.csv` 取一批 20-30 个域名。
填入 `prospect-batch-N.csv`，加联系邮箱、状态字段。
手工发邮件（用模板，按 product 不同调整）。

### Step 6: 复盘（每月 1 次）
- 已获取外链数 / 总外联数 = 转化率
- 新增关键词排名数（top 50）
- 自然流量增长（按产品页 / 按竞品主题）

---

## CSV 字段说明

### keywords.csv
| 字段 | 说明 |
|---|---|
| keyword | 关键词 |
| search_volume | 月搜索量 |
| kd | 关键词难度（0-100） |
| intent | informational / commercial / transactional / navigational |
| current_rank | 当前排名（如有） |
| target_page | 目标 URL（已有 / 计划创建） |
| priority | high / medium / low |
| notes | 备注（季节性、变体等） |

### backlinks-targets.csv
| 字段 | 说明 |
|---|---|
| domain | 目标域名 |
| dr | Domain Rating（0-100） |
| traffic | 月流量（Semrush） |
| ref_domains | 反链数（反映权威度） |
| competitor | 从哪个竞品发现 |
| target_page | 链接到我们哪页 |
| contact_email | 联系邮箱（用 Hunter.io 找） |
| status | todo / contacted / replied / linked / rejected |
| last_contact | 最后联系日期 |

### content-map.csv
| 字段 | 说明 |
|---|---|
| keyword | 目标关键词 |
| target_url | 落地 URL |
| content_type | blog / use-case / comparison / landing / faq |
| word_count | 目标字数 |
| deadline | 计划上线日期 |
| author | 撰稿人 |
| status | backlog / writing / review / published |

### prospect-batch-N.csv
每批 20-30 行，从 `backlinks-targets.csv` 复制而来，新增：
- outreach_template (A / B / C 选哪个模板)
- sent_date / follow_up_date
- reply_status (no-reply / interested / negotiating / placed)

---

## 不要做的事

- ❌ 不提交实际抓取的 CSV（变化大，体积大）
- ❌ 不写入 Semrush API key / 账号信息
- ❌ 不复制竞品原文到我们的内容
- ❌ 不批量购买外链（Google 处罚风险）
- ❌ 不在 Guest Post 里塞过度商业化锚文本（保持 70% 品牌 / URL / 泛词）

---

## 月度节奏

| 周次 | 任务 |
|---|---|
| Week 1 | Step 1-2：竞品识别 + 反查外链（一个产品） |
| Week 2 | Step 3-4：关键词挖掘 + 内容映射 |
| Week 3 | Step 5：Prospect 外联（20-30 封） |
| Week 4 | 复盘 + 下个产品启动 |

6 个产品共 6 个月做满一个完整周期。
