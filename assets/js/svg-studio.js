// 语言数据结构
const i18nData = {
    'zh-CN': {
        // 页面标题和描述
        title: 'SVG Studio Pro - SVG 查看器和导出工具',
        description: '专业的SVG查看器和导出工具，支持实时预览、多格式导出(PNG/ICO/WebP/JPG)、批量处理、Chrome图标包生成。简洁高效，完全免费。',
        keywords: 'SVG查看器,SVG编辑器,SVG转PNG,SVG转ICO,图标制作,矢量图形,在线工具,免费工具,Chrome图标,批量导出',
        ogTitle: 'SVG Studio Pro - 专业SVG查看器和导出工具',
        ogDescription: '功能强大的SVG处理工具，支持实时预览、多格式导出、批量处理。完全免费，无需注册。',
        twitterTitle: 'SVG Studio Pro - 专业SVG查看器和导出工具',
        twitterDescription: '功能强大的SVG处理工具，支持实时预览、多格式导出、批量处理。完全免费，无需注册。',
        
        // 主要界面文本
        svgCodeInput: 'SVG 代码输入',
        svgCodeLabel: 'SVG 代码',
        uploadText: '拖拽 SVG 文件到这里或',
        uploadLink: '点击选择文件',
        uploadHint: '支持 .svg 格式文件 | 支持 Ctrl+V (Mac: Cmd+V) 粘贴文件',
        dragDropHint: '💡 提示：您也可以直接将 SVG 文件拖拽到页面任意位置进行导入',
        placeholder: '在这里粘贴你的 SVG 代码，或使用上方的文件上传...',
        
        
        
        // 尺寸设置
        widthLabel: '宽度 (px)',
        heightLabel: '高度 (px)',
        batchExportSizes: '批量导出尺寸选择',
        selectAll: '全选',
        clearAll: '清空',
        selectedSizesCount: '已选择 {count} 个尺寸',
        
        // 卡片标题
        sizeAndExport: '尺寸设置与导出',
        batchExport: '批量导出',
        
        // 按钮文本
        downloadPNG: '下载 PNG',
        downloadICO: '下载 ICO',
        batchExportPNG: '批量导出 PNG',
        batchExportICO: '批量导出 ICO',
        exportPNG: '导出 PNG',
        exportICO: '导出 ICO',
        chromeIconPack: 'Chrome 图标包',
        preview: '预览',
        exportAllPacks: '一键导出全规格',
        exportWeb: 'Web',
        exportChrome: 'Chrome 扩展',
        exportAndroid: 'Android',
        exportIOS: 'iOS',
        exportWindows: 'Windows',
        exportMacOS: 'macOS',
        exportSocial: 'Social',
        selectExport: '选择导出',
        confirm: '确认',
        cancel: '取消',
        
        // 状态文本
        realtimeUpdate: '实时更新',
        waitingInput: '等待输入',
        invalidSize: '尺寸无效',
        formatError: '格式错误',
        updated: '已更新',
        generating: '生成中...',
        packing: '打包中...',
        batchGenerating: '批量生成中...',
        exportingAll: '导出所有规格中...',
        exportingPack: '导出中...',
        
        // 导航栏
        'nav-home': '首页',
        'nav-tools': '工具',
        'nav-viewer': 'SVG 查看器',
        'nav-converter': '格式转换',
        'nav-batch': '批量处理',
        'nav-about': '关于',
        'nav-docs': '文档',
        'nav-start': '开始使用',
        
        // 预览区域
        previewPlaceholder: '在左侧输入 SVG 代码，预览将自动更新',
        updatingPreview: '正在更新预览...',
        inputting: '正在输入...',
        presetSizes: '预设尺寸',
        
        // 错误和成功消息
        errorEnterSVG: '请输入 SVG 代码',
        errorValidSize: '请输入有效的宽度和高度',
        errorSVGFormat: 'SVG 代码格式错误',
        errorInvalidSVG: 'SVG 代码无效',
        errorEnterSVGFirst: '请先输入 SVG 代码',
        errorSelectSize: '请至少选择一个导出尺寸',
        errorValidSVGFile: '请选择有效的 SVG 文件',
        errorFileRead: '文件读取失败，请重试',
        errorDragSVG: '请拖拽 SVG 格式的文件',

        errorNetworkTimeout: '网络请求超时，请检查网络连接',
        
        successPreviewUpdate: '预览更新成功！',
        successPNGDownload: 'PNG 文件已下载 ({size})',
        successFileUpload: '文件 "{name}" 上传成功！',
        successFilePaste: '已粘贴文件: {name}',
        successSVGPaste: '已粘贴 SVG 代码',
        successDragUpload: '已拖拽上传: {name}',
        successICODownload: 'ICO 文件下载成功！包含 16x16、32x32、48x48、256x256 四种尺寸',
        successChromePackDownload: 'Chrome 图标包已下载 (icons.zip)',
        successBatchExport: '批量导出成功！已生成 {count} 个尺寸的PNG文件',
        successAllExport: '所有规格已打包下载（all-assets.zip）',
        successPackExport: '打包完成',
        
        // 粘贴提示（恢复）
        pasteReady: '准备粘贴 SVG 文件...',
        pasteFileOrCode: '粘贴 SVG 文件或代码...',
        pastePrompt: '请粘贴 SVG 文件或代码',
        
        // README 模板
        readmeWeb: '此包包含 Web 所需图标（favicon、apple touch、PWA）。',
        readmeChrome: '此包包含 Chrome 扩展所需图标尺寸。',
        readmeAndroid: '此包包含 Android 所需 mipmap/play store/adaptive 前景图标。',
        readmeIOS: '此包包含 iOS 所需 iPhone/iPad/App Store 图标。',
        readmeWindows: '此包包含 Windows 所需多尺寸 ICO。',
        readmeMacOS: '此包包含 macOS 多尺寸 PNG，可用 iconutil 生成 ICNS。',
        readmeSocial: '此包包含社交头像与分享图（含 1200x630）。',
        readmeFilename: '目录说明.txt',

        manifestTitle: '导出文件清单',
        manifestFile: 'manifest.txt',
        manifestGenerated: '清单生成于',
        successLangSwitch: '语言已切换为: {langName}',
    },
    'zh-TW': {
        // SEO 和页面元数据
        title: 'SVG Studio Pro - SVG 檢視器和匯出工具',
        description: '專業的SVG檢視器和匯出工具，支援即時預覽、多格式匯出(PNG/ICO/WebP/JPG)、批次處理、Chrome圖示包生成。簡潔高效，完全免費。',
        keywords: 'SVG檢視器,SVG編輯器,SVG轉PNG,SVG轉ICO,圖示製作,向量圖形,線上工具,免費工具,Chrome圖示,批次匯出',
        ogTitle: 'SVG Studio Pro - 專業SVG檢視器和匯出工具',
        ogDescription: '功能強大的SVG處理工具，支援即時預覽、多格式匯出、批次處理。完全免費，無需註冊。',
        twitterTitle: 'SVG Studio Pro - 專業SVG檢視器和匯出工具',
        twitterDescription: '功能強大的SVG處理工具，支援即時預覽、多格式匯出、批次處理。完全免費，無需註冊。',
        
        // 主要功能區域
        svgCodeInput: 'SVG 程式碼輸入',
        svgCodeLabel: 'SVG 程式碼',
        uploadText: '拖拽 SVG 檔案到這裡或',
        uploadLink: '點擊選擇檔案',
        uploadHint: '支援 .svg 格式檔案 | 支援 Ctrl+V (Mac: Cmd+V) 貼上檔案',
        dragDropHint: '💡 提示：您也可以直接將 SVG 檔案拖拽到頁面任意位置進行匯入',
        placeholder: '在這裡貼上你的 SVG 程式碼，或使用上方的檔案上傳...',



        // 尺寸設定
        widthLabel: '寬度 (px)',
        heightLabel: '高度 (px)',
        batchExportSizes: '批次匯出尺寸選擇',
        selectAll: '全選',
        clearAll: '清空',
        selectedSizesCount: '已選擇 {count} 個尺寸',

        // 功能按鈕
        sizeAndExport: '尺寸設定與匯出',
        batchExport: '批次匯出',

        // 下載按鈕
        downloadPNG: '下載 PNG',
        downloadICO: '下載 ICO',
        batchExportPNG: '批次匯出 PNG',
        batchExportICO: '批次匯出 ICO',
        exportPNG: '導出 PNG',
        exportICO: '導出 ICO',
        chromeIconPack: 'Chrome 圖示包',
        preview: '預覽',
        exportAllPacks: '一鍵導出全規格',
        exportWeb: 'Web',
        exportChrome: 'Chrome 擴充',
        exportAndroid: 'Android',
        exportIOS: 'iOS',
        exportWindows: 'Windows',
        exportMacOS: 'macOS',
        exportSocial: 'Social',
        selectExport: '選擇導出',
        confirm: '確認',
        cancel: '取消',

        // 狀態訊息
        realtimeUpdate: '即時更新',
        waitingInput: '等待輸入',
        invalidSize: '尺寸無效',
        formatError: '格式錯誤',
        updated: '已更新',
        generating: '生成中...',
        packing: '打包中...',
        batchGenerating: '批次生成中...',
        exportingAll: '導出所有規格中...',
        exportingPack: '導出中...',

        // 導航選單
        'nav-home': '首頁',
        'nav-tools': '工具',
        'nav-viewer': 'SVG 檢視器',
        'nav-converter': '格式轉換',
        'nav-batch': '批次處理',
        'nav-about': '關於',
        'nav-docs': '文件',
        'nav-start': '開始使用',

        // 預覽區域
        previewPlaceholder: '在左側輸入 SVG 程式碼，預覽將自動更新',
        updatingPreview: '正在更新預覽...',
        inputting: '正在輸入...',
        presetSizes: '預設尺寸',

        // 錯誤訊息
        errorEnterSVG: '請輸入 SVG 程式碼',
        errorValidSize: '請輸入有效的寬度和高度',
        errorSVGFormat: 'SVG 程式碼格式錯誤',
        errorInvalidSVG: 'SVG 程式碼無效',
        errorEnterSVGFirst: '請先輸入 SVG 程式碼',
        errorSelectSize: '請至少選擇一個匯出尺寸',
        errorValidSVGFile: '請選擇有效的 SVG 檔案',
        errorFileRead: '檔案讀取失敗，請重試',
        errorDragSVG: '請拖拽 SVG 格式的檔案',

        errorNetworkTimeout: '網路請求逾時，請檢查網路連線',

        // 成功訊息
        successPreviewUpdate: '預覽更新成功！',
        successPNGDownload: 'PNG 檔案已下載 ({size})',
        successFileUpload: '檔案 "{name}" 上傳成功！',
        successFilePaste: '已貼上檔案: {name}',
        successSVGPaste: '已貼上 SVG 程式碼',
        successDragUpload: '已拖拽上傳: {name}',
        successICODownload: 'ICO 檔案下載成功！包含 16x16、32x32、48x48、256x256 四種尺寸',
        successChromePackDownload: 'Chrome 圖示包已下載 (icons.zip)',
        successBatchExport: '批次匯出成功！已生成 {count} 個尺寸的PNG檔案',
        successAllExport: '所有規格已打包下載（all-assets.zip）',
        successPackExport: '打包完成',
        
        // 貼上功能（恢復）
        pasteReady: '準備貼上 SVG 檔案...',
        pasteFileOrCode: '貼上 SVG 檔案或程式碼...',
        pastePrompt: '請貼上 SVG 檔案或程式碼',
        
        // README 模板
        readmeWeb: '此包包含 Web 所需圖示（favicon、apple touch、PWA）。',
        readmeChrome: '此包包含 Chrome 擴充所需圖示尺寸。',
        readmeAndroid: '此包包含 Android 所需 mipmap/play store/adaptive 前景圖示。',
        readmeIOS: '此包包含 iOS 所需 iPhone/iPad/App Store 圖示。',
        readmeWindows: '此包包含 Windows 所需多尺寸 ICO。',
        readmeMacOS: '此包包含 macOS 多尺寸 PNG，可用 iconutil 生成 ICNS。',
        readmeSocial: '此包包含社群頭像與分享圖（含 1200x630）。',
        readmeFilename: '目錄說明.txt',

        manifestTitle: '匯出檔案清單',
        manifestFile: 'manifest.txt',
        manifestGenerated: '清單產生於',
        successLangSwitch: '語言已切換為: {langName}',
    },
    'en': {
        // Page title and description
        title: 'SVG Studio Pro - SVG Viewer and Export Tool',
        description: 'Professional SVG viewer and export tool with real-time preview, multi-format export (PNG/ICO/WebP/JPG), batch processing, and Chrome icon pack generation. Simple, efficient, and completely free.',
        keywords: 'SVG viewer,SVG editor,SVG to PNG,SVG to ICO,icon maker,vector graphics,online tool,free tool,Chrome icons,batch export',
        ogTitle: 'SVG Studio Pro - Professional SVG Viewer and Export Tool',
        ogDescription: 'Powerful SVG processing tool with real-time preview, multi-format export, and batch processing. Completely free, no registration required.',
        twitterTitle: 'SVG Studio Pro - Professional SVG Viewer and Export Tool',
        twitterDescription: 'Powerful SVG processing tool with real-time preview, multi-format export, and batch processing. Completely free, no registration required.',
        
        // Main interface text
        svgCodeInput: 'SVG Code Input',
        svgCodeLabel: 'SVG Code',
        uploadText: 'Drag SVG files here or',
        uploadLink: 'click to select files',
        uploadHint: 'Supports .svg format files | Supports Ctrl+V (Mac: Cmd+V) paste files',
        dragDropHint: '💡 Tip: You can also drag and drop SVG files anywhere on the page to import',
        placeholder: 'Paste your SVG code here, or use the file upload above...',
        
        
        
        // Size settings
        widthLabel: 'Width (px)',
        heightLabel: 'Height (px)',
        batchExportSizes: 'Batch Export Size Selection',
        selectAll: 'Select All',
        clearAll: 'Clear All',
        selectedSizesCount: '{count} sizes selected',
        
        // Card titles
        sizeAndExport: 'Size Settings & Export',
        batchExport: 'Batch Export',
        
        // Button text
        downloadPNG: 'Download PNG',
        downloadICO: 'Download ICO',
        batchExportPNG: 'Batch Export PNG',
        batchExportICO: 'Batch Export ICO',
        exportPNG: 'Export PNG',
        exportICO: 'Export ICO',
        chromeIconPack: 'Chrome Icon Pack',
        preview: 'Preview',
        exportAllPacks: 'Export All Packs',
        exportWeb: 'Web',
        exportChrome: 'Chrome Extension',
        exportAndroid: 'Android',
        exportIOS: 'iOS',
        exportWindows: 'Windows',
        exportMacOS: 'macOS',
        exportSocial: 'Social',
        selectExport: 'Select Export',
        confirm: 'Confirm',
        cancel: 'Cancel',
        
        // Status text
        realtimeUpdate: 'Real-time update',
        waitingInput: 'Waiting for input',
        invalidSize: 'Invalid size',
        formatError: 'Format error',
        updated: 'Updated',
        generating: 'Generating...',
        packing: 'Packing...',
        batchGenerating: 'Batch generating...',
        exportingAll: 'Exporting all packs...',
        exportingPack: 'Exporting...',
        
        // Navigation
        'nav-home': 'Home',
        'nav-tools': 'Tools',
        'nav-viewer': 'SVG Viewer',
        'nav-converter': 'Format Converter',
        'nav-batch': 'Batch Processing',
        'nav-about': 'About',
        'nav-docs': 'Documentation',
        'nav-start': 'Get Started',
        
        // 预览区域
        previewPlaceholder: 'Enter SVG code on the left, preview will update automatically',
        updatingPreview: 'Updating preview...',
        inputting: 'Inputting...',
        presetSizes: 'Preset Sizes',
        
        // Error and success messages
        errorEnterSVG: 'Please enter SVG code',
        errorValidSize: 'Please enter valid width and height',
        errorSVGFormat: 'SVG code format error',
        errorInvalidSVG: 'Invalid SVG code',
        errorEnterSVGFirst: 'Please enter SVG code first',
        errorSelectSize: 'Please select at least one export size',
        errorValidSVGFile: 'Please select a valid SVG file',
        errorFileRead: 'File reading failed, please try again',
        errorDragSVG: 'Please drag SVG format files',

        errorNetworkTimeout: 'Network request timeout, please check your connection',
        
        successPreviewUpdate: 'Preview updated successfully!',
        successPNGDownload: 'PNG file downloaded ({size})',
        successFileUpload: 'File "{name}" uploaded successfully!',
        successFilePaste: 'File pasted: {name}',
        successSVGPaste: 'SVG code pasted',
        successDragUpload: 'Drag uploaded: {name}',
        successICODownload: 'ICO file downloaded successfully! Contains 16x16, 32x32, 48x48, 256x256 sizes',
        successChromePackDownload: 'Chrome icon pack downloaded (icons.zip)',
        successBatchExport: 'Batch export successful! Generated {count} PNG files in different sizes',
        successAllExport: 'All assets packaged (all-assets.zip)',
        successPackExport: 'Packaged',
        
        // Paste prompts (restore)
        pasteReady: 'Ready to paste SVG file...',
        pasteFileOrCode: 'Paste SVG file or code...',
        pastePrompt: 'Please paste SVG file or code',
        
        // README 模板
        readmeWeb: 'This pack includes Web icons (favicon, apple touch, PWA).',
        readmeChrome: 'This pack includes Chrome extension icon sizes.',
        readmeAndroid: 'This pack includes Android mipmap/play store/adaptive foreground icons.',
        readmeIOS: 'This pack includes iOS iPhone/iPad/App Store icons.',
        readmeWindows: 'This pack includes Windows multi-size ICO.',
        readmeMacOS: 'This pack includes macOS PNG set; use iconutil to produce ICNS.',
        readmeSocial: 'This pack includes social avatar and share images (with 1200x630).',
        readmeFilename: 'README.txt',

        manifestTitle: 'Exported Files Manifest',
        manifestFile: 'manifest.txt',
        manifestGenerated: 'Manifest generated on',
        successLangSwitch: 'Language switched to: {langName}',
    }
};

