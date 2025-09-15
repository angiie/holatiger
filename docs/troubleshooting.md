# 故障排除指南

本文档记录了项目开发和部署过程中遇到的常见问题及解决方案。

## 🔧 部署相关问题

### 1. CSS/JS文件404错误

**问题描述**：
- 浏览器控制台显示：`GET https://holatiger.com/assets/css/tw.css 404 (Not Found)`
- 浏览器控制台显示：`GET https://holatiger.com/assets/js/main.js 404 (Not Found)`
- CSS样式无法加载，页面显示异常
- JavaScript功能失效

**错误信息**：
```
Refused to apply style from 'https://www.holatiger.com/assets/css/tw.css' 
because its MIME type ('text/plain') is not a supported stylesheet MIME type, 
and strict MIME checking is enabled.

Refused to execute script from 'https://www.holatiger.com/assets/js/main.js' 
because its MIME type ('text/plain') is not executable, 
and strict MIME type checking is enabled.
```

**根本原因**：
Vercel配置中缺少静态资源路径映射。HTML文件中引用的是 `/assets/` 路径，但Vercel没有将此路径映射到实际的 `/src/assets/` 目录。

**解决方案**：
在 `vercel.json` 中添加重写规则：

```json
{
  "rewrites": [
    {
      "source": "/assets/(.*)",
      "destination": "/src/assets/$1"
    }
  ]
}
```

**验证方法**：
```bash
# 验证CSS文件
curl -I https://holatiger.com/assets/css/tw.css

# 验证JS文件
curl -I https://holatiger.com/assets/js/main.js

# 应该返回200状态码和正确的Content-Type
```

### 2. README文件重复问题

**问题描述**：
用户报告 `/Users/admin/workspace/holatiger/src/pages/README.md` 和 `/Users/admin/workspace/holatiger/README.md` 重复。

**分析结果**：
经过检查，这两个文件内容完全不同，用途也不同：
- `/README.md` - 整个项目的说明文档
- `/src/pages/README.md` - Chrome扩展产品页面的专门文档

**结论**：
这不是重复文件，而是不同模块的独立文档，无需删除。

## 🌐 网络和访问问题

### 1. 域名访问超时

**问题描述**：
```bash
curl: (28) Failed to connect to holatiger.vercel.app port 443 after 75000 ms: Operation timed out
```

**可能原因**：
- DNS解析问题
- 网络连接问题
- Vercel服务临时不可用
- 域名配置问题

**解决方案**：
1. 检查DNS解析：`nslookup holatiger.com`
2. 尝试不同的域名：`holatiger.com` vs `holatiger.vercel.app`
3. 等待一段时间后重试
4. 检查Vercel部署状态

## 📁 文件结构问题

### 1. 静态资源路径映射

**最佳实践**：
- HTML文件中使用相对路径：`/assets/css/style.css`
- Vercel配置中添加对应的重写规则
- 确保Content-Type头正确设置

**Vercel配置示例**：
```json
{
  "version": 2,
  "rewrites": [
    {
      "source": "/",
      "destination": "/src/pages/index.html"
    },
    {
      "source": "/assets/(.*)",
      "destination": "/src/assets/$1"
    }
  ],
  "headers": [
    {
      "source": "/src/assets/css/(.*)\\.css",
      "headers": [
        {
          "key": "Content-Type",
          "value": "text/css; charset=utf-8"
        }
      ]
    },
    {
      "source": "/src/assets/js/(.*)\\.js",
      "headers": [
        {
          "key": "Content-Type",
          "value": "application/javascript; charset=utf-8"
        }
      ]
    }
  ]
}
```

## 🔍 调试技巧

### 1. 检查HTTP响应头
```bash
# 检查文件是否可访问
curl -I https://holatiger.com/assets/css/tw.css

# 检查Content-Type
curl -H "Accept: text/css" https://holatiger.com/assets/css/tw.css
```

### 2. 浏览器开发者工具
- 打开Network面板查看资源加载状态
- 检查Console面板的错误信息
- 查看Response Headers确认Content-Type

### 3. Vercel部署日志
- 在Vercel Dashboard查看部署日志
- 检查构建过程是否有错误
- 确认文件是否正确上传

## 📝 预防措施

1. **本地测试**：部署前在本地环境充分测试
2. **路径一致性**：确保HTML引用路径与实际文件路径一致
3. **配置验证**：部署后立即验证关键资源是否可访问
4. **监控设置**：设置监控来及时发现问题

## 🚀 部署检查清单

- [ ] 静态资源路径映射正确
- [ ] Content-Type头设置正确
- [ ] 所有页面可正常访问
- [ ] CSS样式正常加载
- [ ] JavaScript功能正常
- [ ] SEO标签配置正确
- [ ] 移动端显示正常

---

*最后更新：2025年1月15日*