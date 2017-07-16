// Proxy.revocable方法返回一个可取消的 Proxy 实例

let perterInfo = {name: 'peter', age: 10}
let handler = {
  get (target, pro) {
    console.log(`读取 ${pro}`)
    return Reflect.get(target, pro)
  },
  set (target, pro, value) {
    console.log(`设置 ${pro}`)
    return Reflect.set(target, pro, value)
  }
}
const person = new Proxy(perterInfo, handler)

person.name

let {proxy, revoke} = Proxy.revocable(perterInfo, handler)

proxy.age

revoke() // 收回proxy 代理权 将不能再访问
proxy.age
