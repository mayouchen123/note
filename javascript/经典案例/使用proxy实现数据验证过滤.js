// 使用proxy实现数据的验证以及过滤

function validator (target, rule) {
  return new Proxy(target, {
    _rule: rule,
    set (target, pro, value) {
      if (target[pro]) {
        let va = this._rule[pro]
        if (va(value)) {
          Reflect.set(target, pro, value)
        }
      } else {
        throw new TypeError(`${pro}不存在`)
      }
    }
  })
}

let rule = {
  name (value) {
    if (typeof value === 'string') return true
    throw new TypeError('name属性必须为字符串')
  },
  age (value) {
    if (typeof value === 'number' && value > 20) return true
    throw new RangeError('age必须是数值,并且大于20')
  }
}

class Person {
  constructor (name, age) {
    this.name = name
    this.age = age
    return validator(this, rule)
  }
}

let peterInfo = Reflect.construct(Person, ['peter', 20])
console.log(peterInfo)
// peterInfo.name = 20
peterInfo.name = 'tom'
console.log(peterInfo)
peterInfo.age = 21
console.log(peterInfo)
