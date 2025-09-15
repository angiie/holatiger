# Chrome Extensions Product Pages

这是一个静态产品详情页生成器，用于为虎啦网站的Chrome扩展产品创建详情页面。

## 📁 文件结构

```
chrome-extensions/
├── tinypass/                          # TinyPass 扩展目录
│   ├── README.md                      # 中文说明
│   └── README_EN.md                   # 英文说明
├── webdavy/                           # WebDavy 扩展目录
│   ├── README.md                      # 中文说明
│   └── README_EN.md                   # 英文说明
├── product-detail-template.html       # HTML模板文件
├── build-product-pages.js            # 构建脚本
├── package.json                      # 项目配置
├── tinypass-product-details.md       # TinyPass 产品详情(Markdown)
├── webdavy-product-details.md        # WebDavy 产品详情(Markdown)
├── tinypass.html                     # 生成的TinyPass详情页
├── webdavy.html                      # 生成的WebDavy详情页
└── README.md                         # 本文件
```

## 🚀 使用方法

### 1. 构建产品页面

```bash
# 安装依赖（可选）
npm install

# 生成HTML页面
npm run build
# 或直接运行
node build-product-pages.js
```

### 2. 更新产品信息

1. **编辑Markdown文件**：修改 `*-product-details.md` 文件
2. **重新构建**：运行 `npm run build`
3. **部署**：将生成的HTML文件部署到网站

### 3. 添加新产品

1. **创建产品目录**：在 `chrome-extensions/` 下创建新的产品文件夹
2. **添加README文件**：创建中英文README文件
3. **创建产品详情**：创建 `{product}-product-details.md` 文件
4. **配置构建脚本**：在 `build-product-pages.js` 中添加产品配置
5. **重新构建**：运行构建命令

## 🎨 样式特性

- **与主站一致**：继承 index.html 的设计风格和颜色主题
- **响应式设计**：支持移动端和桌面端
- **动画效果**：包含淡入动画和悬浮效果
- **橙色主题**：使用虎啦网站的橙色渐变主题

## 🔧 技术实现

### 模板系统
- 使用占位符 `{{PLACEHOLDER}}` 进行内容替换
- 支持产品名称、图标、版本号、特性等自定义内容

### Markdown解析
- 自动解析产品特性列表
- 提取版本号和产品简介
- 生成对应的HTML结构

### 构建脚本
- Node.js 驱动的静态页面生成器
- 支持多产品批量构建
- 可扩展的产品配置系统

## 📝 Markdown格式规范

产品详情文件应遵循以下格式：

```markdown
# 产品名称

**版本**: {{VERSION_PLACEHOLDER}}

## 简介
产品的简单介绍文字...

## 产品特性

- **特性名称** - 特性描述
- **另一个特性** - 另一个特性的描述

## 其他章节
其他内容...
```

## 🔗 集成到主站

生成的HTML文件可以直接集成到主站：

1. **复制文件**：将 `*.html` 文件复制到网站根目录的 `chrome-extensions/` 文件夹
2. **更新链接**：在 index.html 中更新产品卡片的链接
3. **测试访问**：确保样式和链接正常工作

## 📦 部署建议

- **自动化**：可以集成到CI/CD流程中
- **版本控制**：只提交源文件(Markdown)，生成文件可以忽略
- **缓存策略**：为静态HTML文件设置合适的缓存策略

## 🛠️ 自定义配置

在 `build-product-pages.js` 中的 `productConfigs` 对象可以配置：

- `name`: 产品名称
- `icon`: 产品图标路径
- `gradient`: 背景渐变颜色类
- `actions`: 操作按钮HTML
- `additionalSections`: 额外的页面内容

## 📋 待办事项

- [ ] 添加多语言支持
- [ ] 支持更多Markdown语法
- [ ] 添加SEO优化
- [ ] 集成到主站构建流程