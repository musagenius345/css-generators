 import {updateFilterValues} from './filter/script.js'
 /**
 * Updates a CSS property value.
 * @function
 * @param {HTMLElement} element - The HTML element.
 * @param {string} customProp - The custom property name.
 * @param {string} value - The new value for the property.
 * @param {string} units - The units for the value.
 */
const root = document.documentElement;
 
 
export function updateCssProperty(element, customProp, value, units) {
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
export function setupEventListener(element, event, customProp, units) {
  element.addEventListener(event, (e) => {
    updateCssProperty(root, customProp, e.target.value, units);
    updateFilterValues();
  });
}


/**
 * Retrieves the computed value of a custom CSS property.
 * @function
 * @param {string} customProp - The custom property name.
 * @returns {string} The computed value of the property.
 */
export function getComputedCssProperty(customProp) {
  return getComputedStyle(root).getPropertyValue(`--${customProp}`);
}