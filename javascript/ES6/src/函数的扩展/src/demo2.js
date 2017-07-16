'use strict'

{
  // 函数参数的默认值 下面两种写法的区别
  // 写法一
  function m1 ({x = 0, y = 0} = {}) {
    return [x, y]
  }
  console.log(m1())

  // 写法二
  function m2 ({x, y} = { x: 0, y: 0 }) {
    return [x, y]
  }
  console.log(m2())
}
