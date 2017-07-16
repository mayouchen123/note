// 私有属性不能被in运算符发现
// _age 不能被in运算符发现

const person = new Proxy({_age: 20}, {
  has (target, key) {
    if (key[0] === '_') {
      return false
    }
    return Reflect.has(target, key)
  }
})

console.log('_age' in person)