// 当前语言
let currentLanguage = 'zh-CN';

// 获取文本的函数
function getText(key, params = {}) {
    let text = i18nData[currentLanguage][key] || i18nData['zh-CN'][key] || key;
    
    // 替换参数
    Object.keys(params).forEach(param => {
        text = text.replace(new RegExp(`\\{${param}\\}`, 'g'), params[param]);
    });
    
    return text;
}

// 检测浏览器语言
function detectBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('en')) {
        return 'en';
    } else if (browserLang === 'zh-TW' || browserLang === 'zh-HK' || browserLang === 'zh-Hant') {
        return 'zh-TW';
    } else if (browserLang.startsWith('zh')) {
        return 'zh-CN';
    }
    return 'zh-CN'; // 默认简体中文
}

// 切换语言
function switchLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('svgstudio_language', lang);
    updateAllTexts();
    updatePageTitle();
    
    // 更新语言选择器显示
    updateLanguageDisplay();
}

// 更新页面标题
function updatePageTitle() {
    document.title = getText('title');
    document.documentElement.lang = currentLanguage;
    
    // 更新SEO meta标签
    updateMetaTag('name', 'description', getText('description'));
    updateMetaTag('name', 'keywords', getText('keywords'));
    updateMetaTag('property', 'og:title', getText('ogTitle'));
    updateMetaTag('property', 'og:description', getText('ogDescription'));
    updateMetaTag('name', 'twitter:title', getText('twitterTitle'));
    updateMetaTag('name', 'twitter:description', getText('twitterDescription'));
}

// 辅助函数：更新meta标签
function updateMetaTag(attribute, name, content) {
    let meta = document.querySelector(`meta[${attribute}="${name}"]`);
    if (meta) {
        meta.setAttribute('content', content);
    }
}

// 更新所有UI文本
function updateAllTexts() {
    // 更新所有带有data-i18n属性的元素
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = getText(key);
    });
    
    // 更新placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        element.placeholder = getText(key);
    });
    
    // 更新动态状态文本
    const previewStatus = document.getElementById('previewStatus');
    if (previewStatus && previewStatus.textContent) {
        const statusText = previewStatus.textContent.trim();
        if (statusText === '实时更新' || statusText === 'Real-time update') {
            previewStatus.textContent = getText('realtimeUpdate');
        } else if (statusText === '等待输入' || statusText === 'Waiting for input') {
            previewStatus.textContent = getText('waitingInput');
        } else if (statusText === '已更新' || statusText === 'Updated') {
            previewStatus.textContent = getText('updated');
        } else if (statusText === '格式错误' || statusText === 'Format error') {
            previewStatus.textContent = getText('formatError');
        } else if (statusText === '尺寸无效' || statusText === 'Invalid size') {
            previewStatus.textContent = getText('invalidSize');
        }
    }
}

