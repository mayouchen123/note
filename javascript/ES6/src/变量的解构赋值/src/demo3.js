'use strict'

{
  // 字符串解构赋值
  let [a, b, c, d, e] = 'hello'
  console.log(a, b, c, d, e) // h e l l o
}

{
  let {length: len} = 'hello'
  console.log(len) // 5
}
