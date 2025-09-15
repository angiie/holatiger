# 虎啦 (HolaTiger) - 小工具，大能量

一个现代化的个人工具集合网站，专注于提供轻量、实用、开箱即用的浏览器扩展与在线工具。

## 🛠️ 技术框架

- **Tailwind CSS 3.4.17** - 原子化CSS框架
- **DaisyUI 4.12.24** - 基于Tailwind CSS的组件库
- **Lucide Icons** - 现代化的SVG图标库
- **原生JavaScript** - 轻量级交互逻辑，无框架依赖

## 📁 项目结构

```
holatiger/
├── src/                          # 源代码目录
│   ├── assets/                   # 静态资源
│   │   ├── css/                  # 样式文件
│   │   ├── js/                   # JavaScript文件
│   │   └── images/               # 图片资源
│   ├── pages/                    # 页面文件
│   │   └── index.html            # 主页
│   └── tools/                    # 在线工具
│       └── svg-studio/           # SVG转换工具
├── extensions/                   # Chrome扩展项目
│   ├── tinypass/                 # TinyPass扩展
│   └── webdavy/                  # WebDavy扩展
├── scripts/                      # 构建和工具脚本
├── docs/                         # 项目文档
└── 配置文件
```

## 🚀 快速开始

```bash
# 安装依赖
npm install

# 开发模式 (监听CSS变化)
npm run dev:css

# 构建生产版本
npm run build:css

# 启动本地服务器
npm run serve
```

## 🌐 国际化支持

项目支持三种语言：
- **🇨🇳 简体中文** (zh) - 默认语言
- **🇹🇼 繁體中文** (zh-tw) - 繁体中文
- **🇺🇸 English** (en) - 英文

## 🚀 当前产品

### Chrome扩展
1. **TinyPass** ✅ 已发布
   - 密码生成工具，支持多种复杂度设置和自定义规则
   - [Chrome Web Store](https://chromewebstore.google.com/detail/tinypass/jjfmaihmmbclkonnkkipbplhklepopne)

2. **WebDavy** 🚧 开发中
   - WebDAV连接工具，简化文件同步和管理流程

### Web工具
1. **SVG Studio** ✅ 可用
   - SVG转换工具，支持多种格式输出和实时预览功能
   - [在线使用](./src/tools/svg-studio)

## 📄 许可证

ISC License