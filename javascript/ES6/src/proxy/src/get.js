// Proxy中的get()操作
const peterInfo = {
  name: 'peter',
  age: 20
}

const proxy = new Proxy(peterInfo, {
  get (target, property) {
    if (property in target) {
      return target[property]
    } else {
      throw new ReferenceError('Property "' + property + '" does not exist.')
    }
  }
})

// console.log(proxy.name)
// console.log(proxy.age)
// console.log(proxy.aa)

// get()方法可以继承
let proto = new Proxy({}, {
  get (target, propertyKey, receiver) {
    console.log(`GET: ${propertyKey}`)
    return target[propertyKey]
  }
})

let obj = Object.create(proto)
// obj.name = 'jack'
// obj.name

// 使用get拦截，实现数组读取负数的索引。
let createArr = function (...rest) {
  return new Proxy(rest, {
    get (target, proKey) {
      let index = Number(proKey)
      if (index < 0) {
        proKey = String(target.length + index)
      }
      return Reflect.get(target, proKey)
    }
  })
}

let arr = createArr('a', 'b', 'c')
console.log(arr[1])
console.log(arr[-1])
