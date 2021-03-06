# 类型,值和变量

## javascript预定义了很多全局变量和函数
| name | - | - | - | - |
| ---------| -------- | ------- | -------- | ------- | ------- |
| arguments | encodeURI | Infinity | Number | RegExp |
| Array | encodeURIComponent | isFinite | Object | String |
| Boolean | Error | isNaN | parseFloat | SyntaxError |
| Date | eval | JSON | parseInt | TypeError |
| decodeURI | EvalError | Math | RangeError | undefined |
| decodeURIComponent | Function | NaN | ReferenceError | URIError |

javascript的数据类型分为两类:基本类型和引用类型.javascript中有两个特殊的原始值:null(空)和undefined(未定义).
+ 基本类型
  + Number
  + String
  + Boolean
  + null
  + undefined

> javascript中除了Number,String,Boolean,null,undefined之外的都是对象 <br/>
javascript还定义了另一种特殊对象--函数

javascript解释器有自己的内存管理机制,可以自动对内存进行垃圾回收.这意味着程序可以按需创建对象,不必担心这些对象和内存回收,当不再有任何
引用指向一个对象,解释器就会自动回收内存资源

javascript采用词法作用域,不在任何函数内声明的变量称做全局变量,在javascript程序任何地方都是可见的,在函数内声明的变量具有函数作用域.

## 数字
javascript不区分整数值和浮点值.javascript中的所有数字均用浮点数值表示.javascript采用IEEE 754标准定义的64位浮点格式表示数字
> 面试题: 在javascript中Number在内存中占几个字节? 占8个字节   1个Number占64bit   1byte = 8bit

数字运算
```javascript
5/0 = Infinity
-5/0 = -Infinity
// 被零整除在javascript并不报错:简单的返回无穷大(Infinity)或负无穷大(-Infinity)

0/0 = NaN
// 这是一个例外,零除零没有意义,所以直接返回了NaN
```

### 二进制浮点数和四舍五入错误
javascript采用了IEEE 754浮点数表示法(几乎所有现代编程语言所采用),这是一种二进制表示法,可以精确地表示分数,比如1/2,1/8和1/1024.
但是对于是十进制分数1/10,1/100等表现不好,二进制浮点数表示法并不能精确表示类似0.1这样简单的数字

javascript中的数字具有足够的精度,并可以极其近似于0.1.但事实是,数字不能精确表述以下问题
```javascript
var x = .3 - .2;
var y = .2 - .1;
x == y  // 返回false 两值不相等
x == .1 // false .3 - .2 不等于.1
y == .1 // true .2 - .1 等于 .1
```
在使用任何二进制浮点数的编程语言中都会有这个问题,这种计算结果可以胜任大多数的计算任务,只是在比较两个值是否相等的时候才会出现

### NaN
NaN,即非数值(Not a Number)是一个特殊的值,任何涉及与NaN的操作,结果都会返回NaN

其次,NaN与任何值都不相等,包括NaN本身,例如:

```javascript
NaN == NaN // false
NaN === NaN // false
```

### 数值转换
有3个函数可以把非数值转换为数值:Number(),parseInt(),parseFloat()

Number():可以用于转任何数据类型

parseInt()和parseFloat():专门用于把字符串转换成数值


## 文本
字符串是一组由16位值组成的不可变的有序序列,每个字符通常来自于Unicode字符集

## 布尔值
布尔值指代真或假

## null和undefined
+ null
  + null是javascript语言的关键字,它表示一个特殊值"空值"
  + 对null执行typeof运算,返回"Object"
  + 逻辑上null表示一个空对象的引用
+ undefined
  + 它是变量的取值.表明变量没有初始化
  + 对undefined执行typeof运算,返回"undefined"
