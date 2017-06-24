'use strict';

{
  var _console, _console2;

  // 1 2 3 4 5

  // 该运算符主要用于函数调用

  var add = function add(x, y) {
    return x + y;
  };

  // 扩展运算符 (spread)是三个 ... , 它好比rest参数的逆运算,将一个数组转为用逗号分隔的参数序列
  (_console = console).log.apply(_console, [1, 2, 3]); // 1 2 3

  (_console2 = console).log.apply(_console2, [1].concat([2, 3, 4], [5]));
  var numbers = [2, 6];
  console.log(add.apply(undefined, numbers));
}