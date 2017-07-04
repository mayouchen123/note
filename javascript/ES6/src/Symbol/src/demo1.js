'use strict';

{
  let s = Symbol();
  console.log(typeof s);
  console.log(s instanceof Symbol);
}

{
  // Symbol 函数可以接受一个字符串作为参数
  let s1 = Symbol('foo');
  let s2 = Symbol('bar');

  console.log(s1, s2);

  console.log(s1.toString());
  console.log(s2.toString());
}