// 初始化语言
function initLanguage() {
    // 优先使用本地存储的语言设置
    const savedLang = localStorage.getItem('svgstudio_language');
    if (savedLang && i18nData[savedLang]) {
        currentLanguage = savedLang;
    } else {
        // 否则根据浏览器语言自动检测
        currentLanguage = detectBrowserLanguage();
    }
    
    updatePageTitle();
    
    // 设置语言切换按钮状态
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    const activeBtn = document.querySelector(`[onclick="switchLanguage('${currentLanguage}')"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

// 主要功能变量
let currentSVG = '';



// 尺寸设置功能
function setSize(width, height) {
    document.getElementById('widthInput').value = width;
    document.getElementById('heightInput').value = height;
    if (currentSVG) {
        updatePreview(false);
    }
}

// 布局更新功能
function updateLayout() {
    const width = parseInt(document.getElementById('widthInput').value) || 400;
    const height = parseInt(document.getElementById('heightInput').value) || 400;
    const content = document.querySelector('.content');

    // 当宽度或高度大于600px时，切换到垂直布局
    if (width > 600 || height > 600) {
        content.classList.add('vertical-layout');
    } else {
        content.classList.remove('vertical-layout');
    }
}

// 预览更新功能
function updatePreview() {
    const svgInput = document.getElementById('svgInput').value.trim();
    const width = 512;
    const height = 512;
    if (!svgInput) { updatePreviewStatus(getText('waitingInput'), 'text-gray-400'); return; }
    if (!width || !height || width <= 0 || height <= 0) { updatePreviewStatus(getText('invalidSize'), 'text-red-500'); return; }
    try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(svgInput, 'image/svg+xml');
        let svgElement = null;
        const root = doc && doc.documentElement;
        const isSvgRoot = root && (root.tagName || root.nodeName) && (root.tagName || root.nodeName).toLowerCase() === 'svg';
        if (isSvgRoot) {
            svgElement = root;
        } else {
            const alt = new DOMParser().parseFromString(svgInput, 'text/html');
            const found = alt.querySelector && alt.querySelector('svg');
            if (found) {
                svgElement = found;
            } else {
                throw new Error(getText('svgFormatError'));
            }
        }
        svgElement.setAttribute('width', width);
        svgElement.setAttribute('height', height);
        const previewContainer = document.getElementById('previewContent');
        if (!previewContainer) { console.error('Preview container element not found'); return; }
        previewContainer.innerHTML = '';
        previewContainer.appendChild(svgElement.cloneNode(true));
        previewContainer.parentElement.classList.add('has-content');
        currentSVG = new XMLSerializer().serializeToString(svgElement);
        // 元素可能不存在，访问前做保护
        const chromeBtn = document.getElementById('chromePackBtn');
        if (chromeBtn) chromeBtn.disabled = false;
        updateExportButtonsState();
        updateLayout();
        updatePreviewStatus(getText('updated'), 'text-green-500');
    } catch (error) {
        updatePreviewStatus(getText('formatError'), 'text-red-500');
        console.error('SVG parsing error:', error.message);
    }
}

// Chrome 图标打包下载功能
function downloadChromeIconPack() {
    if (!currentSVG) {
        showError('请先输入 SVG 代码');
        return;
    }

    // Chrome 扩展图标规格
    const iconSizes = [
        { size: 16, description: '浏览器工具栏图标' },
        { size: 32, description: '扩展管理页面图标' },
        { size: 48, description: '扩展详情页面图标' },
        { size: 128, description: 'Chrome网上应用店图标' }
    ];

    // 显示加载状态
    const chromePackBtn = document.getElementById('chromePackBtn');
    const originalText = chromePackBtn ? chromePackBtn.innerHTML : '';
    if (chromePackBtn) {
        chromePackBtn.innerHTML = '<div class="loading-spinner"></div><span>打包中...</span>';
        chromePackBtn.disabled = true;
    }

    // 创建 ZIP 文件
    const zip = new JSZip();
    let completedIcons = 0;

    // 生成每个尺寸的图标
    iconSizes.forEach(({ size, description }) => {
        generateIconPNG(size, (blob) => {
            if (blob) {
                zip.file(`icon_${size}x${size}.png`, blob);
                completedIcons++;

                // 所有图标生成完成后，创建并下载 ZIP
                if (completedIcons === iconSizes.length) {
                    // 添加说明文件
                    const readmeContent = `Chrome 扩展图标包\n\n` +
                        `包含以下图标文件：\n` +
                        `- icon_16x16.png: 16×16 像素，用于浏览器工具栏，需要简洁清晰\n` +
                        `- icon_32x32.png: 32×32 像素，用于扩展管理页面\n` +
                        `- icon_48x48.png: 48×48 像素，用于扩展详情页面\n` +
                        `- icon_128x128.png: 128×128 像素，用于Chrome网上应用店，需要最高质量\n\n` +
                        `使用方法：\n` +
                        `在 manifest.json 中配置：\n` +
                        `"icons": {\n` +
                        `  "16": "icon_16x16.png",\n` +
                        `  "32": "icon_32x32.png",\n` +
                        `  "48": "icon_48x48.png",\n` +
                        `  "128": "icon_128x128.png"\n` +
                        `}`;
                    
                    zip.file('README.txt', readmeContent);

                    // 生成并下载 ZIP 文件
                    zip.generateAsync({ type: 'blob' })
                        .then(function (content) {
                            const url = URL.createObjectURL(content);
                            const a = document.createElement('a');
                            a.href = url;
                            a.download = 'icons.zip';
                            document.body.appendChild(a);
                            a.click();
                            document.body.removeChild(a);
                            URL.revokeObjectURL(url);

                            showSuccess('Chrome 图标包已下载 (icons.zip)');

                            // 恢复按钮状态
                            if (chromePackBtn) { chromePackBtn.innerHTML = originalText; chromePackBtn.disabled = false; }
                        })
                        .catch(function (error) {
                            showError('生成 ZIP 文件时出错');
                            if (chromePackBtn) { chromePackBtn.innerHTML = originalText; chromePackBtn.disabled = false; }
                        });
                }
            } else {
                showError(`生成 ${size}×${size} 图标时出错`);
                if (chromePackBtn) { chromePackBtn.innerHTML = originalText; chromePackBtn.disabled = false; }
            }
        });
    });
}

// 生成指定尺寸的 PNG 图标
function generateIconPNG(size, callback) {
    // 创建 canvas
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    // 设置透明背景（Chrome 图标通常使用透明背景）
    ctx.clearRect(0, 0, size, size);

    // 创建 Image 对象
    const img = new Image();

    img.onload = function () {
        try {
            // 绘制到 canvas
            ctx.drawImage(img, 0, 0, size, size);

            // 转换为 blob
            canvas.toBlob(function (blob) {
                callback(blob);
            }, 'image/png');
        } catch (error) {
            callback(null);
        }
    };

    img.onerror = function () {
        callback(null);
    };

    // 将 SVG 转换为 data URL
    const svgBlob = new Blob([currentSVG], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);
    img.src = url;
}

// 多选尺寸功能
let selectedSizes = [];

function selectAllSizes() {
    const sizeOptions = document.querySelectorAll('.size-option');
    sizeOptions.forEach(option => {
        if (!option.classList.contains('selected')) {
            option.classList.add('selected');
            const size = parseInt(option.dataset.size);
            if (!selectedSizes.includes(size)) {
                selectedSizes.push(size);
            }
        }
    });
    updateSelectedSizes();
}

function clearAllSizes() {
    const sizeOptions = document.querySelectorAll('.size-option');
    sizeOptions.forEach(option => {
        option.classList.remove('selected');
    });
    selectedSizes = [];
    updateSelectedSizes();
}

function updateSelectedSizes() {
    const countElement = document.getElementById('selectedCount');
    const count = selectedSizes.length;
    countElement.textContent = getText('selectedSizesCount').replace('{count}', count);
    
    // 更新尺寸计数徽章
    const badge = document.getElementById('sizeBadge');
    if (badge) {
        badge.textContent = count;
        badge.style.display = count > 0 ? 'inline-block' : 'none';
    }
    
    // 更新导出按钮状态
    updateExportButtonsState();
}

// 统一的尺寸配置
const COMMON_SIZES = [16, 24, 32, 48, 64, 128, 256, 512];

// 生成尺寸网格
function generateSizeGrid() {
    const sizeGrid = document.getElementById('sizeGrid');
    if (!sizeGrid) return;
    
    sizeGrid.innerHTML = '';
    
    COMMON_SIZES.forEach(size => {
        const sizeOption = document.createElement('button');
        sizeOption.className = 'size-option';
        sizeOption.textContent = `${size}×${size}`;
        sizeOption.dataset.size = size;
        sizeOption.onclick = () => toggleSizeSelection(sizeOption, size);
        sizeGrid.appendChild(sizeOption);
    });
}

// 切换尺寸选择
function toggleSizeSelection(buttonElement, size) {
    const isSelected = buttonElement.classList.contains('selected');
    
    if (isSelected) {
        buttonElement.classList.remove('selected');
        selectedSizes = selectedSizes.filter(s => s !== size);
    } else {
        buttonElement.classList.add('selected');
        selectedSizes.push(size);
    }
    
    updateSelectedSizes();
}

// 生成预设尺寸网格
function generatePresetGrid() {
    const presetGrid = document.getElementById('presetGrid');
    if (!presetGrid) return;
    
    presetGrid.innerHTML = '';
    
    COMMON_SIZES.forEach(size => {
        const presetBtn = document.createElement('button');
        presetBtn.className = 'preset-btn';
        presetBtn.textContent = `${size}×${size}`;
        presetBtn.onclick = () => setPresetSize(size, size, presetBtn);
        presetGrid.appendChild(presetBtn);
    });
}

// 设置预设尺寸
function setPresetSize(width, height, buttonElement) {
    document.querySelectorAll('.preset-btn').forEach(btn => { btn.classList.remove('active'); });
    buttonElement.classList.add('active');
    if (currentSVG) { updatePreview(false); }
    updateLayout();
}

// 更新预设按钮状态
function updatePresetButtonsState() {
    const width = parseInt(document.getElementById('widthInput').value);
    const height = parseInt(document.getElementById('heightInput').value);
    
    // 移除所有按钮的active状态
    document.querySelectorAll('.preset-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // 如果当前尺寸匹配某个预设，高亮对应按钮
    if (width === height) {
        const matchingBtn = Array.from(document.querySelectorAll('.preset-btn')).find(btn => {
            return btn.textContent === `${width}×${height}`;
        });
        if (matchingBtn) {
            matchingBtn.classList.add('active');
        }
    }
}

function initializeTabs() {
    // 生成尺寸网格
    generateSizeGrid();
    
    // 初始化尺寸计数徽章
    const badge = document.getElementById('sizeBadge');
    if (badge) {
        badge.style.display = 'none';
    }
}

function updateExportButtonsState() {
    const hasSelection = selectedSizes.length > 0;
    const hasPreview = currentSVG && currentSVG.trim() !== '';
    
    // 更新批量导出按钮状态
    const batchExportBtn = document.getElementById('batchExportBtn');
    if (batchExportBtn) {
        batchExportBtn.disabled = !hasSelection || !hasPreview;
    }
    const batchExportIcoBtn = document.getElementById('batchExportIcoBtn');
    if (batchExportIcoBtn) {
        batchExportIcoBtn.disabled = !hasSelection || !hasPreview;
    }
    const exportAllBtn = document.getElementById('exportAllPacksBtn');
    if (exportAllBtn) {
        exportAllBtn.disabled = !hasPreview;
    }
    const openSelector = document.getElementById('openExportSelectorBtn');
    if (openSelector) openSelector.disabled = !hasPreview;
}

// ICO 文件下载功能
function downloadICO() {
    if (!currentSVG) {
        showError('请先输入 SVG 代码并预览');
        return;
    }

    // 显示加载状态
    const icoBtn = document.getElementById('icoBtn');
    if (!icoBtn) { console.warn('ICO button element not found'); return; }
    const originalText = icoBtn.innerHTML;
    icoBtn.innerHTML = '<div class="loading-spinner"></div><span>生成中...</span>';
    icoBtn.disabled = true;

    // ICO 文件支持的标准尺寸
    const sizes = [16, 32, 48, 256];
    let completedIcons = 0;
    const pngImages = [];

    sizes.forEach((size, index) => {
        generateIconPNG(size, function (blob) {
            if (blob) {
                // 将 blob 转换为 ArrayBuffer
                const reader = new FileReader();
                reader.onload = function () {
                    pngImages[index] = new Uint8Array(reader.result);
                    completedIcons++;

                    if (completedIcons === sizes.length) {
                        // 所有图标生成完成，创建 ICO 文件
                        try {
                            const icoData = pngToIco(pngImages);
                            const icoBlob = new Blob([new Uint8Array(icoData)], { type: 'image/x-icon' });
                            
                            // 创建下载链接
                            const a = document.createElement('a');
                            a.href = URL.createObjectURL(icoBlob);
                            a.download = 'icon.ico';
                            document.body.appendChild(a);
                            a.click();
                            document.body.removeChild(a);
                            
                            showSuccess('ICO 文件下载成功！包含 16x16、32x32、48x48、256x256 四种尺寸');
                        } catch (error) {
                            showError('ICO 文件生成失败: ' + error.message);
                        }
                    }
                };
                reader.readAsArrayBuffer(blob);
            } else {
                showError(`生成 ${size}x${size} 图标失败`);
            }

            // 恢复按钮状态
            if (completedIcons === sizes.length || blob === null) {
                icoBtn.innerHTML = originalText;
                icoBtn.disabled = false;
            }
        });
    });
}

// PNG 转 ICO 格式的核心函数
function pngToIco(images) {
    let icoHead = [ // .ico 文件头
        0, 0, // Reserved. Must always be 0 (2 bytes)
        1, 0, // Specifies image type: 1 for icon (.ICO) image (2 bytes)
        images.length & 255, (images.length >> 8) & 255 // Number of images (2 bytes)
    ];
    let icoBody = [];
    let pngBody = [];

    for (let i = 0, num, pngHead, pngData, offset = 0; i < images.length; i++) {
        pngData = Array.from(images[i]);
        pngHead = [ // Image directory (16 bytes)
            0,    // Width 0-255, should be 0 if 256 pixels (1 byte)
            0,    // Height 0-255, should be 0 if 256 pixels (1 byte)
            0,    // Color count, should be 0 if more than 256 colors (1 byte)
            0,    // Reserved, should be 0 (1 byte)
            1, 0, // Color planes (2 bytes)
            32, 0 // Bits per pixel (2 bytes)
        ];
        
        // Size of the bitmap data in bytes (4 bytes)
        num = pngData.length;
        for (let j = 0; j < 4; j++) {
            pngHead[pngHead.length] = (num >> (8 * j)) & 255;
        }

        // Offset in the file (4 bytes)
        num = icoHead.length + ((pngHead.length + 4) * images.length) + offset;
        for (let j = 0; j < 4; j++) {
            pngHead[pngHead.length] = (num >> (8 * j)) & 255;
        }

        offset += pngData.length;
        icoBody = icoBody.concat(pngHead); // Combine image directory
        pngBody = pngBody.concat(pngData); // Combine actual image data
    }
    
    return icoHead.concat(icoBody, pngBody);
}

// 实时预览功能
let previewUpdateTimeout;

function updatePreviewStatus(status, color = 'text-gray-500') {
    const statusElement = document.getElementById('statusIndicator');
    if (statusElement) {
        statusElement.textContent = status;
        statusElement.className = `text-xs ml-2 font-normal ${color}`;
    }
}

function updateSVGSize() {
    const svgInput = document.getElementById('svgInput').value;
    const sizeElement = document.getElementById('svgSize');
    if (sizeElement && svgInput) {
        const sizeInBytes = new Blob([svgInput]).size;
        let sizeText = '';
        if (sizeInBytes < 1024) {
            sizeText = `${sizeInBytes} B`;
        } else if (sizeInBytes < 1024 * 1024) {
            sizeText = `${(sizeInBytes / 1024).toFixed(1)} KB`;
        } else {
            sizeText = `${(sizeInBytes / (1024 * 1024)).toFixed(1)} MB`;
        }
        sizeElement.textContent = `(${sizeText})`;
    } else if (sizeElement) {
        sizeElement.textContent = '';
    }
}

function showPreviewLoading() {
    updatePreviewStatus(getText('updatingPreview'), 'text-blue-500');
    const previewContainer = document.getElementById('previewContent');
    if (!previewContainer) {
        console.error('Preview container element not found');
        return;
    }
    previewContainer.innerHTML = `
        <div class="preview-placeholder">
            <div class="loading-spinner" style="width: 32px; height: 32px; margin-bottom: 1rem;"></div>
            <p>正在更新预览...</p>
        </div>
    `;
}

function updatePreviewRealtime() {
    const svgInput = document.getElementById('svgInput').value.trim();
    
    if (!svgInput) {
        // 清空预览
        const previewContainer = document.getElementById('previewContent');
        if (!previewContainer) {
            console.error('Preview container element not found');
            return;
        }
        previewContainer.innerHTML = `
            <div class="preview-placeholder">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                </svg>
                <p>在左侧输入 SVG 代码，预览将自动更新</p>
            </div>
        `;
        previewContainer.parentElement.classList.remove('has-content');
        const d1 = document.getElementById('downloadBtn'); if (d1) d1.disabled = true;
        const d2 = document.getElementById('icoBtn'); if (d2) d2.disabled = true;
        const d3 = document.getElementById('chromePackBtn'); if (d3) d3.disabled = true;
        currentSVG = '';
        return;
    }
    
    // 显示加载状态
    showPreviewLoading();
    
    // 稍微延迟一下，让用户看到加载状态
    setTimeout(() => {
        // 静默更新预览（不显示成功提示）
        updatePreview(false);
    }, 100);
}

function generateManifestFile(files) {
    const now = new Date().toLocaleString();

    const generateTree = (title, fileList) => {
        let tree = `${title}\n============================\n`;
        tree += `${i18nData[currentLanguage]['manifestGenerated']} ${now}\n\n`;
        fileList.forEach((file, index) => {
            const isLast = index === fileList.length - 1;
            tree += `${isLast ? '└──' : '├──'} ${file}\n`;
        });
        return tree;
    };

    const en_files = files.map(f => f.replace(getText('readmeFilename', {lang: 'zh-CN'}), i18nData['en']['readmeFilename']));
    const zh_TW_files = files.map(f => f.replace(getText('readmeFilename', {lang: 'zh-CN'}), i18nData['zh-TW']['readmeFilename']));

    const en_tree = generateTree(i18nData['en']['manifestTitle'], en_files);
    const zh_CN_tree = generateTree(i18nData['zh-CN']['manifestTitle'], files);
    const zh_TW_tree = generateTree(i18nData['zh-TW']['manifestTitle'], zh_TW_files);


    return `${en_tree}\n\n${zh_CN_tree}\n\n${zh_TW_tree}`;
}

// 批量导出PNG功能
function batchExportPNG() {
    if (!currentSVG) {
        showError('请先输入 SVG 代码并预览');
        return;
    }

    if (selectedSizes.length === 0) {
        showError('请至少选择一个导出尺寸');
        return;
    }

    // 显示加载状态
    const batchBtn = document.getElementById('batchExportBtn');
    if (!batchBtn) {
        console.error('Batch export button element not found');
        return;
    }
    const originalText = batchBtn.innerHTML;
    batchBtn.innerHTML = '<div class="loading-spinner"></div><span>批量生成中...</span>';
    batchBtn.disabled = true;

    // 创建ZIP文件
    const zip = new JSZip();
    let completedCount = 0;
    const totalCount = selectedSizes.length;

    selectedSizes.forEach(size => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = size;
        canvas.height = size;

        const img = new Image();
        img.onload = function () {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

            canvas.toBlob(function (blob) {
                if (blob) {
                    zip.file(`icon_${size}x${size}.png`, blob);
                    completedCount++;

                    // 更新进度
                    batchBtn.innerHTML = `<div class="loading-spinner"></div><span>生成中... (${completedCount}/${totalCount})</span>`;

                    if (completedCount === totalCount) {
                        // 所有图片生成完成，创建ZIP文件
                        const fileList = selectedSizes.map(size => `icon_${size}x${size}.png`);
                        const manifestContent = generateManifestFile(fileList);
                        zip.file(getText('manifestFile'), manifestContent);

                        zip.generateAsync({ type: 'blob' }).then(function (content) {
                            const a = document.createElement('a');
                            a.href = URL.createObjectURL(content);
                            a.download = 'icons_batch.zip';
                            document.body.appendChild(a);
                            a.click();
                            document.body.removeChild(a);

                            // 恢复按钮状态
                            batchBtn.innerHTML = originalText;
                            batchBtn.disabled = false;

                            showSuccess(`批量导出成功！已生成 ${totalCount} 个尺寸的PNG文件`);
                        }).catch(function (error) {
                            batchBtn.innerHTML = originalText;
                            batchBtn.disabled = false;
                            showError('ZIP文件生成失败: ' + error.message);
                        });
                    }
                } else {
                    batchBtn.innerHTML = originalText;
                    batchBtn.disabled = false;
                    showError(`生成 ${size}x${size} 图片失败`);
                }
            }, 'image/png');
        };

        img.onerror = function () {
            batchBtn.innerHTML = originalText;
            batchBtn.disabled = false;
            showError(`加载 ${size}x${size} 图片失败`);
        };

        const svgBlob = new Blob([currentSVG], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(svgBlob);
        img.src = url;
    });
}

// 批量导出ICO功能
function batchExportICO() {
    if (!currentSVG) {
        showError('请先输入 SVG 代码并预览');
        return;
    }

    if (selectedSizes.length === 0) {
        showError('请至少选择一个导出尺寸');
        return;
    }

    const icoBatchBtn = document.getElementById('batchExportIcoBtn');
    if (!icoBatchBtn) {
        console.error('Batch export ICO button element not found');
        return;
    }
    const originalText = icoBatchBtn.innerHTML;
    icoBatchBtn.innerHTML = '<div class="loading-spinner"></div><span>批量生成中...</span>';
    icoBatchBtn.disabled = true;

    const zip = new JSZip();
    let completedCount = 0;
    const totalCount = selectedSizes.length;

    // 逐尺寸生成 ICO（每个 ICO 内仅该尺寸，便于按需分发）
    selectedSizes.forEach(size => {
        generateIconPNG(size, function (blob) {
            if (!blob) {
                icoBatchBtn.innerHTML = originalText;
                icoBatchBtn.disabled = false;
                showError(`生成 ${size}x${size} PNG 失败`);
                return;
            }

            const reader = new FileReader();
            reader.onload = function () {
                try {
                    const pngArray = new Uint8Array(reader.result);
                    // 利用现有 pngToIco，将单个 PNG 封装成单尺寸 ICO
                    const icoData = pngToIco([pngArray]);
                    const icoBlob = new Blob([new Uint8Array(icoData)], { type: 'image/x-icon' });
                    zip.file(`icon_${size}x${size}.ico`, icoBlob);
                    completedCount++;

                    // 更新进度
                    icoBatchBtn.innerHTML = `<div class="loading-spinner"></div><span>生成中... (${completedCount}/${totalCount})</span>`;

                    if (completedCount === totalCount) {
                        const fileList = selectedSizes.map(size => `icon_${size}x${size}.ico`);
                        const manifestContent = generateManifestFile(fileList);
                        zip.file(getText('manifestFile'), manifestContent);

                        zip.generateAsync({ type: 'blob' }).then(function (content) {
                            const a = document.createElement('a');
                            a.href = URL.createObjectURL(content);
                            a.download = 'icons_ico_batch.zip';
                            document.body.appendChild(a);
                            a.click();
                            document.body.removeChild(a);

                            icoBatchBtn.innerHTML = originalText;
                            icoBatchBtn.disabled = false;
                            showSuccess(`批量导出成功！已生成 ${totalCount} 个尺寸的ICO文件`);
                        }).catch(function (error) {
                            icoBatchBtn.innerHTML = originalText;
                            icoBatchBtn.disabled = false;
                            showError('ZIP文件生成失败: ' + error.message);
                        });
                    }
                } catch (err) {
                    icoBatchBtn.innerHTML = originalText;
                    icoBatchBtn.disabled = false;
                    showError('ICO 文件生成失败: ' + err.message);
                }
            };
            reader.readAsArrayBuffer(blob);
        });
    });
}

// 文件上传功能
function handleFileUpload(file) {
    if (!file) return;

    if (!file.type.includes('svg') && !file.name.toLowerCase().endsWith('.svg')) {
        showError(getText('errorValidSVGFile'));
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        const svgContent = e.target.result;
        document.getElementById('svgInput').value = svgContent;
        showSuccess(getText('successFileUpload').replace('{name}', file.name));

        // 更新SVG大小显示
        updateSVGSize();
        
        // 自动更新预览
        setTimeout(() => {
            updatePreview();
        }, 100);
    };

    reader.onerror = function () {
        showError(getText('errorFileRead'));
    };

    reader.readAsText(file);
}

// 显示粘贴指示器
function showPasteIndicator(message = getText('pasteReady')) {
    const indicator = document.getElementById('pasteIndicator');
    indicator.textContent = message;
    indicator.classList.add('show');
    
    setTimeout(() => {
        indicator.classList.remove('show');
    }, 2000);
}

// Tab切换功能
function switchTab() { /* tabs removed */ }

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', function() {
    initLanguage();
    updateAllTexts();
    generatePresetGrid();
    initializeTabs();
    
    // 自动更新预览当输入改变时
    document.getElementById('svgInput').addEventListener('input', function () {
        // 显示正在输入状态
        updatePreviewStatus(getText('inputting'), 'text-blue-400');
        
        // 更新文件大小显示
        updateSVGSize();
        
        // 清除之前的定时器
        clearTimeout(previewUpdateTimeout);
        
        // 设置新的定时器，减少延迟时间以提供更实时的体验
        previewUpdateTimeout = setTimeout(updatePreviewRealtime, 300);
    });
    
    // 监听粘贴事件，支持文件和文本粘贴
    document.getElementById('svgInput').addEventListener('paste', function (e) {
        // 检查剪贴板中是否有文件
        const items = e.clipboardData.items;
        let hasFile = false;
        
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            
            // 处理文件粘贴
            if (item.kind === 'file') {
                const file = item.getAsFile();
                if (file && (file.type.includes('svg') || file.name.toLowerCase().endsWith('.svg'))) {
                    e.preventDefault();
                    handleFileUpload(file);
                    hasFile = true;
                    break;
                }
            }
        }
        
        // 如果没有文件，处理文本粘贴
        if (!hasFile) {
            // 粘贴后稍微延迟一下让内容先填充
            setTimeout(updatePreviewRealtime, 50);
        }
    });
    
    // 检测 Ctrl+V 按键，显示粘贴提示
    document.addEventListener('keydown', function (e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'v') {
            // 检查剪贴板权限并显示提示
            if (navigator.clipboard) {
                showPasteIndicator('粘贴 SVG 文件或代码...');
            }
        }
    });
    
    // 全局粘贴事件监听，支持在页面任何地方粘贴文件
    document.addEventListener('paste', function (e) {
        // 如果焦点在 textarea 上，让 textarea 自己处理
        if (document.activeElement === document.getElementById('svgInput')) {
            return;
        }
        
        const items = e.clipboardData.items;
        let handled = false;
        
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            
            // 处理文件粘贴
            if (item.kind === 'file') {
                const file = item.getAsFile();
                if (file && (file.type.includes('svg') || file.name.toLowerCase().endsWith('.svg'))) {
                    e.preventDefault();
                    handleFileUpload(file);
                    showSuccess(`已粘贴文件: ${file.name}`);
                    handled = true;
                    break;
                }
            }
            // 处理文本粘贴（SVG 代码）
            else if (item.kind === 'string') {
                if (item.type === 'text/plain' || item.type === 'text/html') {
                    item.getAsString((text) => {
                        // 检查是否是 SVG 代码
                        if (text.trim().startsWith('<svg') && text.includes('</svg>')) {
                            e.preventDefault();
                            // 提取 SVG 代码（如果是 HTML 中的 SVG）
                            let svgCode = text;
                            if (item.type === 'text/html') {
                                const parser = new DOMParser();
                                const doc = parser.parseFromString(text, 'text/html');
                                const svgElement = doc.querySelector('svg');
                                if (svgElement) {
                                    svgCode = svgElement.outerHTML;
                                }
                            }
                            document.getElementById('svgInput').value = svgCode;
                            updatePreviewRealtime();
                            showSuccess('已粘贴 SVG 代码');
                            handled = true;
                        }
                    });
                }
            }
        }
        
        // 如果没有处理任何内容，显示提示
        if (!handled && items.length > 0) {
            showPasteIndicator('请粘贴 SVG 文件或代码');
        }
    });

    // 尺寸输入改变时实时更新
    ['widthInput', 'heightInput'].forEach(id => {
        document.getElementById(id).addEventListener('input', function () {
            // 立即更新布局
            updateLayout();
            
            // 更新预设按钮状态
            updatePresetButtonsState();

            if (currentSVG) {
                clearTimeout(previewUpdateTimeout);
                previewUpdateTimeout = setTimeout(() => updatePreview(false), 200);
            }
        });
    });

    const fileInputEl = document.getElementById('fileInput');
    let isFileDialogOpen = false;

    fileInputEl.addEventListener('change', function (e) {
        const file = e.target.files[0];
        if (file) {
            handleFileUpload(file);
        }
        // 清空值，保证选择相同文件也能再次触发 change
        e.target.value = '';
        // 关闭对话框状态
        isFileDialogOpen = false;
    });

    // 防止快速重复打开文件选择框
    fileInputEl.addEventListener('click', function (e) {
        e.stopPropagation();
    });

    // 上传区域点击事件
    document.getElementById('uploadArea').addEventListener('click', function () {
        openFileDialogOnce();
    });

    // 当文件选择窗口关闭回到页面时重置标志
    window.addEventListener('focus', function () {
        isFileDialogOpen = false;
    });

    // 拖拽上传功能 - 支持整个窗口拖拽
    const uploadArea = document.getElementById('uploadArea');
    let dragCounter = 0; // 用于跟踪拖拽进入/离开事件

    // 原有的上传区域拖拽功能保持不变
    uploadArea.addEventListener('dragover', function (e) {
        e.preventDefault();
        uploadArea.classList.add('dragover');
    });

    uploadArea.addEventListener('dragleave', function (e) {
        e.preventDefault();
        uploadArea.classList.remove('dragover');
    });

    uploadArea.addEventListener('drop', function (e) {
        e.preventDefault();
        uploadArea.classList.remove('dragover');
        document.body.classList.remove('drag-active');
        dragCounter = 0;

        const files = e.dataTransfer.files;
        if (files.length > 0) {
            const file = files[0];
            if (file.type.includes('svg') || file.name.toLowerCase().endsWith('.svg')) {
                handleFileUpload(file);
                showSuccess(`已拖拽上传: ${file.name}`);
            } else {
                showError('请拖拽 SVG 格式的文件');
            }
        }
    });

    // 全窗口拖拽功能
    document.addEventListener('dragenter', function (e) {
        e.preventDefault();
        dragCounter++;
        
        // 检查是否拖拽的是文件
        if (e.dataTransfer.types.includes('Files')) {
            document.body.classList.add('drag-active');
        }
    });

    document.addEventListener('dragover', function (e) {
        e.preventDefault();
        
        // 检查是否拖拽的是文件
        if (e.dataTransfer.types.includes('Files')) {
            document.body.classList.add('drag-active');
        }
    });

    document.addEventListener('dragleave', function (e) {
        e.preventDefault();
        dragCounter--;
        
        // 只有当所有拖拽都离开时才移除样式
        if (dragCounter === 0) {
            document.body.classList.remove('drag-active');
        }
    });

    document.addEventListener('drop', function (e) {
        e.preventDefault();
        dragCounter = 0;
        document.body.classList.remove('drag-active');
        
        // 如果拖拽到上传区域，让上传区域处理
        if (e.target.closest('#uploadArea')) {
            return;
        }
        
        // 处理全窗口拖拽
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            const file = files[0];
            if (file.type.includes('svg') || file.name.toLowerCase().endsWith('.svg')) {
                handleFileUpload(file);
                showSuccess(`已拖拽上传: ${file.name}`);
            } else {
                showError('请拖拽 SVG 格式的文件');
            }
        }
    });

    // 键盘快捷键（精简，移除下载按钮依赖）
    document.addEventListener('keydown', function (e) {
        if (e.ctrlKey || e.metaKey) {
            if (e.key === 'Enter') {
                e.preventDefault();
                updatePreview();
            }
        }
    });
});

// 移动端菜单切换功能
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    
    if (mobileNav && menuToggle) {
        const isActive = mobileNav.classList.contains('active');
        
        if (isActive) {
            mobileNav.classList.remove('active');
            menuToggle.classList.remove('active');
        } else {
            mobileNav.classList.add('active');
            menuToggle.classList.add('active');
        }
    }
}

// 点击导航链接时关闭移动端菜单
document.addEventListener('click', function(e) {
    const mobileNav = document.getElementById('mobileNav');
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    
    // 如果点击的是移动端导航链接，关闭菜单
    if (e.target.classList.contains('mobile-nav-link')) {
        if (mobileNav && menuToggle) {
            mobileNav.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    }
    
    // 如果点击的是菜单外部区域，关闭菜单
    if (mobileNav && menuToggle && 
        !mobileNav.contains(e.target) && 
        !menuToggle.contains(e.target) &&
        mobileNav.classList.contains('active')) {
        mobileNav.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});

// 窗口大小改变时关闭移动端菜单
window.addEventListener('resize', function() {
    const mobileNav = document.getElementById('mobileNav');
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    
    if (window.innerWidth > 768 && mobileNav && menuToggle) {
        mobileNav.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});

// 键盘事件处理（ESC键关闭菜单）
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const mobileNav = document.getElementById('mobileNav');
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        
        if (mobileNav && menuToggle && mobileNav.classList.contains('active')) {
            mobileNav.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    }
});

// Header按钮功能实现





// 语言切换功能
function toggleLanguageDropdown() {
    const selector = document.getElementById('languageSelector');
    const dropdown = document.getElementById('languageDropdown');
    
    if (selector && dropdown) {
        selector.classList.toggle('open');
        
        // 点击外部关闭下拉菜单
        if (selector.classList.contains('open')) {
            document.addEventListener('click', closeLanguageDropdown);
        } else {
            document.removeEventListener('click', closeLanguageDropdown);
        }
    }
}

function closeLanguageDropdown(event) {
    const selector = document.getElementById('languageSelector');
    if (selector && !selector.contains(event.target)) {
        selector.classList.remove('open');
        document.removeEventListener('click', closeLanguageDropdown);
    }
}

function selectLanguage(langCode) {
    const langNames = {
        'zh-CN': '简体中文',
        'zh-TW': '繁體中文',
        'en': 'English'
    };
    
    if (langCode !== currentLanguage) {
        switchLanguage(langCode);
        showSuccess(getText('successLangSwitch', { langName: langNames[langCode] }));
    }
    
    // 关闭下拉菜单
    const selector = document.getElementById('languageSelector');
    if (selector) {
        selector.classList.remove('open');
        document.removeEventListener('click', closeLanguageDropdown);
    }
}

function updateLanguageDisplay() {
    const currentLangDisplay = document.getElementById('currentLangDisplay');
    const languageOptions = document.querySelectorAll('.language-option');
    
    const langNames = {
        'zh-CN': '简体中文',
        'zh-TW': '繁體中文',
        'en': 'English'
    };
    
    // 更新当前语言显示
    if (currentLangDisplay) {
        const name = langNames[currentLanguage] || '简体中文';
        currentLangDisplay.textContent = name;
    }
    
    // 更新选项的激活状态
    languageOptions.forEach(option => {
        const langCode = option.getAttribute('data-lang');
        if (langCode === currentLanguage) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
}





// 在DOMContentLoaded事件中添加header按钮事件监听
document.addEventListener('DOMContentLoaded', function() {
    // 添加语言选择器事件监听
    const langButton = document.getElementById('languageToggle');
    
    if (langButton) {
        langButton.addEventListener('click', toggleLanguageDropdown);
    }
    
    // 添加语言选项点击事件
    const languageOptions = document.querySelectorAll('.language-option');
    languageOptions.forEach(option => {
        option.addEventListener('click', function() {
            const langCode = this.getAttribute('data-lang');
            selectLanguage(langCode);
        });
    });
    
    // 初始化语言显示
    updateLanguageDisplay();
    
    // 添加URL加载按钮事件监听
    const urlLoadBtn = document.getElementById('urlLoadBtn');
    if (urlLoadBtn) {
        urlLoadBtn.addEventListener('click', loadFromURL);
    }
});

// 辅助：将当前SVG按尺寸与格式渲染为Blob
async function renderSVGToBitmapBlob(targetSize, format = 'png') {
    return new Promise((resolve, reject) => {
        try {
            const canvas = document.createElement('canvas');
            canvas.width = targetSize;
            canvas.height = targetSize;
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, targetSize, targetSize);

            const img = new Image();
            img.onload = function () {
                try {
                    ctx.drawImage(img, 0, 0, targetSize, targetSize);
                    const mime = format === 'jpg' || format === 'jpeg' ? 'image/jpeg' : (format === 'webp' ? 'image/webp' : 'image/png');
                    canvas.toBlob((blob) => blob ? resolve(blob) : reject(new Error('Blob null')), mime);
                } catch (e) { reject(e); }
            };
            img.onerror = () => reject(new Error('Image load failed'));
            const svgBlob = new Blob([currentSVG], { type: 'image/svg+xml;charset=utf-8' });
            img.src = URL.createObjectURL(svgBlob);
        } catch (e) { reject(e); }
    });
}

// 规格配置（来自需求）
const EXPORT_SPEC = {
    web: {
        favicon: { sizes: [16, 32, 48], formats: ['ico', 'png'] },
        appleTouch: { sizes: [180], formats: ['png'] },
        pwa: { sizes: [192, 512], formats: ['png'] }
    },
    chromeExtension: { sizes: [16, 32, 48, 128], formats: ['png'] },
    android: {
        mipmap: { sizes: [48, 72, 96, 144, 192], formats: ['png', 'webp'] },
        playStore: { sizes: [512], formats: ['png'] },
        adaptiveIcon: { sizes: [108], formats: ['png'] }
    },
    ios: {
        iphone: { sizes: [80, 120, 180], formats: ['png'] },
        ipad: { sizes: [152, 167], formats: ['png'] },
        appStore: { sizes: [1024], formats: ['png'] }
    },
    desktop: {
        windows: { sizes: [16, 32, 48, 256], formats: ['ico'] },
        macos: { sizes: [16, 32, 64, 128, 256, 512, 1024], formats: ['icns'] }
    },
    social: {
        avatar: { sizes: [512], formats: ['png', 'jpg'] },
        share: { sizes: [1080, 1200], formats: ['png', 'jpg'] }
    }
};

// 生成 ICO（复用现有 pngToIco）
async function generateIcoFromSizes(sizes) {
    const pngBuffers = [];
    for (const size of sizes) {
        const blob = await renderSVGToBitmapBlob(size, 'png');
        const buf = await blob.arrayBuffer();
        pngBuffers.push(new Uint8Array(buf));
    }
    return new Blob([new Uint8Array(pngToIco(pngBuffers))], { type: 'image/x-icon' });
}

// 注意：ICNS 生成较复杂，这里以ZIP内提供多尺寸PNG并附README说明替代
function generateIcnsPlaceholder(zipFolder) {
    const readme = `macOS ICNS 说明\n\n` +
        `本工具暂不直接生成 .icns。请使用 Apple Icon Utility 或 iconutil 将 ZIP 内 PNG 转换为 ICNS：\n` +
        `1) 将以下PNG放入 MyIcon.iconset/ 目录（名字如 icon_16x16.png 等）\n` +
        `2) 运行：iconutil -c icns MyIcon.iconset\n`;
    zipFolder.file('README_ICNS.txt', readme);
}

function confirmExport(title, items) {
    try {
        const lines = items.map(i => `- ${i.name}: ${i.count}`);
        return window.confirm(`${title}\n\n${lines.join('\n')}`);
    } catch (_) { return true; }
}

function countSquareSizes(sizes) { return sizes.length; }

function getAllExportSummary() {
    const items = [];
    // square formats
    const squarePNG = new Set();
    const squareWEBP = new Set();
    const squareJPG = new Set();

    const add = (arr, set) => arr.forEach(s => set.add(s));

    add(EXPORT_SPEC.web.favicon.sizes, squarePNG); // png
    add(EXPORT_SPEC.web.appleTouch.sizes, squarePNG);
    add(EXPORT_SPEC.web.pwa.sizes, squarePNG);
    add(EXPORT_SPEC.chromeExtension.sizes, squarePNG);
    add(EXPORT_SPEC.android.mipmap.sizes, squarePNG);
    add(EXPORT_SPEC.android.playStore.sizes, squarePNG);
    add(EXPORT_SPEC.android.adaptiveIcon.sizes, squarePNG);
    add(EXPORT_SPEC.ios.iphone.sizes, squarePNG);
    add(EXPORT_SPEC.ios.ipad.sizes, squarePNG);
    add(EXPORT_SPEC.ios.appStore.sizes, squarePNG);
    add(EXPORT_SPEC.desktop.macos.sizes, squarePNG);
    add(EXPORT_SPEC.social.avatar.sizes, squarePNG);
    add(EXPORT_SPEC.social.share.sizes, squarePNG);

    // formats per spec
    // webp
    EXPORT_SPEC.android.mipmap.formats.includes('webp') && add(EXPORT_SPEC.android.mipmap.sizes, squareWEBP);
    // jpg
    add(EXPORT_SPEC.social.avatar.sizes, squareJPG);
    add(EXPORT_SPEC.social.share.sizes, squareJPG);

    items.push({ name: 'PNG', count: squarePNG.size + 1 /*1200x630*/ });
    items.push({ name: 'WEBP', count: squareWEBP.size });
    items.push({ name: 'JPG', count: squareJPG.size + 1 /*1200x630*/ });

    // ICO
    let icoCount = 0;
    if (EXPORT_SPEC.web.favicon.formats.includes('ico')) icoCount += 1; // favicon.ico
    if (EXPORT_SPEC.desktop.windows.formats.includes('ico')) icoCount += 1; // icon.ico
    items.push({ name: 'ICO', count: icoCount });

    return items;
}

async function exportAllPacks() {
    if (!currentSVG) {
        showError(getText('errorEnterSVGFirst'));
        return;
    }

    // 确认
    const ok = confirmExport(getText('exportAllPacks'), getAllExportSummary());
    if (!ok) return;

    const btn = document.getElementById('exportAllPacksBtn');
    if (!btn) return;
    const original = btn.innerHTML;
    btn.innerHTML = `<div class=\"loading-spinner\"></div><span>${getText('exportingAll')}</span>`;
    btn.disabled = true;

    // 分格式打包
    const zipPNG = new JSZip();
    const zipWEBP = new JSZip();
    const zipJPG = new JSZip();
    const zipICO = new JSZip();

    try {
        // helper: add square export to zip
        const addSquare = async (sizes, formats) => {
            for (const s of sizes) {
                if (formats.includes('png')) {
                    const b = await renderSVGToBitmapBlob(s, 'png');
                    zipPNG.file(`icon_${s}.png`, b);
                }
                if (formats.includes('webp')) {
                    const b = await renderSVGToBitmapBlob(s, 'webp');
                    zipWEBP.file(`icon_${s}.webp`, b);
                }
                if (formats.includes('jpg') || formats.includes('jpeg')) {
                    const b = await renderSVGToBitmapBlob(s, 'jpg');
                    zipJPG.file(`icon_${s}.jpg`, b);
                }
            }
        };

        // WEB
        // favicon: ico + png
        if (EXPORT_SPEC.web.favicon.formats.includes('ico')) {
            const icoBlob = await generateIcoFromSizes(EXPORT_SPEC.web.favicon.sizes);
            zipICO.file('favicon.ico', icoBlob);
        }
        await addSquare(EXPORT_SPEC.web.favicon.sizes, EXPORT_SPEC.web.favicon.formats);
        await addSquare(EXPORT_SPEC.web.appleTouch.sizes, EXPORT_SPEC.web.appleTouch.formats);
        await addSquare(EXPORT_SPEC.web.pwa.sizes, EXPORT_SPEC.web.pwa.formats);

        // Chrome Extension
        await addSquare(EXPORT_SPEC.chromeExtension.sizes, EXPORT_SPEC.chromeExtension.formats);

        // Android
        await addSquare(EXPORT_SPEC.android.mipmap.sizes, EXPORT_SPEC.android.mipmap.formats);
        await addSquare(EXPORT_SPEC.android.playStore.sizes, EXPORT_SPEC.android.playStore.formats);
        await addSquare(EXPORT_SPEC.android.adaptiveIcon.sizes, EXPORT_SPEC.android.adaptiveIcon.formats);

        // iOS
        await addSquare(EXPORT_SPEC.ios.iphone.sizes, EXPORT_SPEC.ios.iphone.formats);
        await addSquare(EXPORT_SPEC.ios.ipad.sizes, EXPORT_SPEC.ios.ipad.formats);
        await addSquare(EXPORT_SPEC.ios.appStore.sizes, EXPORT_SPEC.ios.appStore.formats);

        // Desktop
        if (EXPORT_SPEC.desktop.windows.formats.includes('ico')) {
            const icoBlob = await generateIcoFromSizes(EXPORT_SPEC.desktop.windows.sizes);
            zipICO.file('icon.ico', icoBlob);
        }
        // macOS icns 暂不生成（不含说明文件）
        // 若后续需要，可在此生成 icns 并另行打包

        // Social square
        await addSquare(EXPORT_SPEC.social.avatar.sizes, EXPORT_SPEC.social.avatar.formats);
        await addSquare(EXPORT_SPEC.social.share.sizes, EXPORT_SPEC.social.share.formats);
        // 额外导出 1200x630（非等比）
        {
            const width = 1200; const height = 630;
            const canvas = document.createElement('canvas');
            canvas.width = width; canvas.height = height;
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, width, height);
            const img = new Image();
            await new Promise((res, rej) => {
                img.onload = res; img.onerror = rej;
                const svgBlob = new Blob([currentSVG], { type: 'image/svg+xml;charset=utf-8' });
                img.src = URL.createObjectURL(svgBlob);
            });
            const size = Math.min(width, height);
            const x = Math.floor((width - size) / 2);
            const y = Math.floor((height - size) / 2);
            ctx.drawImage(img, x, y, size, size);
            await new Promise(r => canvas.toBlob(b => { if (b) zipPNG.file(`icon_1200x630.png`, b); r(); }, 'image/png'));
            await new Promise(r => canvas.toBlob(b => { if (b) zipJPG.file(`icon_1200x630.jpg`, b); r(); }, 'image/jpeg'));
        }

        // 依次触发下载：png/webp/jpg/ico（若为空则跳过）
        const triggerZip = async (zip, name) => {
            if (!zip) return;
            const files = Object.keys(zip.files || {});
            if (files.length === 0) return;
            const content = await zip.generateAsync({ type: 'blob' });
            const url = URL.createObjectURL(content);
            const a = document.createElement('a');
            a.href = url;
            a.download = name;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        };

        await triggerZip(zipPNG, 'holatiger-icon-png.zip');
        await triggerZip(zipWEBP, 'holatiger-icon-webp.zip');
        await triggerZip(zipJPG, 'holatiger-icon-jpg.zip');
        await triggerZip(zipICO, 'holatiger-icon-ico.zip');

        showSuccess(getText('successAllExport'));
    } catch (e) {
        showError(e.message || '导出失败');
    } finally {
        btn.innerHTML = original;
        btn.disabled = false;
    }
}

