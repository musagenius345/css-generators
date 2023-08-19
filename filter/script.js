new ClipboardJS('.clipboard');

const root = document.documentElement;
const offsetX = document.getElementById('offset-x');
const offsetY = document.getElementById('offset-y');
const blurRadius = document.getElementById('blur-radius');
const colorPicker = document.getElementById('color');
const hueRotate = document.getElementById('hue-rotate');
const values = document.querySelector('.copy');

let offsetXValue = '0rem';
let offsetYValue = '0rem';
let blurRadiusValue = '0rem';
let colorPickerValue = '#000000';
let hueRotateValue = '-90deg';

function cssProperty(element, event, customProp, units) {
  element.addEventListener(event, (e) => {
    const propValue = `${e.target.value}${units}`;
    root.style.setProperty(`--${customProp}`, propValue);
    updateValues();
  });
}

cssProperty(offsetX, 'input', 'offsetX', 'rem');
cssProperty(offsetY, 'input', 'offsetY', 'rem');
cssProperty(blurRadius, 'input', 'blurRadius', 'rem');
cssProperty(hueRotate, 'input', 'hueRotate', 'deg');

colorPicker.addEventListener('change', (e) => {
  root.style.setProperty('--color', e.target.value);
  colorPickerValue = e.target.value;
  updateValues();
});

function updateValues() {
  const currentOffsetXValue = getComputedStyle(root).getPropertyValue('--offsetX');
  const currentOffsetYValue = getComputedStyle(root).getPropertyValue('--offsetY');
  const currentBlurRadiusValue = getComputedStyle(root).getPropertyValue('--blurRadius');
  const currentHueRotateValue = getComputedStyle(root).getPropertyValue('--hueRotate');

  values.textContent = `filter: drop-shadow(${currentOffsetXValue} ${currentOffsetYValue} ${currentBlurRadiusValue} ${colorPickerValue} hue-rotate(${currentHueRotateValue}));`;
}

