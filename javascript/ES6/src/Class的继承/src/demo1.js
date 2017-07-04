// Class的继承
{
  class Info {
    constructor (name = 'default name', age = 'default age') {
      if (new.target !== undefined) {
        this.name = name
        this.age = age
      } else {
        throw new Error('对象必须使用new实例化')
      }
    }

    toString () {
      console.log(`我的名字:${this.name}, 我的年龄${this.age}`)
    }
  }

  let defaultInfo = new Info()
  console.log(defaultInfo)

  class PeterInfo extends Info {
    constructor (name, age, tel = 'default tel') {
      // 在子类中必须先调用super 不然获取不了thisss关键字
      super(name, age)
      this.tel = tel
    }
  }

  let instancepeterInfo = new PeterInfo('peter', 20, 110)
  console.log(instancepeterInfo)
}

{
  // super 关键字 既可以当做函数使用,也可以当作对象使用
  class Info {
    constructor (name) {
      this.name = name
    }

    toString () {
      console.log(`我的名字:${this.name}`)
    }
  }

  class PeterInfo extends Info {
    constructor (...args) {
      // super 当作函数使用
      super(...args)
      // super 当作对象使用
      super.toString()
    }
  }

  let instancepeterInfo = Reflect.construct(PeterInfo, ['peter'])
  console.log(instancepeterInfo)
}
