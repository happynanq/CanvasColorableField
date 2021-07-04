let canvas = document.getElementById('cnv')
let ctx = canvas.getContext('2d')

canvas.height = window.innerHeight
canvas.width = window.innerWidth
canvas.style.backgroundColor = '#b6b6b6'
document.body.style.overflow = 'hidden'

canvas.addEventListener("mousemove", e=>{
   
})


fill(ctx)

function fill(ctx) {
  let rad = 10
  draw(rad + 1, rad + 1, rad, ctx)
}

// TODO: Сделать падинг между боками кружков, чтобы были на одинаковом расстоянии!!!
// ! ps : diameter = width of line + diameter
// TODO: высчитывать каждое положение кружка и на n секунд изменять его fill, затем убирать через setTimeout

function countSize(radius, fieldSize) {
  let fillSize = Math.round(fieldSize / ((radius + 1) * 2))
  let padding = (fieldSize - fillSize * (radius + 1) * 2) / 2
  return { fillSize, padding }
}
function findCoordinateOfCircle(){

}
function reDraw(){

}

function draw(x, y, r, ctx) {
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
  for (let i = 0; i < fillWidth; i++) {
    ctx.beginPath()

    for (let k = 0; k < fillHeight; k++) {
      ctx.beginPath()

      ctx.arc(w + paddingW, h + paddingH, r, 0, 2 * Math.PI)
      h += y + y

      ctx.stroke()
    }
    h = y
    w += x * 2
  }
}
