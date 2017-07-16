'use strict'

{
  // 函数参数解构赋值
  function add ([x, y]) {
    return x + y
  }

  console.log(add([1, 2])) // 3s
}

{
  // 函数参数解构默认值
  function move ({x = 0, y = 0} = {}) {
    return [x, y]
  }

  console.log(move({x: 3, y: 8})) // [3, 8]
  console.log(move({x: 3})) // [3, 0]
  console.log(move({})) // [0, 0]
  console.log(move()) // [0, 0]
}
