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
        
        // 面包屑导航
        breadcrumb: {
            home: '首页',
            svgStudio: 'SVG Studio Pro'
        },
        
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
        chromeIconPack: 'Chrome 图标包',
        preview: '预览',
        
        // 状态文本
        realtimeUpdate: '实时更新',
        waitingInput: '等待输入',
        invalidSize: '尺寸无效',
        formatError: '格式错误',
        updated: '已更新',
        generating: '生成中...',
        packing: '打包中...',
        batchGenerating: '批量生成中...',
        
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

        
        // 粘贴提示
        pasteReady: '准备粘贴 SVG 文件...',
        pasteFileOrCode: '粘贴 SVG 文件或代码...',
        pastePrompt: '请粘贴 SVG 文件或代码'
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
        
        // 面包屑導航
        breadcrumb: {
            home: '首頁',
            svgStudio: 'SVG Studio Pro'
        },

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
        chromeIconPack: 'Chrome 圖示包',
        preview: '預覽',

        // 狀態訊息
        realtimeUpdate: '即時更新',
        waitingInput: '等待輸入',
        invalidSize: '尺寸無效',
        formatError: '格式錯誤',
        updated: '已更新',
        generating: '生成中...',
        packing: '打包中...',
        batchGenerating: '批次生成中...',

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


        // 貼上功能
        pasteReady: '準備貼上 SVG 檔案...',
        pasteFileOrCode: '貼上 SVG 檔案或程式碼...',
        pastePrompt: '請貼上 SVG 檔案或程式碼'
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
        
        // Breadcrumb navigation
        breadcrumb: {
            home: 'Home',
            svgStudio: 'SVG Studio Pro'
        },
        
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
        chromeIconPack: 'Chrome Icon Pack',
        preview: 'Preview',
        
        // Status text
        realtimeUpdate: 'Real-time update',
        waitingInput: 'Waiting for input',
        invalidSize: 'Invalid size',
        formatError: 'Format error',
        updated: 'Updated',
        generating: 'Generating...',
        packing: 'Packing...',
        batchGenerating: 'Batch generating...',
        
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

        
        // Paste prompts
        pasteReady: 'Ready to paste SVG file...',
        pasteFileOrCode: 'Paste SVG file or code...',
        pastePrompt: 'Please paste SVG file or code'
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
    const width = parseInt(document.getElementById('widthInput').value);
    const height = parseInt(document.getElementById('heightInput').value);

    if (!svgInput) {
        updatePreviewStatus(getText('waitingInput'), 'text-gray-400');
        return;
    }

    if (!width || !height || width <= 0 || height <= 0) {
        updatePreviewStatus(getText('invalidSize'), 'text-red-500');
        return;
    }

    try {
        // 验证 SVG 代码
        const parser = new DOMParser();
        const doc = parser.parseFromString(svgInput, 'image/svg+xml');
        const parserError = doc.querySelector('parsererror');

        if (parserError) {
            throw new Error(getText('svgFormatError'));
        }

        // 创建新的 SVG 元素并设置尺寸
        const svgElement = doc.documentElement;
        svgElement.setAttribute('width', width);
        svgElement.setAttribute('height', height);

        // 更新预览
        const previewContainer = document.getElementById('previewContent');
        if (!previewContainer) {
            console.error('Preview container element not found');
            return;
        }
        
        previewContainer.innerHTML = '';
        previewContainer.appendChild(svgElement.cloneNode(true));
        previewContainer.parentElement.classList.add('has-content');

        // 保存当前 SVG 用于下载
        currentSVG = new XMLSerializer().serializeToString(svgElement);

        // 启用下载按钮
        document.getElementById('downloadBtn').disabled = false;
        document.getElementById('icoBtn').disabled = false;
        document.getElementById('chromePackBtn').disabled = false;
        
        // 更新批量导出按钮状态
        updateExportButtonsState();

        // 更新布局
        updateLayout();

        // 更新状态
        updatePreviewStatus(getText('updated'), 'text-green-500');

    } catch (error) {
        updatePreviewStatus(getText('formatError'), 'text-red-500');
        console.error('SVG parsing error:', error.message);
    }
}

