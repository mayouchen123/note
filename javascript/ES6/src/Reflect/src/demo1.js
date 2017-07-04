'use strict'
// Reflect 对象的13个静态方法
// + Reflect.apply(target,thisArg,args)
// + Reflect.construct(target,args)
// + Reflect.get(target,name,receiver)
// + Reflect.set(target,name,value,receiver)
// + Reflect.defineProperty(target,name,desc)
// + Reflect.deleteProperty(target,name)
// + Reflect.has(target,name)
// + Reflect.ownKeys(target)
// + Reflect.isExtensible(target)
// + Reflect.preventExtensions(target)
// + Reflect.getOwnPropertyDescriptor(target, name)
// + Reflect.getPrototypeOf(target)
// + Reflect.setPrototypeOf(target, prototype)

{
// Reflect.get(target, name, receiver);
  const myObj = {
    foo: 1,
    bar: 2,
    get baz () {
      return this.foo + this.bar
    }
  }

  console.log(Reflect.get(myObj, 'foo'))
  console.log(Reflect.get(myObj, 'bar'))

  // 如果name属性部署了读取函数的(getter), 则读取函数的this绑定receiver
  const myReceiverObject = {
    foo: 6,
    bar: 6
  }
  console.log(Reflect.get(myObj, 'baz', myReceiverObject))
}

{
  // Reflect.set(target, name, value, receiver)
  const myObject = {
    foo: 1,
    set bar (value) {
      let isOk = (this.foo = value)
      if (isOk) {
        return true
      } else {
        throw new Error('设置失败')
      }
    },
    get bar () {
      return this.foo
    }
  }
  console.log(myObject.foo)
  Reflect.set(myObject, 'foo', 2)
  console.log(myObject.foo)

  Reflect.set(myObject, 'bar', 3)
  console.log(myObject.foo)
}

{
  // Reflect.has()
  const myObject = {
    foo: 1
  }

  // 旧写法
  console.log('foo' in myObject)

  // 新写法
  console.log(Reflect.has(myObject, 'foo'))
}

{
  // Reflect.deleteProperty()
  const myObject = {
    foo: 1,
    bar: 2
  }

  // 旧写法
  delete myObject['foo']

  // 新写法
  Reflect.deleteProperty(myObject, 'bar')
}

{
  // Reflect.construct()
  function Info (name, age) {
    this.name = name
    this.age = age
  }
  // 使用new的写法
  const instance1 = new Info('peter', 20)
  console.log(instance1)
  // 新的写法
  const instance2 = Reflect.construct(Info, ['peter', 21])
  console.log(instance2)
}

{
  // Reflect.getPrototypeOf()
  const myObject = {}

  // 旧写法
  console.log(Object.prototype === Object.getPrototypeOf(myObject))

  // 新写法
  console.log(Reflect.getPrototypeOf(myObject) === Object.prototype)
}

{
  // Reflect.setPrototypeOf()
  function Info (name, age) {
    this.name = name
    this.age = age
  }

  Info.prototype.say = function () {
    console.log(`我的名字${this.name}, 我的年龄${this.age}`)
  }

  const myObject = {
    name: 'peter',
    age: 20
  }
  // 旧写法
  // Object.setPrototypeOf(myObject, Info.prototype)
  // myObject.say()

  // 新写法
  Reflect.setPrototypeOf(myObject, Info.prototype)
  myObject.say()
}

{
  // Reflect.apply()
  const ages = [11, 33, 12, 54, 18, 96]

  // 旧写法
  // const youngest = Math.min.apply(Math, ages);
  // const oldest = Math.max.apply(Math, ages);
  // const type = Object.prototype.toString.call(youngest);

  // 新写法
  const youngest = Reflect.apply(Math.min, Math, ages)
  const oldest = Reflect.apply(Math.max, Math, ages)
  const type = Reflect.apply(Object.prototype.toString, youngest, [])
  console.log(youngest)
  console.log(oldest)
  console.log(type)
}

{
  // Reflect.defineProperty()
  function MyDate () {
    let _now = Date.now()
    Reflect.defineProperty(MyDate, 'now', {
      get () {
        return _now
      },
      set (value) {
        _now = value
      }
    })
    this.now = _now
  }

  const localDate = Reflect.construct(MyDate, [])
  console.log(localDate.now)
}

{
// Reflect.getOwnPropertyDescriptor()
  function MyDate () {
    let _now = Date.now()
    Reflect.defineProperty(this, 'now', {
      get () {
        return _now
      },
      set (value) {
        _now = value
      },
      configurable: false,
      enumerable: false
    })
    this.now = _now
  }

  const localDate = Reflect.construct(MyDate, [])
  console.log(Reflect.getOwnPropertyDescriptor(localDate, 'now'))
}

{
  // Reflect.isExtensible()
  function MyDate () {
    let _now = Date.now()
    Reflect.defineProperty(this, 'now', {
      get () {
        return _now
      },
      set (value) {
        _now = value
      },
      configurable: false,
      enumerable: false
    })
    this.now = _now
  }

  const localDate = Reflect.construct(MyDate, [])
  console.log(Reflect.isExtensible(localDate)) // 判断对象是否可扩展
}

{
  // Reflect.preventExtensions()
  function MyDate () {
    let _now = Date.now()
    Reflect.defineProperty(this, 'now', {
      get () {
        return _now
      },
      set (value) {
        _now = value
      },
      configurable: false,
      enumerable: false
    })
    this.now = _now

    Reflect.preventExtensions(this)
  }

  const localDate = Reflect.construct(MyDate, [])
  console.log(Reflect.isExtensible(localDate)) // 判断对象是否可扩展
}

{
  // Reflect.ownKeys()
  let myObj = {
    foo: 1,
    bar: 2,
    [Symbol.for('baz')]: 3,
    [Symbol.for('bing')]: 4
  }

  // 旧写法
  let names1 = Object.getOwnPropertyNames(myObj)
  console.log(names1)

  let names2 = Object.getOwnPropertySymbols(myObj)
  console.log(names2)

  let names3 = Reflect.ownKeys(myObj)
  console.log(names3)
}
