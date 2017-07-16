'use strict'

// Object.assign()方法有很多用处

{
  // 为对象添加属性
  // 为对象添加方法
  let Info = {}

  Object.assign(Info, {
    name: 'default name',
    say () { console.log(this.name) }
  })
  console.log(Info)
  Info.say()
}

{
  // 克隆对象 注意这里是浅拷贝 拷贝对象实例上的属性和方法
  let peterInfo = {
    name: 'peter'
  }
  let newPeterInfo = Object.assign({}, peterInfo)
  console.log(newPeterInfo)
}

{
  // 合并多个对象
  let obj1 = {name: 'peter'}
  let obj2 = {age: 20}
  let obj3 = {sex: '男'}
  const merge = (target, ...sources) => Object.assign(target, ...sources)
  let newObj = merge(obj1, obj2, obj3)
  console.log(newObj)
}

{
  // 为属性指定默认值
  const DEFAULTS = {
    url: {
      host: 'pointline.github.io',
      port: 8080
    }
  }

  function processContent (options) {
    options = Object.assign({}, DEFAULTS, options)
    console.log(options)
  }
  processContent()
}
