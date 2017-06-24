# let和const命令

# let命令

## 基本用法
ES6新增了let命令,用来声明变量,它的用法类似于var.

### 不存在变量提升
let不像var那样,会发生`变量提升`现象

```javascript
function do_something() {
  console.log(foo); // ReferenceError
  let foo = 2;
}
```

### 暂时性死区
只要块级作用域内存在let命令,它所声明的变量就"绑定"(binding)这个区域,不受外部影响
```javascript
var tmp =123;
if (true) {
  tmp = 'abc'; // ReferenceError
  let tmp;
}
```
上面代码中,存在全局变量tmp,但是块级作用域内let又声明了一个局部变量tmp,导致后者绑定这个块级作用域,所以在let声明变量,对tmp赋值会报错

ES6明确规定,如果区块中存在let和const命令,这个区块对这些命令声明的变量,从一开始就形成了封闭作用域,凡是在声明之前就使用这些变量,就会报错

### 不允许重复声明
let不允许在相同作用域内,重复声明同一个变量.

```javascript
// 报错
function () {
  let a = 10;
  var a = 1;
}

// 报错
function () {
  lea a = 10;
  let a = 1;
}
```

因此,不能在函数内部重新声明参数

### 块级作用域
let实际上为javascript新增了块级作用域
```javascript
function f1() {
  let n = 5;
  if (true) {
    let n = 10;
  }
  console.log(n); // 5
}
```
上面的代码如果使用var定义,最后输出的值就是10

> 块级作用域的出现,实际上使得获得广泛应用的立即执行匿名函数(IIFE)不在必要了

```javascript
// IIFE写法
(function () {
  var tmp = ...;
  ...
}());

// 块级作用域写法
{
  let tmp = ...;
  ...
}
```

> 另外,ES6也规定,函数本身的作用域,在其所在的块级作用域内

```javascript
function f() {console.log('I am outside!');}
(function () {
  if (false) {
    // 重复声明一次函数f
    function f() {console.log('I am inside!');}
  }

  f(); // I am outside!
}());
```

上面代码在ES5中运行,会得到"I an inside",但是在ES6中运行,会得到"I am outside!".这是因为ES5存在函数提升,不管会不会进入if代码块,
函数声明都会提升到当前作用域的顶部,得到执行;而ES6支持块级作用域,不管会不会进入if代码块,其内部声明的函数皆不会影响到作用域的外部

> 需要注意的是:如果在严格模式下,函数只能在顶部作用域或函数内部声明,其他情况(比如if代码块,循环代码块)的声明都会报错 <br/>
ES6引入了块级作用域,明确允许在块级作用域之中声明函数.ES6规定,块级作用域之中,函数声明语句的行为类似于let,在块级作用域之外不可引用



# const命令
const也用来声明变量,但是声明的常量,一旦声明,常量的值就不能改变.

+ const的作用域与let命令相同:只在声明所在的块级作用域有效
+ const命令也不存在提升,只能在声明的位置后面使用
+ const声明的常量,也与let一样不可重复声明

> 由于const命令只是指向变量所在的地址,所以将一个对象声明为常量必须非常小心
> const实际上保证的,并不是变量的值不得改动,而是变量指向的那个内存地址不得改动



# 全局对象的属性
全局对象是最顶层的对象,在浏览器环境指的是window对象,在Node.js指的是global对象,在javascript语言中,所有全局变量都是全局对象的属性

ES6规定,var命令和function命令声明的全局变量,属于全局对象属性;let命令,const命令,class命令声明的全局变量,不属于全局对象的属性



# ES6声明变量的6种方法
ES5只有两种声明变量的方法:var命令和function命令.ES6除了添加let和const命令,另外两种声明变量的方法:import命令和class命令.所以
一共有6种声明变量的方法

# 顶层对象的属性
顶层对象，在浏览器环境指的是window对象，在Node指的是global对象。ES5之中，顶层对象的属性与全局变量是等价的。

```javascript
window.a = 1;
a // 1

a = 2;
window.a // 2
```

上面代码中，顶层对象的属性赋值与全局变量的赋值，是同一件事。

顶层对象的属性与全局变量挂钩，被认为是JavaScript语言最大的设计败笔之一。这样的设计带来了几个很大的问题，
首先是没法在编译时就报出变量未声明的错误，只有运行时才能知道（因为全局变量可能是顶层对象的属性创造的，而属性的创造是动态的）；
其次，程序员很容易不知不觉地就创建了全局变量（比如打字出错）；最后，顶层对象的属性是到处可以读写的，这非常不利于模块化编程。
另一方面，window对象有实体含义，指的是浏览器的窗口对象，顶层对象是一个有实体含义的对象，也是不合适的。

ES6为了改变这一点，一方面规定，为了保持兼容性，var命令和function命令声明的全局变量，依旧是顶层对象的属性；另一方面规定，
let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性。也就是说，从ES6开始，全局变量将逐步与顶层对象的属性脱钩。

```javascript
var a = 1;
// 如果在Node的REPL环境，可以写成global.a
// 或者采用通用方法，写成this.a
window.a // 1

let b = 1;
window.b // undefined
```

# global对象
ES5的顶层对象，本身也是一个问题，因为它在各种实现里面是不统一的。
+ 浏览器里面，顶层对象是window，但 Node 和 Web Worker 没有window。
+ 浏览器和 Web Worker 里面，self也指向顶层对象，但是Node没有self。
+ Node 里面，顶层对象是global，但其他环境都不支持。

同一段代码为了能够在各种环境，都能取到顶层对象，现在一般是使用this变量，但是有局限性。

+ 全局环境中，this会返回顶层对象。但是，Node模块和ES6模块中，this返回的是当前模块。
+ 函数里面的this，如果函数不是作为对象的方法运行，而是单纯作为函数运行，this会指向顶层对象。但是，严格模式下，这时this会返回undefined。
+ 不管是严格模式，还是普通模式，new Function('return this')()，总是会返回全局对象。但是，如果浏览器用了CSP（Content Security Policy，内容安全政策），那么eval、new Function这些方法都可能无法使用。
