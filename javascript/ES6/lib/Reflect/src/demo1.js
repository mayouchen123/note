'use strict';
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

{
  // Reflect.get(target, name, receiver);
  var myObj = {
    foo: 1,
    bar: 2,
    get baz() {
      return this.foo + this.bar;
    }
  };

  console.log(Reflect.get(myObj, 'foo'));
  console.log(Reflect.get(myObj, 'bar')

  // 如果name属性部署了读取函数的(getter), 则读取函数的this绑定receiver
  );var myReceiverObject = {
    foo: 6,
    bar: 6
  };
  console.log(Reflect.get(myObj, 'baz', myReceiverObject));
}

{
  // Reflect.set(target, name, value, receiver)
  var myObject = {
    foo: 1,
    set bar(value) {
      var isOk = this.foo = value;
      if (isOk) {
        return true;
      } else {
        throw new Error('设置失败');
      }
    },
    get bar() {
      return this.foo;
    }
  };
  console.log(myObject.foo);
  Reflect.set(myObject, 'foo', 2);
  console.log(myObject.foo);

  Reflect.set(myObject, 'bar', 3);
  console.log(myObject.foo);
}

{
  // Reflect.has()
  var _myObject = {
    foo: 1

    // 旧写法
  };console.log('foo' in _myObject

  // 新写法
  );console.log(Reflect.has(_myObject, 'foo'));
}

{
  // Reflect.deleteProperty()
  var _myObject2 = {
    foo: 1,
    bar: 2

    // 旧写法
  };delete _myObject2['foo'];

  // 新写法
  Reflect.deleteProperty(_myObject2, 'bar');
}

{
  // Reflect.construct()
  var Info = function Info(name, age) {
    this.name = name;
    this.age = age;
  };
  // 使用new的写法


  var instance1 = new Info('peter', 20);
  console.log(instance1
  // 新的写法
  );var instance2 = Reflect.construct(Info, ['peter', 21]);
  console.log(instance2);
}

{
  // Reflect.getPrototypeOf()
  var _myObject3 = {};

  // 旧写法
  console.log(Object.prototype === Object.getPrototypeOf(_myObject3)

  // 新写法
  );console.log(Reflect.getPrototypeOf(_myObject3) === Object.prototype);
}

{
  // Reflect.setPrototypeOf()
  var _Info = function _Info(name, age) {
    this.name = name;
    this.age = age;
  };

  _Info.prototype.say = function () {
    console.log('\u6211\u7684\u540D\u5B57' + this.name + ', \u6211\u7684\u5E74\u9F84' + this.age);
  };

  var _myObject4 = {
    name: 'peter',
    age: 20
    // 旧写法
    // Object.setPrototypeOf(myObject, Info.prototype)
    // myObject.say()

    // 新写法
  };Reflect.setPrototypeOf(_myObject4, _Info.prototype);
  _myObject4.say();
}

{
  // Reflect.apply()
  var ages = [11, 33, 12, 54, 18, 96];

  // 旧写法
  // const youngest = Math.min.apply(Math, ages);
  // const oldest = Math.max.apply(Math, ages);
  // const type = Object.prototype.toString.call(youngest);

  // 新写法
  var youngest = Reflect.apply(Math.min, Math, ages);
  var oldest = Reflect.apply(Math.max, Math, ages);
  var type = Reflect.apply(Object.prototype.toString, youngest, []);
  console.log(youngest);
  console.log(oldest);
  console.log(type);
}

{
  // Reflect.defineProperty()
  var MyDate = function MyDate() {
    var _now = Date.now();
    Reflect.defineProperty(MyDate, 'now', {
      get: function get() {
        return _now;
      },
      set: function set(value) {
        _now = value;
      }
    });
    this.now = _now;
  };

  var localDate = Reflect.construct(MyDate, []);
  console.log(localDate.now);
}

{
  // Reflect.getOwnPropertyDescriptor()
  var _MyDate = function _MyDate() {
    var _now = Date.now();
    Reflect.defineProperty(this, 'now', {
      get: function get() {
        return _now;
      },
      set: function set(value) {
        _now = value;
      },

      configurable: false,
      enumerable: false
    });
    this.now = _now;
  };

  var _localDate = Reflect.construct(_MyDate, []);
  console.log(Reflect.getOwnPropertyDescriptor(_localDate, 'now'));
}

{
  // Reflect.isExtensible()
  var _MyDate2 = function _MyDate2() {
    var _now = Date.now();
    Reflect.defineProperty(this, 'now', {
      get: function get() {
        return _now;
      },
      set: function set(value) {
        _now = value;
      },

      configurable: false,
      enumerable: false
    });
    this.now = _now;
  };

  var _localDate2 = Reflect.construct(_MyDate2, []);
  console.log(Reflect.isExtensible(_localDate2) // 判断对象是否可扩展
  );
}

{
  // Reflect.preventExtensions()
  var _MyDate3 = function _MyDate3() {
    var _now = Date.now();
    Reflect.defineProperty(this, 'now', {
      get: function get() {
        return _now;
      },
      set: function set(value) {
        _now = value;
      },

      configurable: false,
      enumerable: false
    });
    this.now = _now;

    Reflect.preventExtensions(this);
  };

  var _localDate3 = Reflect.construct(_MyDate3, []);
  console.log(Reflect.isExtensible(_localDate3) // 判断对象是否可扩展
  );
}

{
  var _myObj2;

  // Reflect.ownKeys()
  var _myObj = (_myObj2 = {
    foo: 1,
    bar: 2
  }, _defineProperty(_myObj2, Symbol.for('baz'), 3), _defineProperty(_myObj2, Symbol.for('bing'), 4), _myObj2);

  // 旧写法
  var names1 = Object.getOwnPropertyNames(_myObj);
  console.log(names1);

  var names2 = Object.getOwnPropertySymbols(_myObj);
  console.log(names2);

  var names3 = Reflect.ownKeys(_myObj);
  console.log(names3);
}