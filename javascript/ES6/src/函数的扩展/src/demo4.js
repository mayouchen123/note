'use strict';

// 扩展运算符的应用
{
  // 合并数组
  //
  let arr1 = [1, 2];
  let arr2 = [3, 4];

  // ES5
  console.log(`ES5
${arr1.concat(arr2)}
`);

  // ES6
  console.log(`ES6
${[...arr1, ...arr2]}
`);
  console.log([2, ...arr2]); //[ 2, 3, 4 ]
  console.log([...arr1, ...arr2]); // [ 1, 2, 3, 4 ]
}
