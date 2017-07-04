'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

{
  var s = Symbol();
  console.log(typeof s === 'undefined' ? 'undefined' : _typeof(s));
  console.log(s instanceof Symbol);
}

{
  // Symbol 函数可以接受一个字符串作为参数
  var s1 = Symbol('foo');
  var s2 = Symbol('bar');

  console.log(s1, s2);

  console.log(s1.toString());
  console.log(s2.toString());
}