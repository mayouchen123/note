'use strict';

// 对象的扩展

{
  // 属性的简洁表示法
  var foo = 'bar';
  var baz = { foo: foo };
  console.log(baz);
}

{
  // 方法简写
  var o = {
    method: function method() {
      return 'Hello!';
    }
  };
  console.log(o.method());
}

{
  // 实际例子,属性和方法的简写
  var age = 20;
  var peterInfo = {
    name: 'peter',
    // 等同于age: age
    age: age,
    say: function say() {
      console.log('\u6211\u7684\u540D\u5B57\u662F' + this.name + ', \u6211\u7684\u5E74\u9F84' + this.age);
    }
  };
  peterInfo.say();
}