// 轻量通知：避免缺失方法导致报错，统一用状态栏展示
function showSuccess(message) {
    try { console.log('[SUCCESS]', message); } catch (_) {}
    updatePreviewStatus(message || getText('updated'), 'text-green-500');
}
function showError(message) {
    try { console.error('[ERROR]', message); } catch (_) {}
    updatePreviewStatus(message || getText('formatError'), 'text-red-500');
}
function showInfo(message) {
    try { console.info('[INFO]', message); } catch (_) {}
    updatePreviewStatus(message || getText('realtimeUpdate'), 'text-blue-500');
}

function packAddReadme(zip, lines) {
    const filename = getText('readmeFilename');
    const content = [
        `Language: ${currentLanguage}`,
        '',
        ...lines
    ].join('\n');
    zip.file(filename, content);
}

function openExportModal() {
    const modal = document.getElementById('exportModal');
    const exportTree = document.getElementById('exportTree');
    if (!modal || !exportTree) return;

    if (exportTree.innerHTML === '') {
        // Dummy data for demonstration
        const packs = ['web', 'chromeExtension', 'android', 'ios', 'windows', 'macos', 'social'];
        packs.forEach(pack => {
            const node = document.createElement('div');
            node.innerHTML = `<label><input type="checkbox" value="${pack}"> ${getText('export' + pack.charAt(0).toUpperCase() + pack.slice(1))}</label>`;
            exportTree.appendChild(node);
        });

        const headerControls = document.createElement('div');
        headerControls.className = 'batch-controls';
        headerControls.innerHTML = `
          <button class="btn btn-small btn-select-all" data-i18n="selectAll" onclick="document.querySelectorAll('#exportTree input[type=checkbox]').forEach(c => c.checked = true)">${getText('selectAll')}</button>
          <button class="btn btn-small btn-clear-all" data-i18n="clearAll" onclick="document.querySelectorAll('#exportTree input[type=checkbox]').forEach(c => c.checked = false)">${getText('clearAll')}</button>
        `;
        modal.querySelector('.modal-header').appendChild(headerControls);
    }
    
    modal.classList.remove('hidden');
}

