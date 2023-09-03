import { setupEventListener, updateCssProperty, getComputedCssProperty, updateFilterValues } from './utilOG.js';

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

// Set up event listeners for various input elements
setupEventListener(offsetX, 'input', 'offsetX', 'rem');
setupEventListener(offsetY, 'input', 'offsetY', 'rem');
setupEventListener(blurRadius, 'input', 'blurRadius', 'rem');
setupEventListener(hueRotate, 'input', 'hueRotate', 'deg');

// Set up event listener for color picker
colorPicker.addEventListener('change', (e) => {
  updateCssProperty('color', e.target.value, '');
  colorPickerValue = e.target.value;
  updateFilterValues();
});

// Initialize the values and update the display
updateCssProperty('offsetX', '0', 'rem');
updateCssProperty('offsetY', '0', 'rem');
updateCssProperty('blurRadius', '0', 'rem');
updateCssProperty('hueRotate', '-90', 'deg');
updateCssProperty('color', '#000000', '');
updateFilterValues();
