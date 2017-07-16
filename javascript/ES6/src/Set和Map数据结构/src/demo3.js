'use strict'

// 遍历应用
{
  const set = new Set(['red', 'green', 'blue'])
  let arr = [...set]
  console.log(arr)
}

{
  // 扩展运算符和Set结构结合,可以去除数组的重复成员
  let arr = [1, 2, 3, 3, 4]
  let unique = [...new Set(arr)]
  console.log(unique)
}
