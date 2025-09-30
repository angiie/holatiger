# 布局组件使用说明

## 概述

我们创建了一套可复用的布局组件，用于统一网站的设计风格和减少重复代码。包括 Header、Footer 和 Layout 三个核心组件。

## 组件列表

### 1. Header 组件

通用的页面头部组件，支持多种变体。

#### 使用方法

```tsx
import Header from '@/components/Header'

// 默认头部
<Header />

// 产品页面头部
<Header variant="product" />

// 工具页面头部
<Header variant="tool" />
```

#### 变体说明

- `default`: 默认样式，适用于首页
- `product`: 产品页面样式，适用于 WebDavy、TinyPass 等产品详情页
- `tool`: 工具页面样式，适用于 SVG Studio 等在线工具

#### 功能特性

- ✅ 自动语言切换
- ✅ 响应式导航菜单
- ✅ 品牌 Logo 显示
- ✅ 多语言支持
- ✅ 可自定义样式

### 2. Footer 组件

通用的页面底部组件，支持多种变体。

#### 使用方法

```tsx
import Footer from '@/components/Footer'

// 默认底部
<Footer />

// 产品页面底部
<Footer variant="product" />

// 工具页面底部
<Footer variant="tool" />
```

#### 变体说明

- `default`: 默认样式，显示版权信息
- `product`: 产品页面样式，与默认相同
- `tool`: 工具页面样式，显示工具相关信息

### 3. Layout 组件

完整的页面布局组件，整合了 Header 和 Footer。

#### 使用方法

```tsx
import Layout from '@/components/Layout'

// 默认布局
<Layout variant="default">
  <div>页面内容</div>
</Layout>

// 产品页面布局
<Layout variant="product">
  <div>产品详情内容</div>
</Layout>

// 工具页面布局
<Layout variant="tool">
  <div>工具界面内容</div>
</Layout>
```

#### 参数说明

- `variant`: 布局变体 ('default' | 'product' | 'tool')
- `headerVariant`: 头部变体（可选，默认使用主变体）
- `footerVariant`: 底部变体（可选，默认使用主变体）
- `className`: 自定义 CSS 类名
- `headerClassName`: 头部自定义 CSS 类名
- `footerClassName`: 底部自定义 CSS 类名

## 实际应用示例

### 1. 首页布局

```tsx
import Layout from '@/components/Layout'

const HomePage = () => (
  <Layout variant="default">
    <div className="max-w-6xl mx-auto px-6 py-8">
      <h1>欢迎来到虎啦</h1>
      {/* 首页内容 */}
    </div>
  </Layout>
)
```

### 2. 产品详情页布局

```tsx
import Layout from '@/components/Layout'
import FAQ from '@/components/FAQ'

const ProductPage = () => (
  <Layout variant="product">
    <div className="max-w-4xl mx-auto px-6 py-8">
      <h1>产品详情</h1>
      {/* 产品内容 */}
      <FAQ productKey="webdavy" />
    </div>
  </Layout>
)
```

### 3. 工具页面布局

```tsx
import Layout from '@/components/Layout'

const ToolPage = () => (
  <Layout variant="tool">
    <div className="max-w-6xl mx-auto px-6 py-8">
      <h1>在线工具</h1>
      {/* 工具内容 */}
    </div>
  </Layout>
)
```

## 样式定制

### 1. 通过 className 定制

```tsx
<Layout 
  variant="product" 
  className="custom-layout"
  headerClassName="custom-header"
  footerClassName="custom-footer"
>
  {/* 内容 */}
</Layout>
```

### 2. 通过 CSS 覆盖

```css
.custom-layout {
  /* 自定义样式 */
}

.custom-header {
  /* 头部自定义样式 */
}
```

## 国际化支持

所有组件都支持多语言，翻译内容在以下文件中配置：

- `assets/i18n/zh.json` (简体中文)
- `assets/i18n/zh-tw.json` (繁体中文)
- `assets/i18n/en.json` (英文)

### 相关翻译键

```json
{
  "logo.text": "虎啦",
  "nav.home": "首页",
  "nav.extensions": "浏览器扩展",
  "nav.tools": "在线工具",
  "nav.about": "关于我",
  "footer.copyright": "© {year} 虎啦 (HolaTiger) - 小工具，大能量"
}
```

## 测试页面

访问以下页面查看组件效果：

- `http://localhost:3000/layout-test.html` - 布局组件测试
- `http://localhost:3000/faq-test.html` - FAQ 组件测试

## 迁移指南

### 从现有 HTML 迁移到 React 组件

1. **替换 Header**
   ```html
   <!-- 旧代码 -->
   <header class="site-header-v1">
     <!-- 复杂的头部结构 -->
   </header>
   
   <!-- 新代码 -->
   <Header variant="product" />
   ```

2. **替换 Footer**
   ```html
   <!-- 旧代码 -->
   <footer class="py-12 px-6 border-t border-gray-200 bg-white">
     <!-- 复杂的底部结构 -->
   </footer>
   
   <!-- 新代码 -->
   <Footer variant="product" />
   ```

3. **使用 Layout 包装**
   ```tsx
   // 新代码
   <Layout variant="product">
     {/* 页面内容 */}
   </Layout>
   ```

## 注意事项

1. 确保导入了必要的样式文件
2. 国际化文件需要包含所有必要的翻译键
3. 组件会自动处理语言切换
4. 支持响应式设计，在不同设备上都能正常显示

## 扩展功能

如需添加更多功能，可以考虑：

- 面包屑导航
- 侧边栏组件
- 模态框组件
- 通知组件
- 加载状态组件
