'use strict';
{
  // let块级作用域
  let uname = 'peter'
  console.log(uname)
}

// 测试ES6环境下 函数本身作用域
function f() {console.log('I am outside!');}
(function () {
  if (false) {
    // 重复声明一次函数f
    function f() {console.log('I am inside!');}
  }

  f(); // I am outside!
}());
