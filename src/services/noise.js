var noise = (options) => {
  if ( !!!document.createElement('canvas').getContext ) {
    return false
  }

  // Options
  options = options ? options : {}
  var opacity = options.opacity ? options.opacity : 1 
  var bright = options.bright ? options.bright : 255
  var width = options.width ? options.width : 500
  var height = options.height ? options.height : 500

  var canvas = document.createElement("canvas")
  var ctx = canvas.getContext('2d')
  var x = 0
  var y = 0
  var color = 0

  canvas.width = width 
  canvas.height = height 

  for ( x = 0; x < canvas.width; x += 1 ) {
    for ( y = 0; y < canvas.height; y += 1 ) {
        color = Math.floor(Math.random() * bright)

        ctx.fillStyle = "rgba(" + color + "," + color + "," + color + "," + opacity + ")"
        ctx.fillRect(x, y, 1, 1)
    }
  }

  return "url(" + canvas.toDataURL("image/png") + ")"
}

export default noise