function closeExportModal() {
    const modal = document.getElementById('exportModal');
    if (modal) modal.classList.add('hidden');
}

async function confirmExportSelection() {
    // Dummy function, as implementation is complex and out of scope of the styling request
    console.log("Exporting selected packs...");
    closeExportModal();
}

async function exportWebPack() {
    if (!currentSVG) { showError(getText('errorEnterSVGFirst')); return; }
    const items = [];
    let pngCount = EXPORT_SPEC.web.favicon.sizes.length + EXPORT_SPEC.web.appleTouch.sizes.length + EXPORT_SPEC.web.pwa.sizes.length;
    let icoCount = EXPORT_SPEC.web.favicon.formats.includes('ico') ? 1 : 0;
    items.push({ name: 'PNG', count: pngCount });
    if (icoCount) items.push({ name: 'ICO', count: icoCount });
    if (!confirmExport(getText('exportWeb'), items)) return;
    const btn = document.getElementById('exportWebBtn'); if (!btn) return;
    const org = btn.innerHTML; btn.innerHTML = `<div class="loading-spinner"></div><span>${getText('exportingPack')}</span>`; btn.disabled = true;
    const zip = new JSZip();
    try {
        // favicon ico
        if (EXPORT_SPEC.web.favicon.formats.includes('ico')) {
            const icoBlob = await generateIcoFromSizes(EXPORT_SPEC.web.favicon.sizes);
            zip.file('favicon.ico', icoBlob);
        }
        // favicon/apple/pwa png
        for (const s of EXPORT_SPEC.web.favicon.sizes) { if (EXPORT_SPEC.web.favicon.formats.includes('png')) { zip.file(`icon_${s}.png`, await renderSVGToBitmapBlob(s,'png')); } }
        for (const s of EXPORT_SPEC.web.appleTouch.sizes) { zip.file(`icon_${s}.png`, await renderSVGToBitmapBlob(s,'png')); }
        for (const s of EXPORT_SPEC.web.pwa.sizes) { zip.file(`icon_${s}.png`, await renderSVGToBitmapBlob(s,'png')); }
        packAddReadme(zip, [getText('readmeWeb')]);
        const blob = await zip.generateAsync({type:'blob'});

        const fileList = Object.keys(zip.files);
        const manifestContent = generateManifestFile(fileList);
        zip.file(getText('manifestFile'), manifestContent);

        const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href=url; a.download='web-icons.zip'; document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url);
        showSuccess(getText('successPackExport'));
    } catch(e){ showError(e.message);} finally { btn.innerHTML = org; btn.disabled = false; }
}

