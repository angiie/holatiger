# FAQ 组件使用说明

## 概述

FAQ 组件是一个可复用的 React 组件，用于在产品详情页显示常见问题。支持多语言、动画效果和响应式设计。

## 功能特性

- ✅ 多语言支持（中文简体、繁体、英文）
- ✅ 可折叠的问题答案
- ✅ 平滑的动画效果
- ✅ 响应式设计
- ✅ 自动从国际化文件读取内容
- ✅ 支持最多 10 个 FAQ 项目

## 使用方法

### 1. 导入组件

```tsx
import FAQ from '@/components/FAQ'
```

### 2. 在页面中使用

```tsx
<FAQ productKey="webdavy" />
<FAQ productKey="tinypass" />
```

### 3. 参数说明

- `productKey`: 产品标识符，用于从国际化文件中读取对应的 FAQ 内容
- `className`: 可选的 CSS 类名，用于自定义样式

## 国际化配置

### 文件结构

FAQ 内容需要添加到以下国际化文件中：
- `assets/i18n/zh.json` (简体中文)
- `assets/i18n/zh-tw.json` (繁体中文)  
- `assets/i18n/en.json` (英文)

### 配置格式

```json
{
  "产品名.faq.title": "常见问题",
  "产品名.faq.subtitle": "解答您可能遇到的问题",
  "产品名.faq1.question": "问题1",
  "产品名.faq1.answer": "答案1",
  "产品名.faq2.question": "问题2",
  "产品名.faq2.answer": "答案2"
}
```

### 示例配置

```json
{
  "webdavy.faq.title": "常见问题",
  "webdavy.faq.subtitle": "解答您可能遇到的问题",
  "webdavy.faq1.question": "WebDavy 支持哪些 WebDAV 服务器？",
  "webdavy.faq1.answer": "WebDavy 支持所有符合 WebDAV 标准的服务器...",
  "webdavy.faq2.question": "如何配置 WebDAV 连接？",
  "webdavy.faq2.answer": "在扩展设置中点击「添加服务器」..."
}
```

## 测试页面

访问 `http://localhost:3000/faq-test.html` 查看 FAQ 组件的效果。

## 样式自定义

组件使用 Tailwind CSS 类名，可以通过以下方式自定义样式：

1. 传入 `className` 属性
2. 修改组件内部的 CSS 类名
3. 使用 CSS 覆盖特定样式

## 注意事项

1. FAQ 项目最多支持 10 个（faq1 到 faq10）
2. 如果国际化文件中没有对应的翻译，组件不会显示
3. 组件会自动处理语言切换
4. 支持键盘导航和无障碍访问

## 扩展功能

如需添加更多功能，可以考虑：

- 搜索 FAQ 功能
- FAQ 分类
- 统计点击率
- 用户反馈功能
