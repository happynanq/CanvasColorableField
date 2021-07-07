let field = document.querySelector('.field')


fill(field)

function fill(f) {
  let rad = 10
  draw((rad + 1) * 2, (rad + 1) * 2, rad, f)
}

function countSizes(InnerSize, size) {
  let count = Math.floor(InnerSize / size)
  let padding = (InnerSize - count * size) / 2
  return { count, padding }
}

function rc(){ // random color RGB 0-255
  return (Math.random()*1000)/3.9
}

function draw(width, height, radius, field) {
  let { count: wCount, padding: wPadding } = countSizes(
    window.innerWidth,
    width
  )
  let { count: hCount, padding: hPadding } = countSizes(
    window.innerHeight,
    height
  )

  let w = wPadding 
  let h = hPadding 
  let redo = prompt("how many seconds to redo", 1)
  for (let i = 0; i < wCount; i++) {

    for (let j = 0; j < hCount; j++) {
      //-- styles
      let div = document.createElement('div')
      div.style.border = '1px solid black'
      div.style.borderRadius = '10px'
      div.style.position = 'absolute'

      //-- sizes
      div.style.width = width + 'px'
      div.style.height = height + 'px'

      //-- position
      div.style.left = w+'px'
      div.style.top = h+'px'
      
      //-- draw
      div.id = hCount - Math.random() * 100 * (Math.random() * Math.random())
      div.addEventListener('mouseover',(e)=>{
        e.currentTarget.style.backgroundColor = `rgb(${rc()},${rc()},${rc()})`
        setTimeout(()=>{
          console.log(e.target.style.backgroundColor = '#999')
          
        }, redo*1000)
      })
      field.appendChild(div)

      h+= height 
    }
    w+=width 
    h= hPadding
  }
}
