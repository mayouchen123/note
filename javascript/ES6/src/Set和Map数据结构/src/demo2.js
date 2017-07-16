'use strict'

// Set 遍历操作
// keys() values() entries() forEach()
// keys() values() entrise() 方法返回的都是遍历器对象, 由于Set解构没有键名,只有键值,所以keys()和 values()方法的行为完全一致
{
  // keys() values() entries()
  const set = new Set(['red', 'green', 'blue'])

  for (let item of set.keys()) {
    console.log(item)
  }

  for (let item of set.values()) {
    console.log(item)
  }

  for (let item of set.entries()) {
    console.log(item)
  }
}

{
  // forEach()
  const set = new Set([1, 2, 3])
  set.forEach((value, key) => console.log(value * value))
}
