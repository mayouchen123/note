'use strict';

{
  // 类似数组对象转数组
  var IdInfo = { "0": "peter", length: 1 }; // 发现只支持这种索引数组
  // console.log(IdInfo instanceof Object);  // true
  var ArrayIdInfo = Array.from(IdInfo);
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
  var num = {
    "0": 1,
    "1": 2,
    "2": 3,
    length: 3
  };

  var ArrayNum1 = Array.from(num);
  console.log(ArrayNum1);

  // Array.from 第二个参数
  var ArrayNum2 = Array.from(num, function (x) {
    return x * x;
  });
  console.log(ArrayNum2);
}

{
  // 将字符串转为数组
  var name = 'peter';
  console.log(Array.from(name)); // 数组
}