async function exportChromeExtensionPack() {
    if (!currentSVG) { showError(getText('errorEnterSVGFirst')); return; }
    const items = [{ name: 'PNG', count: EXPORT_SPEC.chromeExtension.sizes.length }];
    if (!confirmExport(getText('exportChrome'), items)) return;
    const btn = document.getElementById('exportChromeBtn'); if (!btn) return;
    const org = btn.innerHTML; btn.innerHTML = `<div class="loading-spinner"></div><span>${getText('exportingPack')}</span>`; btn.disabled = true;
    const zip = new JSZip();
    try {
        for (const s of EXPORT_SPEC.chromeExtension.sizes) { zip.file(`icon_${s}.png`, await renderSVGToBitmapBlob(s,'png')); }
        packAddReadme(zip, [getText('readmeChrome')]);
        const blob = await zip.generateAsync({type:'blob'});
        const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href=url; a.download='chrome-extension-icons.zip'; document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url);
        showSuccess(getText('successPackExport'));
    } catch(e){ showError(e.message);} finally { btn.innerHTML = org; btn.disabled = false; }
}

async function exportAndroidPack() {
    if (!currentSVG) { showError(getText('errorEnterSVGFirst')); return; }
    const pngC = EXPORT_SPEC.android.mipmap.sizes.length + EXPORT_SPEC.android.playStore.sizes.length + EXPORT_SPEC.android.adaptiveIcon.sizes.length;
    const webpC = EXPORT_SPEC.android.mipmap.formats.includes('webp') ? EXPORT_SPEC.android.mipmap.sizes.length : 0;
    const items = [{ name: 'PNG', count: pngC }]; if (webpC) items.push({ name: 'WEBP', count: webpC });
    if (!confirmExport(getText('exportAndroid'), items)) return;
    const btn = document.getElementById('exportAndroidBtn'); if (!btn) return;
    const org = btn.innerHTML; btn.innerHTML = `<div class="loading-spinner"></div><span>${getText('exportingPack')}</span>`; btn.disabled = true;
    const zip = new JSZip();
    try {
        for (const s of EXPORT_SPEC.android.mipmap.sizes) {
            zip.file(`icon_${s}.png`, await renderSVGToBitmapBlob(s,'png'));
            if (EXPORT_SPEC.android.mipmap.formats.includes('webp')) zip.file(`icon_${s}.webp`, await renderSVGToBitmapBlob(s,'webp'));
        }
        for (const s of EXPORT_SPEC.android.playStore.sizes) { zip.file(`icon_${s}.png`, await renderSVGToBitmapBlob(s,'png')); }
        for (const s of EXPORT_SPEC.android.adaptiveIcon.sizes) { zip.file(`icon_${s}.png`, await renderSVGToBitmapBlob(s,'png')); }
        packAddReadme(zip, [getText('readmeAndroid')]);
        const blob = await zip.generateAsync({type:'blob'});
        const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href=url; a.download='android-icons.zip'; document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url);
        showSuccess(getText('successPackExport'));
    } catch(e){ showError(e.message);} finally { btn.innerHTML = org; btn.disabled = false; }
}

