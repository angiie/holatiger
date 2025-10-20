const textInput = document.getElementById('textInput');
const fontSizeInput = document.getElementById('fontSizeInput');
const fontColorInput = document.getElementById('fontColorInput');
  const fontColorValue = document.getElementById('fontColorValue');
const historyList = document.getElementById('historyList');
const fontFamilyInput = document.getElementById('fontFamilyInput');
const generateBtn = document.getElementById('generateBtn');
const previewCanvas = document.getElementById('previewCanvas');
const ctx = previewCanvas.getContext('2d');

function updatePreview() {
    const text = textInput.value;
    const fontSize = fontSizeInput.value;
    const fontColor = fontColorInput.value;
    const fontFamily = fontFamilyInput.value;

    // Set font for measurement
    ctx.font = `${fontSize}px ${fontFamily}`;

    // Set canvas dimensions based on text length and font size
    const textMetrics = ctx.measureText(text);
    previewCanvas.width = textMetrics.width + 40; // Add some padding
    previewCanvas.height = fontSize * 1.5; // Adjust height based on font size

    // By not filling the background, it remains transparent.

    // Set text properties
    ctx.fillStyle = fontColor;
    ctx.font = `${fontSize}px ${fontFamily}`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Draw text
    ctx.fillText(text, previewCanvas.width / 2, previewCanvas.height / 2);
}

textInput.addEventListener('input', updatePreview);
fontSizeInput.addEventListener('input', updatePreview);
fontColorInput.addEventListener('input', () => {
    fontColorValue.textContent = fontColorInput.value;
    updatePreview();
});

let history = [];

function saveToHistory() {
    const currentSettings = {
        text: textInput.value,
        fontSize: fontSizeInput.value,
        fontColor: fontColorInput.value,
        fontFamily: fontFamilyInput.value
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
        li.textContent = `${item.text} - ${item.fontSize}px - ${item.fontColor}`;
        li.addEventListener('click', () => {
            textInput.value = item.text;
            fontSizeInput.value = item.fontSize;
            fontColorInput.value = item.fontColor;
            fontFamilyInput.value = item.fontFamily;
            fontColorValue.textContent = item.fontColor;
            updatePreview();
        });
        historyList.appendChild(li);
    });
}

window.addEventListener('load', loadHistory);
fontFamilyInput.addEventListener('change', updatePreview);


document.getElementById('generateBtn').addEventListener('click', function() {
    saveToHistory();
    const link = document.createElement('a');
    link.download = 'logo.png';
    link.href = previewCanvas.toDataURL('image/png');
    link.click();
});

// Initial preview update
updatePreview();