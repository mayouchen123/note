'use strict'

// 对象的解构赋值
{
  let {foo, bar} = {foo: 'aaa', bar: 'bbb'}
  console.log(foo, bar) // aaa bbb

  let {baz} = {foo: 'aaa', bar: 'bbb'}
  console.log(baz) // undefined
}

{
  // 如果变量名与属性不一致,必须写成下面这样
  // foo是匹配模式,baz才是变量
  let {foo: baz} = {foo: 'aaa', bar: 'bbb'}
  console.log(baz) // aaa

  let obj = {first: 'hello', last: 'world'}
  let {first: f, last: l} = obj
  console.log(f, l) // hello world
}

{
  // 嵌套对象解构
  let obj = {
    p: [
      'hello',
      {y: 'world'}
    ]
  }

  let {p: [x, {y}]} = obj
  console.log(x, y) // hello world
}

{
  // 对象解构默认值
  let {x = 3} = {}
  console.log(x) // 3

  let {z, y = 5} = {x: 1}
  console.log(z, y) // 1 5

  let {message: msg = 'hello world'} = {}
  console.log(msg) // hello world
}

{
  // 默认值生效的条件是,对象的属性值严格等于undefined
  let {x = 3} = {x: undefined}
  console.log(x) // 3

  let {y = 3} = {y: null}
  console.log(y) // null
}

{
  // 对于已经声明的变量解构,需要非常小心
  let x;
  // {x} = {x: 1}; // SyntaxError

  // 正确的写法
  ({x} = {x: 1})
  console.log(x) // 1
}
