# 设计系统与规范

## 🎨 主题系统

项目采用DaisyUI主题系统，支持以下主题：

### Light Theme (默认)
- **背景色**: 白色到浅色渐变
- **主色调**: 橙色系 (`#f97316`, `#ef4444`, `#f59e0b`)
- **文字色**: 深灰色系

### V2Dark Theme (备用)
- **背景色**: 深色系 (`#2A303C`)
- **主色调**: 紫色系 (`#661AE6`, `#D926A9`)
- **强调色**: 青色 (`#1FB2A6`)

## 🎯 当前设计风格

### 主页设计 - 专业清晰版
**核心类名**: `.v1-professional`

**设计特点**:
- **玻璃拟态效果**: 使用 `backdrop-blur-md` 和半透明背景
- **浮动动画**: 卡片和元素的悬浮动画效果
- **渐变背景**: 橙色系渐变装饰和粒子效果
- **交互反馈**: 卡片悬浮 (`hover:-translate-y-2`) 和按钮波纹效果

**色彩方案**:
- 主色：橙色 `#f97316`
- 辅助色：红色 `#ef4444`、黄色 `#f59e0b`
- 背景：白色到橙色浅色渐变
- 文字：深灰色系

## 🧩 组件使用规范

### 按钮组件
```html
<!-- 主要按钮 -->
<button class="btn btn-primary">主要操作</button>

<!-- 次要按钮 -->
<button class="btn btn-secondary">次要操作</button>

<!-- 小型按钮 -->
<button class="btn btn-small">小按钮</button>
```

### 卡片组件
```html
<!-- 标准卡片 -->
<div class="card floating-card">
  <div class="card-icon">图标</div>
  <h3>标题</h3>
  <p>描述文字</p>
</div>
```

### 状态指示器
```html
<!-- 已发布状态 -->
<span class="w-3 h-3 bg-green-500 rounded-full"></span>

<!-- 开发中状态 -->
<span class="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></span>
```

## 🎬 动画效果规范

### 页面加载动画
- **fadeInUp**: 从下方淡入，用于页面元素依次显示
- **float**: 悬浮动画，用于卡片和装饰元素
- **pulse-glow**: 脉冲发光效果，用于重要元素

### 交互动画
- **hover效果**: 卡片悬浮 `hover:-translate-y-2`
- **点击波纹**: 按钮点击时的涟漪效果
- **鼠标跟随**: Hero区域的光晕跟随效果

## 📱 响应式设计规范

### 断点系统
- **sm**: 640px+ (手机横屏)
- **md**: 768px+ (平板)
- **lg**: 1024px+ (小型桌面)
- **xl**: 1280px+ (大型桌面)

### 网格布局
```css
/* 响应式网格 */
.grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4

/* 固定宽度卡片 */
.w-72 /* 288px 固定宽度 */
```

## 🌍 国际化实现

### 语言切换系统
- 使用 `data-i18n` 属性标记可翻译内容
- JavaScript动态切换语言内容
- localStorage持久化语言偏好
- 完整的翻译对象系统

### 支持的语言
- **简体中文** (zh) - 默认语言
- **繁體中文** (zh-tw) - 繁体中文版本
- **English** (en) - 英文版本