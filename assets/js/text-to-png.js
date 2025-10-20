const textInput = document.getElementById('textInput');
const fontSizeInput = document.getElementById('fontSizeInput');
const fontColorInput = document.getElementById('fontColorInput');
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
fontColorInput.addEventListener('input', updatePreview);
fontFamilyInput.addEventListener('change', updatePreview);


document.getElementById('generateBtn').addEventListener('click', function() {
    const link = document.createElement('a');
    link.download = 'logo.png';
    link.href = previewCanvas.toDataURL('image/png');
    link.click();
});

// Initial preview update
updatePreview();