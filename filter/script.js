/**
 * Initialize ClipboardJS for clipboard functionality.
 */
new ClipboardJS('.clipboard');

/**
 * The root element of the document.
 * @type {HTMLElement}
 */
const root = document.documentElement;

/**
 * Element representing the offset-x input.
 * @type {HTMLElement}
 */
const offsetX = document.getElementById('offset-x');

/**
 * Element representing the offset-y input.
 * @type {HTMLElement}
 */
const offsetY = document.getElementById('offset-y');

/**
 * Element representing the blur-radius input.
 * @type {HTMLElement}
 */
const blurRadius = document.getElementById('blur-radius');

/**
 * Element representing the color picker input.
 * @type {HTMLElement}
 */
const colorPicker = document.getElementById('color');

/**
 * Element representing the hue-rotate input.
 * @type {HTMLElement}
 */
const hueRotate = document.getElementById('hue-rotate');

/**
 * Element representing the copy section.
 * @type {HTMLElement}
 */
const values = document.querySelector('.copy');

/**
 * The current value of the color picker.
 * @type {string}
 */
let colorPickerValue = '#000000';

/**
 * Updates a CSS property value.
 * @function
 * @param {HTMLElement} element - The HTML element.
 * @param {string} customProp - The custom property name.
 * @param {string} value - The new value for the property.
 * @param {string} units - The units for the value.
 */
function updateCssProperty(element, customProp, value, units) {
  root.style.setProperty(`--${customProp}`, `${value}${units}`);
}

/**
 * Sets up an event listener to update CSS property values.
 * @function
 * @param {HTMLElement} element - The HTML element.
 * @param {string} event - The event to listen for.
 * @param {string} customProp - The custom property name.
 * @param {string} units - The units for the value.
 */
function setupEventListener(element, event, customProp, units) {
  element.addEventListener(event, (e) => {
    updateCssProperty(root, customProp, e.target.value, units);
    updateValues();
  });
}

/**
 * Retrieves the computed value of a custom CSS property.
 * @function
 * @param {string} customProp - The custom property name.
 * @returns {string} The computed value of the property.
 */
function getComputedCssProperty(customProp) {
  return getComputedStyle(root).getPropertyValue(`--${customProp}`);
}

// Set up event listeners for various input elements
setupEventListener(offsetX, 'input', 'offsetX', 'rem');
setupEventListener(offsetY, 'input', 'offsetY', 'rem');
setupEventListener(blurRadius, 'input', 'blurRadius', 'rem');
setupEventListener(hueRotate, 'input', 'hueRotate', 'deg');

// Set up event listener for color picker
colorPicker.addEventListener('change', (e) => {
  updateCssProperty(root, 'color', e.target.value, '');
  colorPickerValue = e.target.value;
  updateValues();
});

/**
 * Updates the displayed CSS values.
 * @function
 */
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
