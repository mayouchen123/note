// new.target属性

{
  class Info {
    constructor (name, age) {
      if (new.target !== undefined) {
        this.name = name
        this.age = age
      } else {
        throw new Error('必须使用new生成实例')
      }
    }
  }
  let peterInfo = new Info('peter', 20)
  console.log(peterInfo)
  let notpeterInfo = Info.call(peterInfo, 'tom', 20)
  console.log(notpeterInfo)
}
