new ClipboardJS('.clipboard')
let root = document.documentElement;
const offsetX = document.getElementById('offset-x')
const offsetY = document.getElementById('offset-y')
const blurRadius = document.getElementById('blur-radius')
const colorPicker = document.getElementById('color')
const hueRotate = document.getElementById('hue-rotate')
const values = document.querySelector('.copy')
let offsetXValue = '0rem',
  offsetYValue = '0rem',
  blurRadiusValue = '0rem',
  colorPickerValue = '#000000'
hueRotateValue = '-90deg'



offsetX.addEventListener('input', (e) => {
  root.style.setProperty('--offsetX', `${e.target.value}rem`)
  offsetXValue = `${e.target.value}rem`
  updateValues()
})

offsetY.addEventListener('input', (e) => {
  root.style.setProperty('--offsetY', `${e.target.value}rem`)
  offsetYValue = `${e.target.value}rem`
  updateValues()
})

blurRadius.addEventListener('input', (e) => {
  root.style.setProperty('--blurRadius', `${e.target.value}rem`)
  blurRadiusValue = `${e.target.value}rem`
  updateValues()
})
hueRotate.addEventListener('input', (e) => {
  root.style.setProperty('--hueRotate', `${e.target.value}`)
  hueRotateValue = `${e.target.value}deg`
  updateValues()
})

colorPicker.addEventListener('change', (e) => {
  root.style.setProperty('--color', e.target.value)
  colorPickerValue = e.target.value
  console.log(colorPickerValue)
  updateValues()
})

function updateValues() {
  values.textContent = `filter: drop-shadow(${offsetXValue} ${offsetYValue} ${blurRadiusValue} ${colorPickerValue} hue-rotate(${hueRotateValue});`
}