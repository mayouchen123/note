'use strict';

// 对象的扩展

{
  // 属性的简洁表示法
  let foo = 'bar';
  let baz = {foo};
  console.log(baz);
}

{
  // 方法简写
  let o = {
    method() {
      return 'Hello!';
    }
  }
  console.log(o.method());
}

{
  // 实际例子,属性和方法的简写
  let age = 20;
  let peterInfo = {
    name: 'peter',
    // 等同于age: age
    age,
    say() {console.log(`我的名字是${this.name}, 我的年龄${this.age}`)}
  }
  peterInfo.say();
}
