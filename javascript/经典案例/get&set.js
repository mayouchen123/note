
'use strict';

(function () {
  // let emp = { id: 1001, name: 'peter', sal: 15000 };
  // console.log(Object.getOwnPropertyDescriptor(emp, 'id'));
  // Object.defineProperty(emp, 'sal', {
  //   enumerable: false,s
  //   configurable: false,
  // });
  // console.log(Object.getOwnPropertyDescriptor(emp, 'sal'));
  // // delete emp.sal;
  // Object.defineProperty(emp, 'age', {
  //   writable: true,
  // });
  // console.log(Object.getOwnPropertyDescriptor(emp, 'age'));

  // 同时定义多个属性的数据属性
  // Object.defineProperties(obj: ?, props: ?)
  // Object.defineProperties(emp, {
  //   id: {
  //     writable: false,
  //     configurable: false,
  //   },
  //   name: {
  //     configurable: false,
  //   },
  //   sal: {
  //     enumerable: false,
  //     configurable: false,
  //   },
  //   age: {
  //     value: 24,
  //     writable: true,
  //     enumerable: true,
  //     configurable: false,
  //   },
  // });
  // console.log(Object.getOwnPropertyDescriptor(emp, 'id'));
  // console.log(Object.getOwnPropertyDescriptor(emp, 'name'));
  // console.log(Object.getOwnPropertyDescriptor(emp, 'sal'));
  // console.log(Object.getOwnPropertyDescriptor(emp, 'age'));

  // 访问器属性
  // let emp = { id: 1001, name: 'peter', _age: 20 };
  // Object.defineProperty(emp, 'age', {
  //   get() {
  //     return this._age;
  //   },
  //   set(value) {
  //     if (value >= 18 && value <= 65) {
  //       this._age = value;
  //     } else {
  //       throw new Error('年龄为18到25之间');
  //     }
  //   },
  // });
  // emp.age = 21;
  // console.log(emp);

  // 使用闭包定义访问器属性
  // let emp = { id: 1001, name: 'peter' };
  //
  // (function () {
  //   let xage = 20;
  //   Object.defineProperty(emp, 'age', {
  //     get() {
  //       return xage;
  //     },
  //     set(value) {
  //       if (value >= 18 && value <= 65) {
  //         xage = value;
  //       } else {
  //         throw new Error('年龄为18到25之间');
  //       }
  //     },
  //   });
  // }());
  // emp.age = 21;
  // console.log(emp.age);
  // console.log(Object.getOwnPropertyDescriptor(emp, 'age');

  // 在定义构造函数时定义数据属性和访问器属性
  function Emp(id, name, sal, age) {
    this.id = id;
    this.name = name;
    this.sal = sal;

    Object.defineProperties(this, {
      id: {
        writable: false,
        configurable: false,
      },
      name: {
        configurable: false,
      },
      sal: {
        enumerable: false,
        configurable: false,
      },
    });

    let xage = 20;
    Object.defineProperty(this, 'age', {
      get() {
        return xage;
      },
      set(value) {
        if (value >= 18 && value <= 65) {
          xage = value;
        } else {
          throw new Error('年龄为18到25之间');
        }
      },
    });
    this.age = age;

    // 防篡改
    // 1.防扩展
    // Object.preventExtensions(this);
    // 2.密封
    Object.seal(this);
  }
  let emp1 = new Emp(1001, 'peter', 1000, 20);
  console.dir(emp1.sal);
  let emp2 = new Emp(1002, 'tom', 2000, 40);
  console.dir(emp2.age);
  let emp3 = new Emp(1003, 'jack', 3000, 50);
  console.dir(emp3);
  emp3.age = 20;
  console.log(emp3);
  // emp3.xage = 22;
}());

(function(){
  console.log('---');
  // 以下这种写法 会导致无法保护 get set 需要设置的变量 参照上面闭包的形式 完整的写法
  function GetInfo(name, age){
    this.name = name;
    this.age = age;

    Object.defineProperties(this, {
      name: {
        configurable:false
      },
      _age : {
        value:0,
        configurable:false
      },
      age: {
        get: function(){
          return this._age;
        },
        set: function(newValue){
          if (newValue > 20) {
            this._age = newValue;
          } else {
            throw new Error('age 必须大于20岁');
          }
        }
      }
    });

    Object.seal(this);
  }

  var peterInfo = new GetInfo('peter',20);
  console.log(peterInfo);
  console.log(peterInfo.age);
  console.log(peterInfo._age);
}());
