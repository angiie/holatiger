# 虎啦 (HolaTiger) - 小工具，大能量

一个现代化的个人工具集合网站，专注于提供轻量、实用、开箱即用的浏览器扩展与在线工具。

## 🛠️ 技术框架

- **Tailwind CSS 3.4.17** - 原子化CSS框架
- **DaisyUI 4.12.24** - 基于Tailwind CSS的组件库
- **Lucide Icons** - 现代化的SVG图标库
- **原生JavaScript** - 轻量级交互逻辑，无框架依赖

## 🌐 国际化支持

项目支持三种语言：
- **🇨🇳 简体中文** (zh) - 默认语言
- **🇹🇼 繁體中文** (zh-tw) - 繁体中文
- **🇺🇸 English** (en) - 英文

## 🚀 当前业务

### Chrome扩展
1. **TinyPass** ✅ 已发布
   - 密码生成工具，支持多种复杂度设置和自定义规则
   - [Chrome Web Store](https://chromewebstore.google.com/detail/tinypass/jjfmaihmmbclkonnkkipbplhklepopne)

2. **WebDavy** 🚧 开发中
   - WebDAV连接工具，简化文件同步和管理流程

### Web工具
1. **SVG Studio** ✅ 可用
   - SVG转换工具，支持多种格式输出和实时预览功能
   - [在线使用](./svg-studio)

## 🎯 未来规划

### 短期目标 (1-3个月)
- [ ] 完成 WebDavy 扩展开发
- [ ] 添加图片压缩工具
- [ ] 开发 Markdown 编辑器
- [ ] 优化移动端体验

### 中期目标 (3-6个月)
- [ ] 添加用户系统和偏好设置
- [ ] 开发 API 接口服务
- [ ] 添加工具使用统计
- [ ] 支持更多文件格式转换

### 长期目标 (6个月以上)
- [ ] 开发桌面应用版本
- [ ] 添加团队协作功能
- [ ] 构建插件生态系统
- [ ] 多平台扩展支持 (Firefox, Safari)

## 🛠️ 快速开始

```bash
# 安装依赖
npm install

# 开发模式 (监听CSS变化)
npm run dev:css

# 构建生产版本
npm run build:css
```

## 📖 文档

- [技术架构与设计规范](docs/design-system.md)
- [开发指南](docs/development.md)
- [页面结构说明](docs/pages.md)