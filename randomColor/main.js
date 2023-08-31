import Color from "../node_modules/colorjs.io/dist/color.js";
//import Color from 'colorjs.io'
import {
  getRandomIntInclusive,
  getRandomArbitrary,
  getComputedCssProperty,
  updateCssProperty,
} from "../util.js";

// DOM elements
const click = document.querySelector(".click");
const container = document.querySelector(".container")


let backgroundColor = new Color(updateComputedProperty())

function updateComputedProperty() {
  let containerBackgroundColor = window
    .getComputedStyle(container)
    .getPropertyValue('background-color')
  return containerBackgroundColor
}


function checkColor(newColor) {
  let newcontainer = document.createElement("p")

  const lchValue = (i) => newColor.to("lch").coords[i].toFixed(2);
  container.appendChild(newcontainer);
  newcontainer.textContent = `lch(${lchValue(0)} ${lchValue(1)} ${lchValue(2)})`



  updateComputedProperty()
}
//checkColor()

click.addEventListener("click", () => {
  const newColor = backgroundColor.to("lch").set({
    "lch.l": getRandomIntInclusive(0, 100),
    "lch.c": (c) => c * getRandomArbitrary(0, 1), 
    "lch.h": getRandomArbitrary(0, 360), 
  });

  updateCssProperty("bgColor", newColor);
  checkColor(newColor);
  console.log(newColor.toString({precision: 4}));
});