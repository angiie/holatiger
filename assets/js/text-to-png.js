const textInput = document.getElementById('textInput');
const fontSizeInput = document.getElementById('fontSizeInput');
const fontColorInput = document.getElementById('fontColorInput');
const fontColorValue = document.getElementById('fontColorValue');
const fontColorTextInput = document.getElementById('fontColorTextInput');
const rainbowColorInput = document.getElementById('rainbowColorInput');
const refreshRainbowBtn = document.getElementById('refreshRainbowBtn');
const historyList = document.getElementById('historyList');
const fontFamilyInput = document.getElementById('fontFamilyInput');
const generateBtn = document.getElementById('generateBtn');
const previewCanvas = document.getElementById('previewCanvas');
const ctx = previewCanvas.getContext('2d');

/**
 * 生成随机HSL颜色
 * @param {number} hue - 色相值 (0-360)
 * @param {number} saturation - 饱和度 (0-100)
 * @param {number} lightness - 亮度 (0-100)
 * @returns {string} HSL颜色字符串
 */
function generateRandomHSLColor(hue, saturation = 80, lightness = 50) {
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

/**
 * 创建随机彩虹色渐变
 * @param {CanvasRenderingContext2D} ctx - Canvas上下文
 * @param {number} width - 渐变宽度
 * @param {number} height - 渐变高度
 * @returns {CanvasGradient} 随机彩虹色渐变对象
 */
function createRainbowGradient(ctx, width, height) {
    const gradient = ctx.createLinearGradient(0, 0, width, 0);
    
    // 生成7个随机色相值，确保颜色分布均匀
    const colorCount = 7;
    const baseHues = [];
    
    // 生成随机起始色相
    const startHue = Math.random() * 360;
    
    // 生成均匀分布的色相值，但添加随机偏移
    for (let i = 0; i < colorCount; i++) {
        const baseHue = (startHue + (i * 360 / colorCount)) % 360;
        // 添加±20度的随机偏移，让颜色更自然
        const randomOffset = (Math.random() - 0.5) * 40;
        const finalHue = (baseHue + randomOffset + 360) % 360;
        baseHues.push(finalHue);
    }
    
    // 随机饱和度和亮度范围
    const saturation = 70 + Math.random() * 20; // 70-90%
    const lightness = 45 + Math.random() * 15;  // 45-60%
    
    // 创建渐变色阶
    const positions = [0, 0.17, 0.33, 0.5, 0.67, 0.83, 1];
    
    for (let i = 0; i < colorCount; i++) {
        const color = generateRandomHSLColor(baseHues[i], saturation, lightness);
        gradient.addColorStop(positions[i], color);
    }
    
    return gradient;
}

/**
 * 绘制多行文本
 * @param {CanvasRenderingContext2D} ctx - Canvas上下文
 * @param {string} text - 要绘制的文本
 * @param {number} x - X坐标
 * @param {number} y - Y坐标
 * @param {number} lineHeight - 行高
 */
function drawMultilineText(ctx, text, x, y, lineHeight) {
    const lines = text.split('\n');
    const startY = y - ((lines.length - 1) * lineHeight) / 2;
    
    lines.forEach((line, index) => {
        const lineY = startY + (index * lineHeight);
        ctx.fillText(line, x, lineY);
    });
}

/**
 * 计算多行文本的尺寸
 * @param {CanvasRenderingContext2D} ctx - Canvas上下文
 * @param {string} text - 文本内容
 * @param {number} lineHeight - 行高
 * @returns {Object} 包含width和height的对象
 */
function measureMultilineText(ctx, text, lineHeight) {
    const lines = text.split('\n');
    let maxWidth = 0;
    
    lines.forEach(line => {
        const metrics = ctx.measureText(line);
        maxWidth = Math.max(maxWidth, metrics.width);
    });
    
    const height = lines.length * lineHeight;
    return { width: maxWidth, height: height };
}

function updatePreview() {
    const text = textInput.value;
    const fontSize = parseInt(fontSizeInput.value);
    const fontColorText = fontColorTextInput && fontColorTextInput.value ? fontColorTextInput.value.trim() : '';
    const fontColor = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(fontColorText) ? fontColorText : fontColorInput.value;
    const fontFamily = fontFamilyInput.value;
    const useRainbow = rainbowColorInput.checked;

    // Set font for measurement
    ctx.font = `${fontSize}px ${fontFamily}`;
    
    // Calculate line height (typically 1.2 times font size)
    const lineHeight = fontSize * 1.2;

    // Calculate canvas dimensions based on multiline text
    const textDimensions = measureMultilineText(ctx, text, lineHeight);
    previewCanvas.width = Math.max(textDimensions.width + 40, 200); // Add padding, minimum width
    previewCanvas.height = Math.max(textDimensions.height + 40, fontSize * 1.5); // Add padding

    // Clear canvas
    ctx.clearRect(0, 0, previewCanvas.width, previewCanvas.height);

    // Set text properties
    ctx.font = `${fontSize}px ${fontFamily}`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Set fill style based on rainbow option
    if (useRainbow) {
        ctx.fillStyle = createRainbowGradient(ctx, previewCanvas.width, previewCanvas.height);
    } else {
        ctx.fillStyle = fontColor;
    }

    // Draw multiline text
    drawMultilineText(ctx, text, previewCanvas.width / 2, previewCanvas.height / 2, lineHeight);

    const sizeEl = document.getElementById('canvasSize');
    if (sizeEl) {
        sizeEl.textContent = `${previewCanvas.width} × ${previewCanvas.height}`;
    }
}

textInput.addEventListener('input', updatePreview);
fontSizeInput.addEventListener('input', updatePreview);
fontColorInput.addEventListener('input', () => {
    fontColorValue.textContent = fontColorInput.value;
    if (fontColorTextInput) fontColorTextInput.value = fontColorInput.value;
    updatePreview();
});
rainbowColorInput.addEventListener('change', updatePreview);

// 添加刷新彩虹色按钮的事件监听器
refreshRainbowBtn.addEventListener('click', () => {
    if (rainbowColorInput.checked) {
        updatePreview(); // 重新生成随机彩虹色
    }
});

let history = [];

function saveToHistory() {
    const currentSettings = {
        text: textInput.value,
        fontSize: fontSizeInput.value,
        fontColor: fontColorInput.value,
        fontFamily: fontFamilyInput.value,
        useRainbow: rainbowColorInput.checked
    };

    history.unshift(currentSettings);
    if (history.length > 10) {
        history.pop();
    }

    localStorage.setItem('textToPngHistory', JSON.stringify(history));
    loadHistory();
}

function loadHistory() {
    const savedHistory = localStorage.getItem('textToPngHistory');
    if (savedHistory) {
        history = JSON.parse(savedHistory);
    }

    historyList.innerHTML = '';
    history.forEach((item, index) => {
        const li = document.createElement('li');
        const colorText = item.useRainbow ? 'Rainbow' : item.fontColor;
        li.textContent = `${item.text} - ${item.fontSize}px - ${colorText}`;
        li.addEventListener('click', () => {
            textInput.value = item.text;
            fontSizeInput.value = item.fontSize;
            fontColorInput.value = item.fontColor;
            fontFamilyInput.value = item.fontFamily;
            rainbowColorInput.checked = item.useRainbow || false;
            fontColorValue.textContent = item.fontColor;
            updatePreview();
        });
        historyList.appendChild(li);
    });
}

window.addEventListener('load', loadHistory);
fontFamilyInput.addEventListener('change', () => {
    const f = fontFamilyInput.value;
    if (document.fonts && document.fonts.load) {
        document.fonts.load(`16px ${f}`).then(updatePreview).catch(updatePreview);
    } else {
        updatePreview();
    }
});


document.getElementById('generateBtn').addEventListener('click', function() {
    saveToHistory();
    const link = document.createElement('a');
    link.download = 'logo.png';
    link.href = previewCanvas.toDataURL('image/png');
    link.click();
});

// Initial preview update
if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(updatePreview);
} else {
    updatePreview();
}
if (fontColorTextInput) {
    fontColorTextInput.addEventListener('input', () => {
        const v = fontColorTextInput.value.trim();
        if (/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(v)) {
            fontColorValue.textContent = v;
            fontColorInput.value = v;
            updatePreview();
        }
    });
}
