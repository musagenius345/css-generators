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
function convertAndLogColor(color, colorSpace, label) {
  const convertedColor = new Color(color).to(colorSpace).toString();
  console.log(`${label}: ${convertedColor}`);
}

// Listen for changes in the color space selection
select.addEventListener('change', (e) => {
  const currentColorSpace = e.target.value;
  const backgroundColorValue = backgroundColor.value;
  const textColorValue = textColor.value;

  convertAndLogColor(backgroundColorValue, currentColorSpace, 'background-color');
  convertAndLogColor(textColorValue, currentColorSpace, 'text-color');
});

// Listen for changes in the background color input
backgroundColor.addEventListener('input', (e) => {
  const currentColorSpace = select.value;
  const backgroundColorValue = e.target.value;
  root.style.setProperty('--bg-clr', `${backgroundColorValue}`)

  convertAndLogColor(backgroundColorValue, currentColorSpace, 'background-color');
});

// Listen for changes in the text color input
textColor.addEventListener('input', (e) => {
  const currentColorSpace = select.value;
  const textColorValue = e.target.value;
  root.style.setProperty('--txt-clr', `${textColorValue}`)
  

  convertAndLogColor(textColorValue, currentColorSpace, 'text-color');
});

// Initial conversion and logging when the page loads
const initialColorSpace = select.value

const initialBackgroundColor = new Color(backgroundColor.value).to(initialColorSpace)

const initialTextColor = new Color(textColor.value).to(initialColorSpace)

//contrastValue(initialBackgroundColor, initialTextColor, 'APCA')

convertAndLogColor(initialBackgroundColor, initialColorSpace, 'background-color');
convertAndLogColor(initialTextColor, initialColorSpace, 'text-color');

/**
 * Calculate the contrast ratio
 * @param {string} backgroundColor
 * @param {string} textColor
 * @param {string} ratio
 * */
function contrastValues(backgroundColor, textColor){
  const wcag21  =document.querySelector('.WCAG21')
  const apca  =document.querySelector('.APCA')
  const weber  =document.querySelector('.Weber')
  const michelson  =document.querySelector('.Michelson')
  const ratioArray = [apca, wcag21, weber, michelson]
  ratioArray.forEach( ratio => {
    //console.log(ratio)
    ratio.textContent = backgroundColor.contrast(textColor, ratio.getAttribute('data-algoContrast'))
    //console.log(ratio.getAttribute('data-algoContrast'));
  })
}
contrastValues(initialBackgroundColor, initialTextColor)