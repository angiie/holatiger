# 开发指南

## 🚀 环境设置

### 系统要求
- Node.js 16+ 
- npm 或 yarn

### 安装步骤
```bash
# 克隆项目
git clone <repository-url>
cd holatiger

# 安装依赖
npm install

# 开发模式 (监听CSS变化)
npm run dev:css

# 构建生产版本
npm run build:css
```

## 📁 文件结构

```
holatiger/
├── css/
│   ├── tw-src.css      # Tailwind源文件
│   └── tw.css          # 编译后的CSS
├── docs/               # 项目文档
│   ├── design-system.md
│   ├── development.md
│   └── pages.md
├── images/
│   ├── icons/          # 网站图标
│   └── tinypass/       # 扩展图标
├── js/
│   └── main.js         # 主要JavaScript逻辑
├── svg-studio/         # SVG工具子项目
├── index.html          # 主页
├── tailwind.config.js  # Tailwind配置
├── postcss.config.js   # PostCSS配置
└── package.json        # 项目配置
```

## ⚙️ 构建工具配置

### Tailwind CSS 配置
```javascript
// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./svg-studio/index.html", 
    "./**/*.{html,js}",
    "!./node_modules/**"
  ],
  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: false, // 禁用预设样式，避免影响现有CSS
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light", "v2dark"],
    darkTheme: "v2dark",
  },
}
```

### 可用脚本
- `npm run build:css` - 构建并压缩CSS
- `npm run dev:css` - 开发模式，监听文件变化

## 📝 代码规范

### CSS 规范
- **优先使用 Tailwind CSS 原子类**
- **组件化CSS写在 `@layer components` 中**
- **自定义动画定义在 `@layer base` 中**

```css
@layer components {
  .custom-button {
    @apply px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors;
  }
}
```

### JavaScript 规范
- **使用 ES6+ 语法**
- **避免全局变量污染**
- **函数命名采用驼峰命名法**
- **事件监听器统一管理**

```javascript
// 良好实践
function initLanguage() {
  const currentLang = getCurrentLanguage();
  updateContent(currentLang);
  updateLanguageSelector(currentLang);
}

// 避免全局污染
window.switchLanguage = switchLanguage;
```

### HTML 规范
- **遵循语义化HTML结构**
- **使用正确的ARIA属性**
- **保持响应式设计原则**
- **国际化属性使用 `data-i18n`**

```html
<!-- 语义化结构 -->
<section id="extensions" class="py-12 px-6">
  <div class="max-w-6xl mx-auto">
    <h2 data-i18n="extensions.title">浏览器扩展</h2>
  </div>
</section>
```

## 🔧 开发工作流

### 1. 新功能开发
1. 创建功能分支
2. 在 `tw-src.css` 中添加必要的样式
3. 运行 `npm run dev:css` 监听变化
4. 在HTML中使用Tailwind类名
5. 添加JavaScript交互逻辑
6. 测试响应式效果
7. 提交代码

### 2. 样式调试
```bash
# 启动CSS监听
npm run dev:css

# 在浏览器中实时查看效果
# 修改 tw-src.css 或 HTML 类名
# CSS会自动重新编译
```

### 3. 生产部署
```bash
# 构建优化版本CSS
npm run build:css

# 检查文件大小
ls -la css/tw.css

# 部署到服务器
```

## 🐛 常见问题

### CSS 样式不生效
1. 检查 `tailwind.config.js` 中的 `content` 路径配置
2. 确认类名拼写正确
3. 运行 `npm run build:css` 重新编译

### 响应式布局问题
1. 使用浏览器开发者工具测试不同屏幕尺寸
2. 检查断点类名是否正确 (`sm:`, `md:`, `lg:`, `xl:`)
3. 确认容器宽度设置合理

### JavaScript 交互失效
1. 检查控制台是否有错误信息
2. 确认事件监听器正确绑定
3. 验证DOM元素选择器是否准确

### 国际化内容不显示
1. 检查 `data-i18n` 属性是否正确设置
2. 确认翻译对象中包含对应的键值
3. 验证语言切换逻辑是否正常执行