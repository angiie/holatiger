# WebDavy Chrome Extension

WebDavy is a Chrome browser extension that uses the WebDAV protocol, allowing you to manage remote WebDAV file servers directly in your browser.

## Key Features

- **One-Click WebDAV Server Connection** - Supports mainstream WebDAV services like NextCloud, OwnCloud, with secure connection configuration storage
- **Complete File Management** - Browse, upload, download, create and delete folders directly in your browser
- **Automated Build & Deployment** - Built-in version management and packaging scripts with semantic versioning and automatic changelog generation

## Installation

### Developer Mode Installation

1. Download or clone this repository to your computer
2. Open Chrome browser and go to the extensions management page: `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked extension"
5. Select this project folder

### Chrome Web Store Installation (Not Published)

This extension is not yet published to the Chrome Web Store.

## Usage

1. Click the extension icon in Chrome toolbar to open the extension
2. Enter your WebDAV server address, username and password
3. Click the "Connect" button
4. Browse, upload, download files

## Supported WebDAV Servers

This extension should work with most standard WebDAV servers, including but not limited to:

- NextCloud
- OwnCloud
- Apache WebDAV
- Nginx with WebDAV module
- Microsoft IIS WebDAV

## Important Notes

- Ensure your WebDAV server is properly configured and CORS is enabled
- For servers with self-signed certificates, you may need to accept the certificate in your browser first
- Passwords are saved in Chrome's secure storage, but please be cautious when using on shared computers

## Development

### Project Structure

- `manifest.json`: Extension configuration file
- `popup.html`: Extension popup window HTML
- `css/style.css`: Stylesheet
- `js/popup.js`: Popup window JavaScript logic
- `js/webdav.js`: WebDAV client class
- `background.js`: Background script
- `images/`: Icon folder
- `build.sh`: Automated packaging script
- `CHANGELOG.md`: Version changelog

### Build and Package

The project provides an automated build script `build.sh` for version management and extension packaging.

#### Usage

```bash
# Show current version
./build.sh --current

# Update version and package (recommended)
./build.sh 1.2.0

# Only update version number, don't create ZIP package
./build.sh -n 1.2.0

# Show help information
./build.sh --help
```

#### Build Process

1. **Version Update**: Automatically update version number in `manifest.json`
2. **Log Generation**: Update `CHANGELOG.md` file
3. **File Copy**: Copy necessary files to build directory
4. **ZIP Creation**: Generate `dist/webdav-extension-v{version}.zip`
5. **Cleanup**: Delete temporary build files

#### Version Specification

The project follows [Semantic Versioning](https://semver.org/) specification:
- **Major Version**: Incompatible API changes
- **Minor Version**: Backward-compatible functionality additions
- **Patch Version**: Backward-compatible bug fixes

### Future Plans

- Add file preview functionality
- Support file renaming
- Implement drag-and-drop upload
- Add multi-language support
- Improve error handling and user experience

## License

MIT