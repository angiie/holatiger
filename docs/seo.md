# SEO 优化指南

本文档记录了 HolaTiger 项目的 SEO 优化实践和配置说明。

## 域名配置

### 主域名
- **生产域名**: `holatiger.com` / `www.holatiger.com`
- **开发域名**: `holatiger.vercel.app`
- **本地开发**: `localhost:8000`

### URL 结构
```
https://holatiger.com/                    # 首页
https://holatiger.com/tinypass.html       # TinyPass 产品页
https://holatiger.com/webdavy.html        # WebDavy 产品页
https://holatiger.com/svg-studio/         # SVG Studio 工具
```

## SEO 元标签配置

### 基础 SEO 标签
每个页面都应包含以下基础标签：

```html
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="description" content="页面描述，控制在150-160字符" />
<meta name="keywords" content="关键词1, 关键词2, 关键词3" />
<link rel="canonical" href="https://holatiger.com/页面路径" />
<title>页面标题 - 虎啦</title>
```

### Open Graph 标签
用于社交媒体分享优化：

```html
<meta property="og:title" content="页面标题" />
<meta property="og:description" content="页面描述" />
<meta property="og:type" content="website" /> <!-- 或 product -->
<meta property="og:url" content="https://holatiger.com/页面路径" />
<meta property="og:image" content="https://holatiger.com/images/social/页面图片.png" />
<meta property="og:site_name" content="虎啦" />
<meta property="og:locale" content="zh_CN" />
```

### Twitter 卡片标签
用于 Twitter 分享优化：

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="页面标题" />
<meta name="twitter:description" content="页面描述" />
<meta name="twitter:image" content="https://holatiger.com/images/social/页面图片.png" />
```

### 多语言支持
```html
<link rel="alternate" href="https://holatiger.com/" hreflang="zh-CN" />
<link rel="alternate" href="https://holatiger.com/" hreflang="zh-TW" />
<link rel="alternate" href="https://holatiger.com/" hreflang="en" />
```

## 页面配置详情

### 首页 (`/src/pages/index.html`)
- **标题**: "虎啦 - 小工具，大能量"
- **描述**: "轻量、实用、开箱即用的浏览器扩展与在线工具集合，为你的工作流程增添便利。"
- **关键词**: "Chrome 扩展, 浏览器插件, 在线工具, 密码生成器, WebDAV, TinyPass, WebDavy, HolaTiger"
- **类型**: website

### TinyPass 产品页 (`/src/pages/tinypass.html`)
- **标题**: "TinyPass - 虎啦"
- **描述**: "TinyPass 是一款专为Chrome浏览器设计的随机密码生成工具，完全在本地运行，无需联网或登录。"
- **关键词**: "TinyPass, Chrome 扩展, 浏览器插件, HolaTiger"
- **类型**: product

### WebDavy 产品页 (`/src/pages/webdavy.html`)
- **标题**: "WebDavy - 虎啦"
- **描述**: "WebDavy 是一个基于WebDAV协议的Chrome浏览器扩展，让您无需离开浏览器就能管理远程文件服务器。"
- **关键词**: "WebDavy, Chrome 扩展, 浏览器插件, HolaTiger"
- **类型**: product

### SVG Studio 工具页 (`/src/tools/svg-studio/index.html`)
- **标题**: "SVG Studio Pro - SVG 查看器和导出工具"
- **描述**: "专业的SVG查看器和导出工具，支持实时预览、多格式导出(PNG/ICO/WebP/JPG)、批量处理、Chrome图标包生成。"
- **关键词**: "SVG查看器,SVG编辑器,SVG转PNG,SVG转ICO,图标制作,矢量图形,在线工具,免费工具,Chrome图标,批量导出"
- **类型**: website
- **特殊配置**: 独立样式，不引入公共CSS

## 社交媒体图片

### 图片规格
- **Open Graph**: 1200x630px
- **Twitter Card**: 1200x630px
- **格式**: PNG 或 JPG
- **文件大小**: < 1MB

### 图片路径
```
/src/assets/images/social/
├── tinypass-1200x630.png      # TinyPass 社交分享图
├── webdavy-1200x630.png       # WebDavy 社交分享图
└── holatiger-1200x630.png     # 默认社交分享图
```

## 图标配置

### Favicon
```html
<link rel="icon" type="image/png" sizes="32x32" href="../assets/images/icons/icon_32x32.png">
<link rel="icon" type="image/png" sizes="64x64" href="../assets/images/icons/icon_64x64.png">
```

### 移动端图标
```html
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<meta name="apple-mobile-web-app-title" content="应用名称">
<meta name="theme-color" content="#3b82f6">
```

## SEO 最佳实践

### 1. 内容优化
- 标题长度控制在 50-60 字符
- 描述长度控制在 150-160 字符
- 使用语义化的 HTML 标签
- 确保内容原创且有价值

### 2. 技术优化
- 使用 HTTPS 协议
- 确保页面加载速度
- 移动端友好设计
- 结构化数据标记

### 3. URL 优化
- 使用简洁、描述性的 URL
- 避免使用特殊字符
- 保持 URL 结构一致

### 4. 图片优化
- 使用 alt 属性描述图片
- 优化图片大小和格式
- 使用适当的图片尺寸

## 验证工具

### Google 工具
- [Google Search Console](https://search.google.com/search-console)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Rich Results Test](https://search.google.com/test/rich-results)

### 社交媒体验证
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

### SEO 分析工具
- [SEMrush](https://www.semrush.com/)
- [Ahrefs](https://ahrefs.com/)
- [Moz](https://moz.com/)

## 更新日志

### 2024-12-19
- 修复所有页面 URL 从 localhost 更新为 holatiger.com
- 统一社交媒体图片路径
- 确保 SVG Studio 保持独立样式
- 更新 canonical 链接和 Open Graph 配置

## 注意事项

1. **域名一致性**: 确保所有 SEO 标签中的域名保持一致
2. **路径正确性**: 检查所有资源路径是否正确
3. **内容更新**: 定期更新页面内容和元数据
4. **性能监控**: 定期检查页面加载速度和 SEO 表现
5. **移动适配**: 确保所有页面在移动设备上正常显示

---

*最后更新: 2024-12-19*
*维护者: HolaTiger 团队*