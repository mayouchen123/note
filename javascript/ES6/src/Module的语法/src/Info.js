// Module模块
class Info {
  constructor ({name = 'default name', age = 20} = {}) {
    if (new.target !== undefined) {
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
          if (value >= 20 && value <= 50) {
            _age = value
          } else {
            throw new Error('年龄必须是20岁到50岁之间')
          }
        }
      })

      Reflect.preventExtensions(this)
    }
  }

  static say () {
    console.log('帅气')
  }
}
export {Info}
