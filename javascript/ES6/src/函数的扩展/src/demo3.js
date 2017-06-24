'use strict';

{
  // 扩展运算符 (spread)是三个 ... , 它好比rest参数的逆运算,将一个数组转为用逗号分隔的参数序列
  console.log(...[1, 2, 3]); // 1 2 3

  console.log(1, ...[2, 3, 4], 5); // 1 2 3 4 5

  // 该运算符主要用于函数调用

  function add(x, y){
    return x + y;
  }
  let numbers = [2, 6];
  console.log(add(...numbers));

}