+ undefined派生自null,尽管null和undefined是不同的,都表示"值的空缺"判断"=="两者相等."==="来区分它们
```javascript
typeof null; // object
typeof undefined; // undefined
null == undefined; // true
null === undefined // false
> 也可以认为undefined是系统级,null是程序级的,如何想赋值给变量或属性,最佳选择null <br/>
除了null或undefined之外的任何值都具有toString()方法

## 包装对象
javascript对象是一种复合值

比如:一个字符串并没有lenth属性或则方法,但是声明一个字符串时就可以调用,是因为当在调用时系统会自动把字符串包装成字符串对象
```javascript
var s ="hello world";
new String(s).length;
```
> 可通过String(),Number(),Boolean()构造函数来显式创建包装对象

## javascript 11个内置对象
+ Number
+ String
+ Boolean
+ Date
+ Math
+ RegExp
+ Array
+ Function
+ Object
+ Error
+ Global

## 类型转换
值         | 转字符串  | 转数字   |  转布尔
-----------|---------|---------|----------
undefined  |  'undefined'    |  NaN     |  false
null | 'null'  | 0  | false
true | "true"  | 1 |
false | "false" | 0 |
""  | | 0 | false
"1.2" | | 1.2 | true
"one" | | NaN | true
0 | "0" | | false
-0 | "0" | |false
NaN | "NaN" | | false
[] (任意数组) | "" | 0 | true
[9] | "9" | 9 | true

### 隐式转换
不同数据类型之间的数据在计算过程中会自动进行转换

+ 数字 + 字符串 ：将数字转换为字符串，整体结果为字符串
+ 数字 + 布尔类型：将布尔类型转换为数字，整体结果为 数字
+ 字符串 + 布尔类型：将 布尔类型转换为 字符串，整体结果为 字符串
+ 布尔类型+布尔类型：将 布尔类型转换为 数字，整体结果为 数字

> 注意：字符串和任意数据类型的数据相加运算时，结果都为字符串

### 显示转换
最简单的办法就是使用Number(),String(),Boolean(),当不通过new运算符调用这些函数时,它们
会作为类型转换函数

在代码中会经常见到这种类型转换的惯用法:
```javascript
x + '' //等价于String(x)
+x // 等价于Number(x),也可以写成x-0
!!x //等价于Boolean(x) 注意是双感叹号
```

## 变量作用域
在全局声明的变量拥有全局作用域,在javascript任何地方都可以访问到
在函数内声明的变量拥有局部作用域,只能在函数内访问,函数参数也是局部变量

+ 变量名的优先级
    + 局部变量高于同名全局变量
    + 参数变量高于同名全局变量
    + 局部变量高于同名参数变量

## 函数作用域和声明提前
在一些类似C语言的编程语言中,花括号内的每一段代码都具有各自的作用域,而且变量在声明它们的代码段之外是不可见的.称为块级作用域(block scope).
而在ES5中没有块级作用域,javascript取而带之的使用了函数作用域(function scope):变量在声明它们的函数体以及这个函数体嵌套的任意函数体内都是有定义的.

```javascript
var scope = 'global';
function f() {
  console.log(scope); // 输出"undefined",而不是'global'
  var scope = 'local'; //变量在这里赋值
  console.log(scope); // 输出"local"
}
```

## 作为属性的变量
当声明一个javascript全局变量时,实际上是定义了全局对象的一个属性,
当使用var声明一个变量时,创建的这个属性是不可配置的,也就是说这个变量无法通过delete运算符删除,
如果你没有使用严格模式并给出一个未声明的变量赋值的话,javascript会自动创建一个全局变量,以这种方式创建的变量是
全局变量的正常的可配置属性,并可以删除它们

```javascript
var truevar = 1; //声明一个不可删除的全局变量
fakevar = 2; //创建全局对象的一个可删除的属性
this.fakevar2 = 3; //同上
delete truevar; // false 变量并没有被删除
delete fakevar; // true 变量被删除
delete fakevar2; //true 变量被删除
```

> javascript全局变量是全局对象的属性