async function exportIOSPack() {
    if (!currentSVG) { showError(getText('errorEnterSVGFirst')); return; }
    const items = [{ name: 'PNG', count: EXPORT_SPEC.ios.iphone.sizes.length + EXPORT_SPEC.ios.ipad.sizes.length + EXPORT_SPEC.ios.appStore.sizes.length }];
    if (!confirmExport(getText('exportIOS'), items)) return;
    const btn = document.getElementById('exportIOSBtn'); if (!btn) return;
    const org = btn.innerHTML; btn.innerHTML = `<div class="loading-spinner"></div><span>${getText('exportingPack')}</span>`; btn.disabled = true;
    const zip = new JSZip();
    try {
        for (const s of EXPORT_SPEC.ios.iphone.sizes) { zip.file(`icon_${s}.png`, await renderSVGToBitmapBlob(s,'png')); }
        for (const s of EXPORT_SPEC.ios.ipad.sizes) { zip.file(`icon_${s}.png`, await renderSVGToBitmapBlob(s,'png')); }
        for (const s of EXPORT_SPEC.ios.appStore.sizes) { zip.file(`icon_${s}.png`, await renderSVGToBitmapBlob(s,'png')); }
        packAddReadme(zip, [getText('readmeIOS')]);
        const blob = await zip.generateAsync({type:'blob'});
        const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href=url; a.download='ios-icons.zip'; document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url);
        showSuccess(getText('successPackExport'));
    } catch(e){ showError(e.message);} finally { btn.innerHTML = org; btn.disabled = false; }
}

async function exportWindowsPack() {
    if (!currentSVG) { showError(getText('errorEnterSVGFirst')); return; }
    const items = [{ name: 'ICO', count: EXPORT_SPEC.desktop.windows.formats.includes('ico') ? 1 : 0 }];
    if (!confirmExport(getText('exportWindows'), items)) return;
    const btn = document.getElementById('exportWindowsBtn'); if (!btn) return;
    const org = btn.innerHTML; btn.innerHTML = `<div class="loading-spinner"></div><span>${getText('exportingPack')}</span>`; btn.disabled = true;
    const zip = new JSZip();
    try {
        if (EXPORT_SPEC.desktop.windows.formats.includes('ico')) {
            const icoBlob = await generateIcoFromSizes(EXPORT_SPEC.desktop.windows.sizes);
            zip.file('icon.ico', icoBlob);
        }
        packAddReadme(zip, [getText('readmeWindows')]);
        const blob = await zip.generateAsync({type:'blob'});
        const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href=url; a.download='windows-icons.zip'; document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url);
        showSuccess(getText('successPackExport'));
    } catch(e){ showError(e.message);} finally { btn.innerHTML = org; btn.disabled = false; }
}

async function exportMacOSPack() {
    if (!currentSVG) { showError(getText('errorEnterSVGFirst')); return; }
    const items = [{ name: 'PNG', count: EXPORT_SPEC.desktop.macos.sizes.length }];
    if (!confirmExport(getText('exportMacOS'), items)) return;
    const btn = document.getElementById('exportMacOSBtn'); if (!btn) return;
    const org = btn.innerHTML; btn.innerHTML = `<div class="loading-spinner"></div><span>${getText('exportingPack')}</span>`; btn.disabled = true;
    const zip = new JSZip();
    try {
        // 先导出多尺寸 PNG；icns 可留到后续增强
        for (const s of EXPORT_SPEC.desktop.macos.sizes) { zip.file(`icon_${s}.png`, await renderSVGToBitmapBlob(s,'png')); }
        packAddReadme(zip, [getText('readmeMacOS')]);
        const blob = await zip.generateAsync({type:'blob'});
        const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href=url; a.download='macos-icons.zip'; document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url);
        showSuccess(getText('successPackExport'));
    } catch(e){ showError(e.message);} finally { btn.innerHTML = org; btn.disabled = false; }
}

async function exportSocialPack() {
    if (!currentSVG) { showError(getText('errorEnterSVGFirst')); return; }
    const items = [
        { name: 'PNG', count: EXPORT_SPEC.social.avatar.sizes.length + EXPORT_SPEC.social.share.sizes.length + 1 },
        { name: 'JPG', count: EXPORT_SPEC.social.avatar.sizes.length + EXPORT_SPEC.social.share.sizes.length + 1 }
    ];
    if (!confirmExport(getText('exportSocial'), items)) return;
    const btn = document.getElementById('exportSocialBtn'); if (!btn) return;
    const org = btn.innerHTML; btn.innerHTML = `<div class="loading-spinner"></div><span>${getText('exportingPack')}</span>`; btn.disabled = true;
    const zip = new JSZip();
    try {
        for (const s of EXPORT_SPEC.social.avatar.sizes) {
            zip.file(`icon_${s}.png`, await renderSVGToBitmapBlob(s,'png'));
            zip.file(`icon_${s}.jpg`, await renderSVGToBitmapBlob(s,'jpg'));
        }
        for (const s of EXPORT_SPEC.social.share.sizes) {
            zip.file(`icon_${s}.png`, await renderSVGToBitmapBlob(s,'png'));
            zip.file(`icon_${s}.jpg`, await renderSVGToBitmapBlob(s,'jpg'));
        }
        // 1200x630 额外图
        const width = 1200, height = 630; const canvas = document.createElement('canvas'); canvas.width=width; canvas.height=height; const ctx = canvas.getContext('2d'); ctx.clearRect(0,0,width,height);
        const img = new Image(); await new Promise((res,rej)=>{ img.onload=res; img.onerror=rej; const svgBlob=new Blob([currentSVG],{type:'image/svg+xml;charset=utf-8'}); img.src=URL.createObjectURL(svgBlob); });
        const size=Math.min(width,height), x=Math.floor((width-size)/2), y=Math.floor((height-size)/2); ctx.drawImage(img,x,y,size,size);
        await new Promise(r=>canvas.toBlob(b=>{ if(b) zip.file('icon_1200x630.png', b); r(); }, 'image/png'));
        await new Promise(r=>canvas.toBlob(b=>{ if(b) zip.file('icon_1200x630.jpg', b); r(); }, 'image/jpeg'));
        packAddReadme(zip, [getText('readmeSocial')]);
        const blob = await zip.generateAsync({type:'blob'});
        const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href=url; a.download='social-icons.zip'; document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url);
        showSuccess(getText('successPackExport'));
    } catch(e){ showError(e.message);} finally { btn.innerHTML = org; btn.disabled = false; }
}

