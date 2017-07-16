class Info {
  constructor (name, age) {
    this.name = name
    this.age = age
  }
  say () {
    _say.call(this)
  }
}

function _say () {
  console.log(`我的名字是 ${this.name}, 我的年龄是 ${this.age}`)
}

let peterInfo = Reflect.construct(Info, ['peter', 20])
peterInfo.say()
