'use strict';

// 对象的解构赋值
{
  var {foo, bar} = {foo: 'aaa', bar: 'bbb'};
  console.log(foo,bar); // aaa bbb

  let {baz} = {foo: 'aaa', bar: 'bbb'};
  console.log(baz); // undefined
}

{
  //如果变量名与属性不一致,必须写成下面这样
  var {foo: baz} = {foo: 'aaa', bar: 'bbb'};
  console.log(baz); // aaa

  let obj = {first: 'hello', last: 'world'};
  let {first: f, last: l} = obj;
  console.log(f, l); // hello world
}

{
  //嵌套对象解构
  var obj = {
    p: [
      'hello',
      {y: 'world'}
    ]
  };

  var {p:[x, {y}]} = obj;
  console.log(x, y); // hello world
}

{
  // 对象解构默认值
  var {x = 3} = {};
  console.log(x); // 3

  var {x, y = 5} = {x: 1};
  console.log(x, y); // 1 5

  var {message: msg = "hello world"} = {};
  console.log(msg); // hello world
}

{
  // 默认值生效的条件是,对象的属性值严格等于undefined
  var {x = 3} = {x: undefined};
  console.log(x); // 3

  var {y = 3} = {y: null};
  console.log(y); // null
}

{
  // 对于已经声明的变量解构,需要非常小心
  var x;
  //{x} = {x: 1}; // SyntaxError

  // 正确的写法
  ({x} = {x:1});
  console.log(x); // 1
}
