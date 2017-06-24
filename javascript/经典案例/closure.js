'use strcit';
// 简单的闭包案例
//
//外层函数包裹受保护的变量和操作受保护变量的函数
function outer() {
    var i = 1;
    return function() {
        console.log(i++);
    }
}
var next = outer();
next(); // 1
next(); // 2
next(); // 3