// 构建可选择的导出清单（逐文件规格）
function buildExportItems() {
    const items = [];
    const add = (group, format, sizeKey, producer, fileName) => {
        const id = `${group}|${format}|${sizeKey}|${fileName}`;
        items.push({ id, group, format, sizeKey, fileName, producer });
    };

    // helpers
    const sq = (s) => `${s}x${s}`;

    // web
    // favicon pngs
    if (EXPORT_SPEC.web.favicon.formats.includes('png')) {
        EXPORT_SPEC.web.favicon.sizes.forEach(s => add('web', 'png', sq(s), () => renderSVGToBitmapBlob(s, 'png'), `icon_${s}.png`));
    }
    // favicon ico (作为单独文件)
    if (EXPORT_SPEC.web.favicon.formats.includes('ico')) {
        add('web', 'ico', 'favicon.ico', async () => generateIcoFromSizes(EXPORT_SPEC.web.favicon.sizes), 'favicon.ico');
    }
    // apple touch
    EXPORT_SPEC.web.appleTouch.sizes.forEach(s => add('web', 'png', sq(s), () => renderSVGToBitmapBlob(s, 'png'), `icon_${s}.png`));
    // pwa
    EXPORT_SPEC.web.pwa.sizes.forEach(s => add('web', 'png', sq(s), () => renderSVGToBitmapBlob(s, 'png'), `icon_${s}.png`));

    // chrome extension
    EXPORT_SPEC.chromeExtension.sizes.forEach(s => add('chrome', 'png', sq(s), () => renderSVGToBitmapBlob(s, 'png'), `icon_${s}.png`));

    // android
    EXPORT_SPEC.android.mipmap.sizes.forEach(s => {
        add('android', 'png', sq(s), () => renderSVGToBitmapBlob(s, 'png'), `icon_${s}.png`);
        if (EXPORT_SPEC.android.mipmap.formats.includes('webp')) add('android', 'webp', sq(s), () => renderSVGToBitmapBlob(s, 'webp'), `icon_${s}.webp`);
    });
    EXPORT_SPEC.android.playStore.sizes.forEach(s => add('android', 'png', sq(s), () => renderSVGToBitmapBlob(s, 'png'), `icon_${s}.png`));
    EXPORT_SPEC.android.adaptiveIcon.sizes.forEach(s => add('android', 'png', sq(s), () => renderSVGToBitmapBlob(s, 'png'), `icon_${s}.png`));

    // iOS
    EXPORT_SPEC.ios.iphone.sizes.forEach(s => add('ios', 'png', sq(s), () => renderSVGToBitmapBlob(s, 'png'), `icon_${s}.png`));
    EXPORT_SPEC.ios.ipad.sizes.forEach(s => add('ios', 'png', sq(s), () => renderSVGToBitmapBlob(s, 'png'), `icon_${s}.png`));
    EXPORT_SPEC.ios.appStore.sizes.forEach(s => add('ios', 'png', sq(s), () => renderSVGToBitmapBlob(s, 'png'), `icon_${s}.png`));

    // desktop
    if (EXPORT_SPEC.desktop.windows.formats.includes('ico')) {
        add('windows', 'ico', 'icon.ico', async () => generateIcoFromSizes(EXPORT_SPEC.desktop.windows.sizes), 'icon.ico');
    }
    EXPORT_SPEC.desktop.macos.sizes.forEach(s => add('macos', 'png', sq(s), () => renderSVGToBitmapBlob(s, 'png'), `icon_${s}.png`));

    // social
    EXPORT_SPEC.social.avatar.sizes.forEach(s => {
        add('social', 'png', sq(s), () => renderSVGToBitmapBlob(s, 'png'), `icon_${s}.png`);
        add('social', 'jpg', sq(s), () => renderSVGToBitmapBlob(s, 'jpg'), `icon_${s}.jpg`);
    });
    EXPORT_SPEC.social.share.sizes.forEach(s => {
        add('social', 'png', sq(s), () => renderSVGToBitmapBlob(s, 'png'), `icon_${s}.png`);
        add('social', 'jpg', sq(s), () => renderSVGToBitmapBlob(s, 'jpg'), `icon_${s}.jpg`);
    });
    // 1200x630 特殊项
    const produce1200x630 = async (fmt) => {
        const width = 1200, height = 630; const canvas = document.createElement('canvas'); canvas.width=width; canvas.height=height; const ctx = canvas.getContext('2d'); ctx.clearRect(0,0,width,height);
        const img = new Image(); await new Promise((res,rej)=>{ img.onload=res; img.onerror=rej; const svgBlob=new Blob([currentSVG],{type:'image/svg+xml;charset=utf-8'}); img.src=URL.createObjectURL(svgBlob); });
        const size=Math.min(width,height), x=Math.floor((width-size)/2), y=Math.floor((height-size)/2); ctx.drawImage(img,x,y,size,size);
        return await new Promise(r=>canvas.toBlob(b=>r(b), fmt==='jpg'?'image/jpeg':'image/png'));
    };
    add('social', 'png', '1200x630', () => produce1200x630('png'), 'icon_1200x630.png');
    add('social', 'jpg', '1200x630', () => produce1200x630('jpg'), 'icon_1200x630.jpg');

    return items;
}

let exportItems = [];
let selectedItemIds = new Set();

function renderExportTree() {
    const tree = document.getElementById('exportTree');
    if (!tree) return;
    exportItems = buildExportItems();
    selectedItemIds = new Set(exportItems.map(i => i.id)); // 默认全选

    const groupOrder = ['web','chrome','android','ios','windows','macos','social'];
    const groupNames = {
        web: getText('exportWeb'), chrome: getText('exportChrome'), android: getText('exportAndroid'),
        ios: getText('exportIOS'), windows: getText('exportWindows'), macos: getText('exportMacOS'), social: getText('exportSocial')
    };
    const icon = (name)=>({ web:'🌐', chrome:'🧩', android:'🤖', ios:'📱', windows:'🪟', macos:'🍎', social:'📣' }[name]||'📦');

    tree.innerHTML = '';

    // 工具条：按场景批量选择
    const toolbar = document.createElement('div');
    toolbar.className = 'group-toolbar';
    const groupTogglesHtml = groupOrder.map(g => `
        <label class="group-toggle" style="margin-right:.75rem;display:inline-flex;align-items:center;gap:.25rem;">
            <input type="checkbox" class="group-toggle-input" data-group="${g}" checked>
            <span>${groupNames[g]}</span>
        </label>
    `).join('');
    const actionsHtml = `
        <button type="button" class="btn btn-small" id="groupSelectAll" style="margin-left:1rem;">${getText('selectAll')||'全选'}</button>
        <button type="button" class="btn btn-small" id="groupClearAll" style="margin-left:.5rem;">${getText('clearAll')||'清空'}</button>
    `;
    toolbar.innerHTML = `<div style="display:flex;flex-wrap:wrap;align-items:center;gap:.25rem;margin:0 0 .5rem 0;">${groupTogglesHtml}${actionsHtml}</div>`;
    tree.appendChild(toolbar);

    const applyGroupToggle = (group, checked) => {
        const groupItems = exportItems.filter(i => i.group === group);
        groupItems.forEach(it => {
            const cb = document.getElementById(it.id);
            if (cb) { cb.checked = checked; }
            if (checked) selectedItemIds.add(it.id); else selectedItemIds.delete(it.id);
        });
        updateSelectedCount && updateSelectedCount();
    };

    toolbar.querySelectorAll('.group-toggle-input').forEach(input => {
        input.addEventListener('change', (e) => {
            const g = e.target.getAttribute('data-group');
            const checked = e.target.checked;
            applyGroupToggle(g, checked);
            // 同步组标题复选框
            const headerCb = document.getElementById(`group-${g}`);
            if (headerCb) headerCb.checked = checked;
        });
    });
    const btnAll = toolbar.querySelector('#groupSelectAll');
    if (btnAll) btnAll.addEventListener('click', () => {
        toolbar.querySelectorAll('.group-toggle-input').forEach(i => { i.checked = true; });
        groupOrder.forEach(g => applyGroupToggle(g, true));
        groupOrder.forEach(g => { const headerCb = document.getElementById(`group-${g}`); if (headerCb) headerCb.checked = true; });
    });
    const btnClear = toolbar.querySelector('#groupClearAll');
    if (btnClear) btnClear.addEventListener('click', () => {
        toolbar.querySelectorAll('.group-toggle-input').forEach(i => { i.checked = false; });
        groupOrder.forEach(g => applyGroupToggle(g, false));
        groupOrder.forEach(g => { const headerCb = document.getElementById(`group-${g}`); if (headerCb) headerCb.checked = false; });
    });

    const updateSelectedCount = () => {
        // 若页面有已选择数量展示，则更新
        const info = document.getElementById('selectedCount');
        if (info) info.textContent = (getText('selectedSizesCount')||'已选择 {n} 个尺寸').replace('{n}', String(selectedItemIds.size));
    };

    groupOrder.forEach(g => {
        const groupItems = exportItems.filter(i => i.group === g);
        if (groupItems.length === 0) return;
        const header = document.createElement('div');
        header.className = 'tree-row';
        const groupId = `group-${g}`;
        header.innerHTML = `
            <label class="tree-item">
                <input type="checkbox" id="${groupId}" checked>
                <span class="tree-icon">${icon(g)}</span>
                <span class="tree-label">${groupNames[g]}</span>
                <span class="tree-summary">${groupItems.length} files</span>
            </label>`;
        tree.appendChild(header);

        header.querySelector('input').addEventListener('change', (e) => {
            const checked = e.target.checked;
            groupItems.forEach(it => {
                const cb = document.getElementById(it.id);
                if (cb) { cb.checked = checked; }
                if (checked) selectedItemIds.add(it.id); else selectedItemIds.delete(it.id);
            });
            // 同步工具条对应场景开关
            const toggle = toolbar.querySelector(`.group-toggle-input[data-group="${g}"]`);
            if (toggle) toggle.checked = checked;
            updateSelectedCount();
        });

        groupItems.forEach(it => {
            const row = document.createElement('div');
            row.className = 'tree-row';
            row.innerHTML = `
                <label class="tree-item" style="padding-left:2rem;">
                    <input type="checkbox" id="${it.id}" checked>
                    <span class="tree-label">${it.fileName}</span>
                    <span class="tree-summary">${it.format.toUpperCase()} · ${it.sizeKey}</span>
                </label>`;
            tree.appendChild(row);
            row.querySelector('input').addEventListener('change', (e) => {
                if (e.target.checked) selectedItemIds.add(it.id); else selectedItemIds.delete(it.id);
                updateSelectedCount();
            });
        });
    });
}

async function confirmExportSelection(){
    closeExportModal();
    if (selectedItemIds.size === 0) { showInfo('未选择任何文件'); return; }

    const zip = new JSZip();
    const selected = exportItems.filter(i => selectedItemIds.has(i.id));

    try {
        // 序列化生成，避免高内存峰值
        for (const it of selected) {
            const blob = await it.producer();
            if (!blob) continue;
            const folderPath = `${it.group}/`;
            zip.file(folderPath + it.fileName, blob);
        }
        // 单一 zip 打包下载
        const content = await zip.generateAsync({type:'blob'});
        const url = URL.createObjectURL(content);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'holatiger-icons.zip';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showSuccess('已开始下载所选文件');
    } catch (e) {
        showError(e.message||'导出失败');
    }
}

// 文件选择统一入口，避免双弹窗
let isFileDialogOpen = false;
function openFileDialogOnce() {
    const fileInputEl = document.getElementById('fileInput');
    if (!fileInputEl) return;
    if (isFileDialogOpen) return;
    isFileDialogOpen = true;
    // 重置 value，确保相同文件也可触发 change
    fileInputEl.value = '';
    fileInputEl.click();
    // 兜底：3s 后自动解锁
    setTimeout(() => { isFileDialogOpen = false; }, 3000);
}

// 暴露给全局，便于 HTML inline 事件调用
window.openExportModal = openExportModal;
window.closeExportModal = closeExportModal;
window.confirmExportSelection = confirmExportSelection;
window.toggleExportSelection = toggleExportSelection;
window.openFileDialogOnce = openFileDialogOnce;

function openExportModal() {
    const modal = document.getElementById('exportModal');
    if (!modal) return;
    modal.classList.remove('hidden');
    // 打开时刷新导出树
    try { renderExportTree(); } catch (e) { /* 忽略渲染异常以免阻断打开 */ }
}

function closeExportModal() {
    const modal = document.getElementById('exportModal');
    if (!modal) return;
    modal.classList.add('hidden');
}

function toggleExportSelection(selectAll) {
    const tree = document.getElementById('exportTree');
    if (!tree) return;
    const inputs = tree.querySelectorAll('input[type="checkbox"]');
    inputs.forEach(cb => {
        cb.checked = !!selectAll;
        const id = cb.id;
        if (!id) return;
        if (cb.checked) {
            if (typeof selectedItemIds !== 'undefined' && selectedItemIds instanceof Set) selectedItemIds.add(id);
        } else {
            if (typeof selectedItemIds !== 'undefined' && selectedItemIds instanceof Set) selectedItemIds.delete(id);
        }
    });
}