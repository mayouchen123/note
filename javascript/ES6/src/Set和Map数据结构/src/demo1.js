'use strict'

// Set数据结构
{
  const set = new Set([1, 2, 3, 4, 4])
  console.log([...set]) // [1, 2, 3, 4]
  console.log(set.size)
  console.log(...set)
}

{
  // Set 实例的属性和方法
  // 属性: constructor size
  // 方法: add delete has clear
  const set = new Set()
  set.add(1).add(2).add(2)

  console.log(set.size) // 2
  console.log(set.has(1)) // true
  console.log(set.delete(1)) // true
  console.log(set.has(1)) // false
}

{
// Set结构转为数组结构
  const item = new Set([1, 2, 3, 4, 5, 5])
  console.log(Array.from(item))
}
