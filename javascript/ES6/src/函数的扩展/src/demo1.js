'use strict';

{
  // 函数参数默认值
  function log(x = 'hello', y = 'world'){
    console.log(`${x} ${y}`);
  }

  log();

}

{
  // 构造函数默认参数
  function Point(x = 0, y = 0){
    this.x = x;
    this.y = y;
  }

  let p = new Point();
  console.log(p);
}

{
  // 与解构赋值默认值结合使用
  function Info({name = 'default name', age = 20}){
    this.name = name;
    this.age = age;
  }

  let defaultInfo = new Info({});
  console.log(defaultInfo);

  let peterInfo = new Info({name: 'peter', age: 21});
  console.log(peterInfo);
}
