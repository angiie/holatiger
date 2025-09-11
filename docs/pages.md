# 页面结构说明

## 🏠 主页 (index.html)

### 页面功能
项目门户，展示所有工具和扩展的统一入口

### 设计版本
V1 专业清晰版 - 适合商业展示的专业风格

### 核心模块

#### 1. Header 导航区域
```html
<header class="site-header-v1" id="top">
```
- **Logo**: 虎啦品牌标识 + 64x64 图标
- **导航菜单**: 首页、浏览器扩展、在线工具、关于我
- **语言切换**: 支持简体中文、繁體中文、English
- **特效**: 玻璃拟态背景、固定定位

#### 2. Hero 英雄区域
```html
<section id="home" class="hero-interactive">
```
- **主标题**: "小工具，大能量。" 打字机效果
- **副标题**: 产品价值主张描述
- **行动按钮**: 查看扩展、探索工具
- **背景特效**: 粒子动画、鼠标跟随光晕、渐变装饰
- **状态徽章**: "🚀 持续更新中"

#### 3. Extensions 扩展展示区域
```html
<section id="extensions" class="py-12 px-6">
```
- **TinyPass**: 已发布的密码生成工具
  - 状态：绿色圆点 + "已发布"
  - 链接：Chrome Web Store
- **WebDavy**: 开发中的WebDAV工具
  - 状态：黄色脉冲圆点 + "开发中"
  - 按钮：灰色 "即将上线"

#### 4. Tools 在线工具区域
```html
<section id="tools" class="py-12 px-6">
```
- **SVG Studio**: 可用的SVG转换工具
  - 状态：绿色圆点 + "可用"
  - 链接：本地 `./svg-studio`

#### 5. About 关于我区域
```html
<section id="about" class="section-v1 about-v1">
```
- **头像**: GitHub头像 100x100
- **个人介绍**: angiie 全栈开发者简介
- **社交链接**: GitHub、Twitter、Instagram (带Lucide图标)

#### 6. Footer 页脚区域
```html
<footer class="py-12 px-6">
```
- **版权信息**: © 2024 虎啦 (HolaTiger) - 小工具，大能量
- **动态年份**: JavaScript自动更新

### 交互特效

#### 动画系统
- **fadeInUp**: 页面加载时元素依次淡入
- **float**: 卡片悬浮动画 (4秒循环，错开延迟)
- **pulse-glow**: Logo脉冲发光效果
- **gradient-shift**: 标题渐变色彩流动

#### 鼠标交互
- **Hero区域光晕**: 鼠标移动时跟随效果
- **卡片悬浮**: hover时上移2px + 阴影增强
- **按钮波纹**: 点击时涟漪扩散效果

#### 响应式布局
```css
.grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
```
- **移动端**: 单列布局
- **平板**: 双列布局  
- **桌面**: 三列布局
- **大屏**: 四列布局
- **卡片宽度**: 固定288px (w-72)

---

## 🎨 SVG Studio (svg-studio/index.html)

### 页面功能
专业的SVG文件转换工具，支持多格式输出

### 设计版本
现代科技风 - 玻璃拟态 + 霓虹渐变 + 流体布局

### 核心模块

#### 1. App Header 应用头部
```html
<header class="app-header">
```
- **品牌区域**: SVG Studio标识 + Beta标签
- **语言选择器**: 下拉菜单切换语言
- **背景效果**: 半透明毛玻璃效果

#### 2. Main Card 主要内容卡片
```html
<div class="main-card">
```
- **左侧面板**: SVG预览区域
  - 文件上传拖放区域
  - 实时SVG预览显示
  - 响应式预览容器

- **右侧面板**: 控制操作区域
  - 输入选项卡 (上传/粘贴)
  - 输出选项卡 (PNG/JPG/WebP)
  - 尺寸设置滑块
  - 下载按钮

#### 3. 文件处理功能
- **支持格式**: SVG输入，PNG/JPG/WebP输出
- **尺寸控制**: 16px - 1024px 可调节
- **实时预览**: 即时显示转换效果
- **文件大小**: 动态显示输出文件大小

#### 4. 交互特性
- **拖拽上传**: 支持文件拖放到预览区域
- **粘贴输入**: 支持直接粘贴SVG代码
- **选项卡切换**: 输入/输出模式切换
- **实时更新**: 参数变化时即时更新预览

### 技术特点

#### 样式系统
- **玻璃拟态**: `backdrop-blur-md` + 半透明背景
- **渐变背景**: 径向渐变营造科技感
- **流体布局**: CSS Grid响应式布局
- **微交互**: 悬浮、点击、过渡动画

#### 功能实现
- **Canvas渲染**: 使用HTML5 Canvas进行图像转换
- **SVG解析**: 原生SVG DOM操作
- **文件下载**: Blob + URL.createObjectURL实现
- **错误处理**: 完整的异常捕获和用户提示

---

## 🔄 页面间关系

### 导航流程
```
index.html (主页)
    ├── #extensions → Chrome扩展展示
    ├── #tools → 在线工具展示  
    │   └── SVG Studio链接 → svg-studio/index.html
    └── #about → 个人信息

svg-studio/index.html (SVG工具)
    └── 返回主页链接 → index.html
```

### 共享资源
- **CSS框架**: 共享Tailwind CSS + DaisyUI
- **图标库**: 共享Lucide Icons
- **字体**: 系统默认字体栈
- **主题色**: 一致的橙色/紫色主题

### 设计一致性
- **导航模式**: 相似的头部导航结构
- **按钮风格**: 统一的按钮样式和交互
- **卡片设计**: 一致的圆角、阴影、间距
- **响应式**: 相同的断点和布局策略