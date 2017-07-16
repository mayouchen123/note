// Class的基本用法
{
  // 创建一个简单Class对象
  class Info {
    constructor (name, age) {
      this.name = name
      this.age = age
    }

    toString () {
      console.log(`我的名字${this.name}, 我的年龄${this.age}`)
    }
  }

  let peterInfo = Reflect.construct(Info, ['peter', 20])
  console.log(peterInfo)
  peterInfo.toString()

  let tel = {
    [Symbol.for('tel')]: 110
  }

  // 使用Object.assign()合并Info和tel对象
  Object.assign(peterInfo, tel)

  // 为对象添加方法 使用 Object.assign()
  Object.assign(Info.prototype, {
    say () {
      console.log(`我的名字${this.name}, 我的年龄${this.age}`)
    }
  })
  peterInfo.say()

  // 类的内部所有定义的方法, 都是不可枚举的
  console.log(Reflect.ownKeys(peterInfo))
}

{
  // Classs 的取值函数（getter）和存值函数（setter）
  class Info {
    constructor (name = 'default name', age = 20) {
      this.name = name
      this.age = age

      let _age = age

      Reflect.defineProperty(this, 'name', {
        configurable: false
      })

      Reflect.defineProperty(this, 'age', {
        configurable: false,
        get () {
          return _age
        },
        set (value) {
          if (value > 20 && value < 50) {
            _age = value
          } else {
            throw new Error('年龄必须在20岁到50岁之间')
          }
        }
      })

      Reflect.preventExtensions(this)
    }

    say () {
      console.log(`我的名字:${this.name}, 我的年龄:${this.age}`)
    }
  }

  let peterInfo = Reflect.construct(Info, [])
  console.log(peterInfo, peterInfo.name, peterInfo.age)
  console.log(Reflect.ownKeys(peterInfo)) // 查看当前对象可枚举的属性 方法不可枚举
  console.log(Reflect.getOwnPropertyDescriptor(peterInfo, 'name')) // 返回name属性的数据属性特征
  console.log(Reflect.getOwnPropertyDescriptor(peterInfo, 'age')) // 返回age属性的数据属性特征
  console.log(Object.keys(peterInfo)) // 返回对象自身的所有可枚举的属性的键名
  console.log(Reflect.deleteProperty(peterInfo, 'name')) // 不能删除属性
  console.log(peterInfo)

  // let tel = {
  //   tel: 110
  // }
  // let perterInfo = Object.assign(peterInfo, tel) // 这里合并属性不成功,因为perterInfo已经设置为 preventExtensions
  // console.log(perterInfo)
  console.log(Reflect.get(peterInfo, 'name'))
  console.log(Reflect.get(peterInfo, 'age'))
  console.log(Reflect.set(peterInfo, 'name', 'peter'))
  console.log(Reflect.set(peterInfo, 'age', 19)) // 年龄设置在20到50之间不然报错
  console.log(Reflect.get(peterInfo, 'name'))
  console.log(Reflect.get(peterInfo, 'age'))
}
