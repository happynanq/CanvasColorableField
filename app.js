let canvas = document.getElementById('cnv')
let ctx = canvas.getContext('2d')

canvas.height = window.innerHeight
canvas.width = window.innerWidth
canvas.style.backgroundColor = '#b6b6b6'
document.body.style.overflow = 'hidden'
fill(ctx)

function fill(ctx) {
  let rad = 10
  draw(rad+1, rad+1, rad, ctx, 1)
}

// TODO: Сделать падинг между боками кружков, чтобы были на одинаковом расстоянии!!!
// ! ps : diameter = width of line + diameter


function countSize(radius, wORh ){
  let fillSize = Math.round(wORh/((radius+1)*2))
  let padding = (wORh - (fillSize)*(radius+1)*2)/2
  return {fillSize, padding}
}

function draw(x, y, r, ctx, widthLine) {
  // let fillWidth = Math.round(window.innerWidth/((r+1)*2))
  // let fillHeight = Math.round(window.innerHeight/((r+1)*2)) // -1
  // console.log(fillHeight)
  // let padding = (window.innerWidth - (fillWidth)*(r+1)*2)/2
  // console.log(padding)
  let { fillSize:fillWidth, padding:paddingW} = countSize(r, window.innerWidth)
  let { fillSize:fillHeight, padding:paddingH} = countSize(r, window.innerHeight)
  console.log(paddingW)
  let w = x 
  let h = y 
  for(let i = 0; i <fillWidth; i++){
    ctx.beginPath()
    ctx.lineWidth=widthLine
    ctx.arc(w+paddingW, y, r, 0, 2 * Math.PI)
    ctx.stroke()
    // for(let k = 0; k<i; k++){
    //   ctx.beginPath()
    //   h+=y+y
    //   console.log(h)

    //   ctx.arc(w+padding, h, r, 0, 2 * Math.PI)
    //   // console.log(k)
    // }
    ctx.stroke()
    w+=x*2
  } 
  
}


