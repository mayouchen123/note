// 使用bind

'use strict';

(function () {
  function calc(base, bonus) {
    console.log(`${this.name}总工资${base + bonus}`);
  }

  let lilei = { name: 'Li Lei' };
  let hmm = { name: 'Han Meimei' };
  calc.call(lilei, 1000, 600);
  let lileiCalc = calc.bind(lilei); // bind
  lileiCalc(5000, 500);
  calc.call(hmm, 2000, 200);
}());

(function(){
  function GetInfo(name, age){
    // console.log(`name: ${this.name}, age: ${this.age}, sex: ${sex}`);
    this.name = name;
    this.age = age;
  }
  GetInfo.prototype.say = function(){
    console.log(`name: ${this.name}, age: ${this.age}`);
  }
  let peterInfo = new GetInfo('peter', 20);
  // console.log(peterInfo.__proto__ == GetInfo.prototype);  // true
  // console.log(peterInfo.__proto__.__proto__ == Object.prototype ); // true
  // console.log(peterInfo.__proto__.constructor == GetInfo ); // true
  // console.log(peterInfo.__proto__.constructor.__proto__ == Function.prototype); // true
  // console.log(peterInfo.__proto__.constructor.__proto__.constructor == Function); // true
  // console.log(peterInfo.__proto__.constructor.__proto__.__proto__ == peterInfo.__proto__.__proto__ ); // true
  console.log(peterInfo);
  var tom = {name: 'tom', age: 21};
  peterInfo.say.call(tom); // 在调用实例化上的方法时 替换方法当中的this指向
  var jack = {name: 'jack', age: 22};
  var jackInfo = peterInfo.say.bind(jack); // 通过bind 会返回一个替换过this得新对象
  jackInfo();
  var lisa = {name: 'lisa', age: 22};
  peterInfo.say.apply(lisa);
}());

(function() {
  // 解构 使用函数作为默认参数
  function GetInfo([name = 'default name', age = 20]){
    this.name = name;
    this.age = age;
  }

  GetInfo.prototype.say = function(){
    console.log(`name: ${this.name}, age: ${this.age}`);
  }

  var defaultInfo = new GetInfo([]);
  console.log(defaultInfo);

  var peterInfo = new GetInfo(['peter',20]);
  console.log(peterInfo);
}());

(function() {
  // 解构 使用对象作为默认参数
  function GetInfo({name = 'Object default name', age = 20}){
    this.name = name;
    this.age = age;
  }

  GetInfo.prototype.say = function(){
    console.log(`name: ${this.name}, age: ${this.age}`);
  }

  var defaultInfo = new GetInfo({});
  console.log(defaultInfo);

}())
