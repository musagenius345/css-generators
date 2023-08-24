  import Color from './node_modules/colorjs.io/dist/color.js'
  const click = document.querySelector('.click')
  import { getRandomIntInclusive, getRandomArbitrary, getComputedCssProperty, updateCssProperty } from './util.js'
  const container = document.querySelector('.container')
  let color = new Color("slategray").to("lch");
  const allComputedStyles = container.computedStyleMap()
  let cssCustomValue = getComputedCssProperty('bgColor')
  let libColor = new Color(`${cssCustomValue}`)

  function checkColor() {
    for (const [prop, val] of allComputedStyles) {

      if (prop === "background-color") {
        let bgColor = new Color(val[0].toString())
        // bgColor.lch.l = 80
        let newcontainer = document.createElement('p')
        const lchValue = (i) => bgColor.to('lch').coords[i]
        container.appendChild(newcontainer)
        newcontainer.textContent = `lch(${lchValue(0)} ${lchValue(1).toFixed(2)} ${lchValue(2)})`
        //console.log(`lch(${lchValue(0)} ${lchValue(1).toFixed(2)}, ${lchValue(2)})`);
        console.log(getComputedCssProperty('bgColor'));
      }
    }
  }
  //checkColor()


  click.addEventListener('click', () => {
    const newColor = libColor.to("lch").set({
      "lch.l": getRandomIntInclusive(0, 100), // set lightness to 80                                                    
      "lch.c": c => c * getRandomArbitrary(1, 10), // Relative manipulation
      "lch.h": getRandomArbitrary(0, 360) // Relative manipulation
    })


    updateCssProperty('bgColor', newColor)
    checkColor()

  })