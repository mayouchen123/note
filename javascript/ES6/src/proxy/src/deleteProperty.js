// deleteProperty方法用于拦截delete操作，如果这个方法抛出错误或者返回false，当前属性就无法被delete命令删除
// 保证私有属性不能被删除

const peterInfo = {name: 'peter', _age: 20}
const proxy = new Proxy(peterInfo, {
  deleteProperty (target, key) {
    invariant(key, 'delete')
    return Reflect.deleteProperty(target, key)
  }
})
function invariant (key, action) {
  if (key[0] === '_') {
    throw new ReferenceError(`不能 ${action} 私有属性 ${key} `)
  }
}

console.log(delete proxy.name)
console.log(delete proxy._age)
