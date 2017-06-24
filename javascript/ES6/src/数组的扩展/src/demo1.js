'use strict';

{
  // 类似数组对象转数组
  let IdInfo = {"0":"peter",length:1}; // 发现只支持这种索引数组
  // console.log(IdInfo instanceof Object);  // true
  let ArrayIdInfo = Array.from(IdInfo);
  console.log(ArrayIdInfo);
  //
  // let arrayLike = {
  //     '0': 'a',
  //     '1': 'b',
  //     '2': 'c',
  //     length: 3
  // };
  //
  // // ES5的写法
  // var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']
  //
  // // ES6的写法
  // let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
  // console.log(arr2);
}

{
  // Array.from 第二个参数->相当于map
  let num = {
    "0":1,
    "1":2,
    "2":3,
    length:3
  };

  let ArrayNum1 = Array.from(num);
  console.log(ArrayNum1);

  // Array.from 第二个参数
  let ArrayNum2 = Array.from(num, x => x * x);
  console.log(ArrayNum2);
}

{
  // 将字符串转为数组
  let name = 'peter';
  console.log(Array.from(name)); // 数组
}
