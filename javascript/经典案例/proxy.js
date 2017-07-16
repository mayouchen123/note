// 不能读取写入私有属性
// 不能删除私有属性

let peterInfo = {name: 'peter', age: 20, _tel: 110}
let handler = {
  get (target, pro) {
    invariant(pro, 'get')
    return Reflect.get(target, pro)
  },
  set (target, pro, value) {
    invariant(pro, 'set')
    if (pro === 'age') {
      if (!Number.isInteger(value)) {
        throw new TypeError(`${pro} 必须是整数`)
      }
      if (value > 200) {
        throw new RangeError(`${pro} 不能超过200`)
      }
    }
    return Reflect.set(target, pro, value)
  },
  has (target, pro) {
    invariant(pro, 'has')
    return Reflect.has(target, pro)
  },
  deleteProperty (target, key) {
    invariant(pro, 'deleteProperty')
    return Reflect.deleteProperty(target, pro)
  }
}

function invariant (key, action) {
  if (key[0] === '_') {
    throw new ReferenceError(`不能 ${action} 属性 ${key}`)
  }
}

const proxy = new Proxy(peterInfo, handler)

proxy._tel
