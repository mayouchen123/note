// 利用Set数据结构不重复的特性去重
let arr = [1, 2, 3, 4, 5, 5, 5, 5, 5]
console.log([...new Set(arr)])

function dedupe (array) {
  return Array.from(new Set(array))
}

dedupe([1, 1, 2, 3]) // [1, 2, 3]