// PNG 下载功能
function downloadPNG() {
    if (!currentSVG) {
        console.error('请先输入 SVG 代码');
        return;
    }

    const width = parseInt(document.getElementById('widthInput').value);
    const height = parseInt(document.getElementById('heightInput').value);

    // 显示加载状态
    const downloadBtn = document.getElementById('downloadBtn');
    if (!downloadBtn) {
        console.error('Download button element not found');
        return;
    }
    const originalText = downloadBtn.innerHTML;
    downloadBtn.innerHTML = '<div class="loading-spinner"></div><span>' + getText('generating') + '</span>';
    downloadBtn.disabled = true;

    // 创建 canvas
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    // 使用透明背景
    ctx.clearRect(0, 0, width, height);

    // 创建 Image 对象
    const img = new Image();

    img.onload = function () {
        try {
            // 绘制到 canvas
            ctx.drawImage(img, 0, 0, width, height);

            // 下载
            canvas.toBlob(function (blob) {
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `svg-export-${width}x${height}.png`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);

                showSuccess(`PNG 文件已下载 (${width}×${height})`);

                // 恢复按钮状态
                downloadBtn.innerHTML = originalText;
                downloadBtn.disabled = false;
            }, 'image/png');
        } catch (error) {
            console.error('生成 PNG 时出错');
            downloadBtn.innerHTML = originalText;
            downloadBtn.disabled = false;
        }
    };

    img.onerror = function () {
                    console.error('转换为 PNG 时出错，请检查 SVG 代码');
        downloadBtn.innerHTML = originalText;
        downloadBtn.disabled = false;
    };

    // 将 SVG 转换为 data URL
    const svgBlob = new Blob([currentSVG], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);
    img.src = url;
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
    if (!chromePackBtn) {
        console.error('Chrome pack button element not found');
        return;
    }
    const originalText = chromePackBtn.innerHTML;
    chromePackBtn.innerHTML = '<div class="loading-spinner"></div><span>打包中...</span>';
    chromePackBtn.disabled = true;

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
                            chromePackBtn.innerHTML = originalText;
                            chromePackBtn.disabled = false;
                        })
                        .catch(function (error) {
                            showError('生成 ZIP 文件时出错');
                            chromePackBtn.innerHTML = originalText;
                            chromePackBtn.disabled = false;
                        });
                }
            } else {
                showError(`生成 ${size}×${size} 图标时出错`);
                chromePackBtn.innerHTML = originalText;
                chromePackBtn.disabled = false;
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
    // 移除所有按钮的active状态
    document.querySelectorAll('.preset-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // 添加当前按钮的active状态
    buttonElement.classList.add('active');
    
    // 设置尺寸输入框的值
    document.getElementById('widthInput').value = width;
    document.getElementById('heightInput').value = height;
    
    // 如果有SVG内容，立即更新预览
    if (currentSVG) {
        updatePreview(false);
    }
    
    // 更新布局
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
}

// ICO 文件下载功能
function downloadICO() {
    if (!currentSVG) {
        showError('请先输入 SVG 代码并预览');
        return;
    }

    // 显示加载状态
    const icoBtn = document.getElementById('icoBtn');
    if (!icoBtn) {
        console.error('ICO button element not found');
        return;
    }
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
        document.getElementById('downloadBtn').disabled = true;
        document.getElementById('icoBtn').disabled = true;
        document.getElementById('chromePackBtn').disabled = true;
        document.getElementById('batchExportBtn').disabled = true;
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
function switchTab(tabName) {
    // 移除所有tab按钮的active状态
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // 隐藏所有tab内容
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // 激活当前tab按钮
    event.target.classList.add('active');
    
    // 显示对应的tab内容
    const targetTab = document.getElementById(tabName + 'Tab');
    if (targetTab) {
        targetTab.classList.add('active');
    }
}

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

    // 文件输入处理
    document.getElementById('fileInput').addEventListener('change', function (e) {
        const file = e.target.files[0];
        if (file) {
            handleFileUpload(file);
        }
    });

    // 上传区域点击事件
    document.getElementById('uploadArea').addEventListener('click', function () {
        document.getElementById('fileInput').click();
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

    // 键盘快捷键
    document.addEventListener('keydown', function (e) {
        if (e.ctrlKey || e.metaKey) {
            if (e.key === 'Enter') {
                e.preventDefault();
                updatePreview();
            } else if (e.key === 's') {
                e.preventDefault();
                if (!document.getElementById('downloadBtn').disabled) {
                    downloadPNG();
                }
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
        showSuccess(`语言已切换为: ${langNames[langCode]}`);
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