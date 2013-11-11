var requestAnimationFrame2 = require("request-animation-frame2")

requestAnimationFrame2(function loop() {
  console.log("SPAM")
  
  requestAnimationFrame2(loop)
})


// TODO. Show example
