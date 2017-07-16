// set方法用来拦截某个属性的赋值操作
const person = new Proxy({}, {
  set (target, pro, value) {
    if (pro === 'age') {
      if (!Number.isInteger(value)) {
        throw new TypeError('age必须是整数')
      }
      if (value > 200) {
        throw new RangeError('age不能大于200')
      }
    }
    return Reflect.set(target, pro, value)
  }
})

// person.name = 'peter'
// console.log(person)
// person.age = 10
// person.age = 201
