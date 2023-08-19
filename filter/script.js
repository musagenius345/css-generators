new ClipboardJS('.clipboard')
const root = document.documentElement;
const offsetX = document.getElementById('offset-x');
const offsetY = document.getElementById('offset-y');
const blurRadius = document.getElementById('blur-radius');
const colorPicker = document.getElementById('color');
const hueRotate = document.getElementById('hue-rotate');
const values = document.querySelector('.copy');


// let offsetXValue = '0rem';
// let offsetYValue = '0rem';
// let blurRadiusValue = '0rem';
// let hueRotateValue = '-90deg';
let colorPickerValue = '#000000';

// Define a reusable function for updating a CSS property
function updateCssProperty(element, customProp, value, units) {
  root.style.setProperty(`--${customProp}`, `${value}${units}`);
}

// Define a reusable function for setting up event listeners
function setupEventListener(element, event, customProp, units) {
  element.addEventListener(event, (e) => {
    updateCssProperty(root, customProp, e.target.value, units);
    updateValues();
  });
}

// Define a function to retrieve computed custom property values
/**
 * Returns the computed CSS property.
 * @function
 * @param {string} customProp - custom property name
 */
function getComputedCssProperty(customProp) {
  return getComputedStyle(root).getPropertyValue(`--${customProp}`);
}

// Setup event listeners for various input elements
setupEventListener(offsetX, 'input', 'offsetX', 'rem');
setupEventListener(offsetY, 'input', 'offsetY', 'rem');
setupEventListener(blurRadius, 'input', 'blurRadius', 'rem');
setupEventListener(hueRotate, 'input', 'hueRotate', 'deg');

// Setup event listener for color picker
colorPicker.addEventListener('change', (e) => {
  updateCssProperty(root, 'color', e.target.value, '');
  colorPickerValue = e.target.value;
  updateValues();
});

// Define a function to update the displayed CSS values
function updateValues() {
  const currentOffsetXValue = getComputedCssProperty('offsetX');
  const currentOffsetYValue = getComputedCssProperty('offsetY');
  const currentBlurRadiusValue = getComputedCssProperty('blurRadius');
  const currentHueRotateValue = getComputedCssProperty('hueRotate');

  values.textContent = `filter: drop-shadow(${currentOffsetXValue} ${currentOffsetYValue} ${currentBlurRadiusValue} ${colorPickerValue} hue-rotate(${currentHueRotateValue}));`;
}

// Initialize the values and update the display
updateCssProperty(root, 'offsetX', '0', 'rem');
updateCssProperty(root, 'offsetY', '0', 'rem');
updateCssProperty(root, 'blurRadius', '0', 'rem');
updateCssProperty(root, 'hueRotate', '-90', 'deg');
updateCssProperty(root, 'color', '#000000', '');
updateValues();
