# request-animation-frame2
Request animation frame shim because IE.
## Example
```js
var requestAnimationFrame2 = require("request-animation-frame2")

requestAnimationFrame2(function loop() {
  console.log("SPAM")
  
  requestAnimationFrame2(loop)
})


// TODO. Show example

```

## Installation

`npm install request-animation-frame2`

## Contributors

 - Raynos

## MIT Licenced
