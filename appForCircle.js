let field = document.querySelector('.field')
// document.body.height = window.innerHeight
// document.body.width = window.innerWidth

// field.height = window.innerHeight
// field.width = window.innerWidth
// field.style.backgroundColor = '#b6b6b6'



fill(field)

function fill(f) {
  let rad = 10
  draw(rad + 1, rad + 1, rad, f)
}

// TODO: Сделать падинг между боками кружков, чтобы были на одинаковом расстоянии!!!
// ! ps : diameter = width of line + diameter
// TODO: высчитывать каждое положение кружка и на n секунд изменять его fill, затем убирать через setTimeout
// TODO: переделать без канваса

function countSize(radius, fieldSize) {
  let fillSize = Math.round(fieldSize / ((radius + 1) * 2))
  let padding = (fieldSize - fillSize * (radius + 1) * 2) / 2
  console.log(fillSize)
  return { fillSize, padding }
}

function draw(x, y, r, field) {
  let { fillSize: fillWidth, padding: paddingW } = countSize(
    r,
    window.innerWidth
  )
  let { fillSize: fillHeight, padding: paddingH } = countSize(
    r,
    window.innerHeight
  )
  let w = x
  let h = y
  console.log("fillWidth:",fillWidth)
  for(let i = 0; i<fillWidth +1 ; i++){
    
    for(let j = 0; j<fillHeight; j++){
      let div = document.createElement('div')
      div.style.border = '1px solid black'
      div.style.borderRadius = '10px'

      div.style.position = "absolute"
      div.style.width = r*2 +"px"
      div.style.height = r*2 +"px"
      div.style.left =   w +"px"
      div.style.top = paddingH+  h +"px"
      
      h+=y +r
      div.id = (fillWidth-(Math.random()*100)*(Math.random()*Math.random()))
      field.appendChild(div)
    }
    w+= x+r
    h=y 
    
  }
}

