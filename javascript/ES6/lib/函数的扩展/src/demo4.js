'use strict';

// 扩展运算符的应用

{
  // 合并数组
  //
  var arr1 = [1, 2];
  var arr2 = [3, 4];

  // ES5
  console.log('ES5\n' + arr1.concat(arr2) + '\n');

  // ES6
  console.log('ES6\n' + [].concat(arr1, arr2) + '\n');
  console.log([2].concat(arr2)); //[ 2, 3, 4 ]
  console.log([].concat(arr1, arr2)); // [ 1, 2, 3, 4 ]
}