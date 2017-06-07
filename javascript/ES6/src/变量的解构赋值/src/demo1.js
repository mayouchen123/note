'use strict';

// 数组嵌套解构
{
let [foo, [[bar], baz]] = [1, [[2], 3]];
console.log(foo, bar, baz); // 1 2 3

let [,,third] = ['foo', 'bar', 'baz'];
console.log(third); // baz

let [x, , y] = [1, 2, 3];
console.log(x, y); // 1 3

let [head, ...tail] = [1, 2, 3, 4];
console.log(head); // 1
console.log(tail); // [2, 3, 4]
}

// 不完全解构,解构依然可以工作
{
let [x, y] = [1, 2, 3];
console.log(x, y); //1 2

let [a, [b], d] = [1, [2, 3], 4];
console.log(a, b, d); // 1 2 4
}

//解构赋值允许指定默认值
{
  let [foo = true] = [];
  console.log(foo); // true

  var [x, y = 'b'] = ['a'];
  console.log(x, y); //a b

  var [z, w = 'c'] = ['z', undefined];
  console.log(z, w); // z c
}

{
  var [x = 1] = [undefined];
  console.log(x); // 1

  var [y = 1] =[null];
  console.log(y); // null
}
