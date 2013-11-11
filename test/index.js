var test = require("tape")

var requestAnimationFrame2 = require("../index.js")

test("requestAnimationFrame2 is a function", function (assert) {
    assert.equal(typeof requestAnimationFrame2, "function")
    assert.end()
})

test("request does thing", function (assert) {
    var flag = false
    requestAnimationFrame2(function () {
      flag = true
    })
    
    setTimeout(function () {
      assert.equal(flag, true)
      assert.end()
    })
})