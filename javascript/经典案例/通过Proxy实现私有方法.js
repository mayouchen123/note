// 通过Proxy实现class的私有方法
let Info = class {
  constructor (name, age) {
    this.name = name
    this.age = age
  }
  _say () {
    console.log(`我的名字: ${this.name}, 我的年龄 ${this.age}`)
  }
}

let handler = {
  get (target, pro) {
    console.log('获取')
    invariant(pro)
    return Reflect.get(target, pro)
  },
  set (target, pro, value) {
    console.log('设置')
    invariant(pro)
    return Reflect.set(target, pro, value)
  }
}

function invariant (pro) {
  if (pro[0] === '_') {
    throw new ReferenceError(`不能使用私有属性或私有方法`)
  }
}

let peterInfo = Reflect.construct(Info, ['peter', 20])
console.log(peterInfo)

let peterInfoProxy = new Proxy(peterInfo, handler)
// console.log(peterInfoProxy.name)
// peterInfoProxy._say()

// 取消Proxy
let {proxy, revoke} = Proxy.revocable(peterInfo, handler)

revoke() // 收回proxy 代理权 将不能再访问对象中的属性和方法

// console.log(proxy.name)
proxy._say()
