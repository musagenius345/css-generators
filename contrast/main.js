import Color from '../node_modules/colorjs.io/dist/color.js';
const root = document.documentElement;
 
const backgroundColor = document.getElementById('background-color');
const textColor = document.getElementById('text-color');
const select = document.querySelector('select');

/**
 * Convert a color value to the selected color space and log the result.
 * @param {string} color - The color value to be converted.
 * @param {string} colorSpace - The selected color space (e.g., "SRGB", "HSL", etc.).
 * @param {string} label - The label for the color value (e.g., "background-color", "text-color").
 */
function convertColor(color, colorSpace, label) {
  const convertedColor = new Color(color).to(colorSpace).toString();
  console.log(`${label}: ${convertedColor}`);
}

/**
 * Calculate and update the contrast values
 */
function updateContrastValues() {
  const currentColorSpace = select.value;
  const backgroundColorValue = backgroundColor.value;
  const textColorValue = textColor.value;

  const convertedBgColor = new Color(backgroundColorValue).to(currentColorSpace);
  const convertedTextColor = new Color(textColorValue).to(currentColorSpace);

  convertColor(backgroundColorValue, currentColorSpace, 'background-color');
  convertColor(textColorValue, currentColorSpace, 'text-color');
  contrastValues(convertedBgColor, convertedTextColor);
}

// Listen for changes in the color space selection
select.addEventListener('change', updateContrastValues);

// Listen for changes in the background color input
backgroundColor.addEventListener('input', () => {
  root.style.setProperty('--bg-clr', `${backgroundColor.value}`);
  updateContrastValues();
});

// Listen for changes in the text color input
textColor.addEventListener('input', () => {
  root.style.setProperty('--txt-clr', `${textColor.value}`);
  updateContrastValues();
});

// Initial conversion and logging when the page loads
const initialColorSpace = select.value;
const initialBackgroundColor = new Color(backgroundColor.value).to(initialColorSpace);
const initialTextColor = new Color(textColor.value).to(initialColorSpace);

convertColor(initialBackgroundColor, initialColorSpace, 'background-color');
convertColor(initialTextColor, initialColorSpace, 'text-color');
contrastValues(initialBackgroundColor, initialTextColor);

/**
 * Calculate the contrast ratio
 * @param {Color} backgroundColor
 * @param {Color} textColor
 * @param {string} ratio
 */
function contrastValues(backgroundColor, textColor){
  const ratioArray = ['APCA', 'WCAG21', 'Weber', 'Michelson'];

  ratioArray.forEach(ratio => {
    const ratioElement = document.querySelector(`.${ratio}`);
    const algo = ratioElement.getAttribute('data-algoContrast');
    let contrastValue = backgroundColor.contrast(textColor, algo).toFixed(algo === 'Michelson' ? 4 : 0);
    ratioElement.textContent = contrastValue;
  });
}
