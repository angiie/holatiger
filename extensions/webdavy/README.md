# WebDavy Chrome 插件

WebDavy 是一个使用WebDAV协议的Chrome浏览器扩展，允许您直接在浏览器中管理远程WebDAV文件服务器。

## 核心特性

- **一键连接WebDAV服务器** - 支持主流WebDAV服务如NextCloud、OwnCloud等，安全保存连接配置
- **完整文件管理功能** - 在浏览器中直接浏览、上传、下载、创建和删除文件夹
- **自动化构建部署** - 内置版本管理和打包脚本，支持语义化版本控制和自动生成变更日志

## 安装方法

### 开发模式安装

1. 下载或克隆这个仓库到您的计算机
2. 打开Chrome浏览器，进入扩展管理页面：`chrome://extensions/`
3. 启用右上角的"开发者模式"
4. 点击"加载已解压的扩展程序"
5. 选择这个项目的文件夹

### 从Chrome网上应用店安装（未发布）

目前该扩展尚未发布到Chrome网上应用店。

## 使用方法

1. 点击Chrome工具栏中的扩展图标打开扩展
2. 输入您的WebDAV服务器地址、用户名和密码
3. 点击"连接"按钮
4. 浏览、上传、下载文件

## 支持的WebDAV服务器

该扩展应该可以与大多数标准的WebDAV服务器一起使用，包括但不限于：

- NextCloud
- OwnCloud
- Apache WebDAV
- Nginx with WebDAV module
- Microsoft IIS WebDAV

## 注意事项

- 确保您的WebDAV服务器已正确配置并启用CORS
- 对于自签名证书的服务器，可能需要在浏览器中预先接受证书
- 密码会保存在Chrome的安全存储中，但请确保在共享计算机上使用时谨慎

## 开发

### 项目结构

- `manifest.json`: 扩展配置文件
- `popup.html`: 扩展弹出窗口的HTML
- `css/style.css`: 样式表
- `js/popup.js`: 弹出窗口的JavaScript逻辑
- `js/webdav.js`: WebDAV客户端类
- `background.js`: 后台脚本
- `images/`: 图标文件夹
- `build.sh`: 自动化打包脚本
- `CHANGELOG.md`: 版本变更日志

### 构建和打包

项目提供了自动化的构建脚本 `build.sh`，用于版本管理和扩展打包。

#### 使用方法

```bash
# 显示当前版本
./build.sh --current

# 更新版本并打包（推荐）
./build.sh 1.2.0

# 只更新版本号，不创建ZIP包
./build.sh -n 1.2.0

# 显示帮助信息
./build.sh --help
```

#### 打包流程

1. **版本更新**: 自动更新 `manifest.json` 中的版本号
2. **日志生成**: 更新 `CHANGELOG.md` 文件
3. **文件复制**: 将必要文件复制到构建目录
4. **ZIP创建**: 生成 `dist/webdav-extension-v{版本号}.zip`
5. **清理**: 删除临时构建文件

#### 版本规范

项目遵循 [语义化版本](https://semver.org/lang/zh-CN/) 规范：
- **主版本号**: 不兼容的API修改
- **次版本号**: 向下兼容的功能性新增
- **修订号**: 向下兼容的问题修正

### 未来计划

- 添加文件预览功能
- 支持文件重命名
- 实现拖放上传
- 添加多语言支持
- 改进错误处理和用户体验

## 许可证

MIT