# 变量的解构赋值

## 数组的解构赋值
ES6允许按照一定模式,从数组和对象中提取值,对变量进行赋值,这被称为解构(Destructuring)

以前,为变量赋值,只能直接指定值

```javascript
var a = 1;
var b = 2;
var c = 3;
```

ES6允许被写成下面这样:

```javascript
var [a, b, c] = [1, 2, 3];
```
上面代码表示,可以从数组中提取值,按照对应位置,对变量赋值

本质上,这种写法属于"模式匹配",只要等号两边的模式相同,左边的变量就会被赋予对应的值

下面是一些使用嵌套数组进行解构的例子:

```javascript
let [foo, [[bar], baz]] = [1, [[2], 3]];
console.log(foo, bar, baz); // 1 2 3

let [,,third] = ['foo', 'bar', 'baz'];
console.log(third); // baz

let [x, , y] = [1, 2, 3];
console.log(x, y); // 1 3

let [head, ...tail] = [1, 2, 3, 4];
console.log(head); // 1
console.log(tail); // [2, 3, 4]
```

> 如果解构不成功,变量的值就等于undefined

另一种情况是不完全解构,即等号左边的模式,只匹配一部分的等号右边的数组.这种情况,解构依然可以成功

```javascript
let [x, y] = [1, 2, 3];
console.log(x, y); //1 2

let [a, [b], d] = [1, [2, 3], 4];
console.log(a, b, d); // 1 2 4
```

如果对undefined或null进行解构,会报错

```javascript
// 报错
let [foo] = undefined;
let [foo] = null;
```

这是因为解构只能用于数组或对象.其他原始类型的值都可以转为相应的对象,但是undefined和null不能转为对象,因此报错

## 默认值
解构赋值允许指定默认值

```javascript
let [foo = true] = [];
console.log(foo); // true

var [x, y = 'b'] = ['a'];
console.log(x, y); //a b

var [z, w = 'c'] = ['z', undefined];
console.log(z, w); // z c
```

> 注意:ES6内部使用严格相等运算符(===),判断一个位置是否有值.所以,如果一个数组成员不严格相等undefined,默认值是不会生效的

```javascript
var [x = 1] = [undefined];
console.log(x); // 1

var [y = 1] =[null];
console.log(y); // null
```
上面代码中,如果一个数组成员是null,默认值就不会生效,因为null不严格等于undefined

如果默认值是一个表达式,那么这个表达式是惰性求值,即只有在用到的时候,才会求值

```javascript
function f(){
  console.log('aaa');
}
let [x = f()] = [1];
```

默认值可以引用解构赋值的其他变量,但该变量必须已经声明

```javascript
let [x = 1, y = x] = []; // x = 1; y = 1
let [x = 1, y = x] = [2]; // x = 2; y = 2
let [x = 1, y = x] = [1, 2]; / x = 1; y =2
let [x = y, y = 1] = []; // ReferenceError
```
上面最后一个表达式之所以会报错,是因为x用到默认值y时,y还没有声明

解构赋值不仅适用于var命令,也适用于let命令和const命令



## 对象的解构赋值
解构不仅可以用于数组,还可以用于对象

```javascript
var {foo, bar} = {foo: 'aaa', bar: 'bbb'};
console.log(foo,bar); // aaa bbb
```

> 对象的解构与数组有一个重要的不同.数组的元素是按次序排列,变量的取值由它的位置决定;而对象的属性没有次序,变量必须与属性同名,<br/>
才能取到正确的值

```javascript
let {baz} = {foo: 'aaa', bar: 'bbb'};
console.log(baz); // undefined
```

如果变量名与属性不一致,必须写成下面这样:

```javascript
var {foo: baz} = {foo: 'aaa', bar: 'bbb'};
console.log(baz); // aaa

let obj = {first: 'hello', last: 'world'};
let {first: f, last: l} = obj;
console.log(f, l); // hello world
```

> 注意，采用这种写法时，变量的声明和赋值是一体的。对于let和const来说，变量不能重新声明，所以一旦赋值的变量以前声明过，就会报错。

和数组一样,解构也可以用与嵌套的对象

```javascript
var obj = {
  p: [
    'hello',
    {y: 'world'}
  ]
};

var {p:[x, {y}]} = obj;
console.log(x, y); // hello world
```

对象的解构也可以指定默认值

```javascript
var {x = 3} = {};
console.log(x); // 3

var {x, y = 5} = {x: 1};
console.log(x, y); // 1 5

var {message: msg = "hello world"} = {};
console.log(msg); // hello world
```

默认值生效的条件是,对象的属性值严格等于undefined

```javascript
var {x = 3} = {x: undefined};
console.log(x); // 3

var {y = 3} = {y: null};
console.log(y); // null
```

> 如果要将一个已经声明的变量用于解构赋值,必须非常小心

```javascript
var x;
//{x} = {x: 1}; // SyntaxError

// 正确的写法
({x} = {x:1});
console.log(x); // 1
```

上面代码的写法会报错,因为javascript引擎会将{x}理解成一个代码块,从而发生语法错误.只有不将大括号写在行首,避免javascript将其解释为
代码块,才能解决这个问题


## 字符串的解构赋值
字符串也可以解构赋值.这是因为此时,字符串被转换成了一个类似数组的对象

```javascript
let [a, b, c, d, e] = 'hello';
console.log(a, b, c, d, e); // h e l l o
```

类似数组的对象都有一个lenght属性,因此还可以对这个属性解构赋值

```javascript
let {length: len} = 'hello';
console.log(len); // 5
```


## 函数参数的解构赋值
函数的参数也可以使用解构

```javascript
function add([x, y]) {
    return x + y;
}

console.log(add([1, 2])); // 3
```

上面代码中,函数add的参数实际上不是一个数组,而是通过解构得到的变量x和y,函数参数的解构也可以使用默认值

```javascript
function move({x = 0, y = 0} = {}) {
  return [x, y];
}

console.log(move({x: 3, y: 8})); // [3, 8]
console.log(move({x: 3})); // [3, 0]
console.log(move({})); // [0, 0]
console.log(move()); // [0, 0]
```


## 圆括号问题
解构赋值虽然很方便,但是解构起来并不容易.对于编译器来说,一个式子到底是模式,还是表达式,没有办法从一开始就知道,必须解构到(或解构不到)
等号才能知道

由此带来的问题是,如果模式中出现圆括号怎么处理.ES6的规则是,只要有可能导致解构的歧义,就不得使用圆括号.

但是,这条规则实际上不那么容易判别,处理起来想当麻烦.因此,建议只要有可能,就不要在模式中放置圆括号


## 解构的用途
变量的解构赋值用途很多

### 交换变量的值

```javascript
let x = 1;
let y = 2;
[x, y] = [y, x];
console.log(x, y); // 2 1
```
上面代码变换变量x和y的值,这样的写法不仅简洁,而且易读,语义非常清晰

### 从函数返回多个值
函数只能返回一个值,如果要返回多个值,只能将它们放在数组或对象里返回.有了解构赋值,取出这些值就非常方便

```javascript
// 返回一个数组
function example1() {
  return [1, 2, 3];
}

var [a, b, c] = example1();
console.log(a, b, c); // 1 2 3

// 返回对象
function example2() {
  return {
    foo: 1,
    bar: 2
  }
}

var {foo, bar} = example2();
console.log(foo, bar); // 1 2
```

### 函数参数的定义
解构赋值可以方便地将一组参数与变量名对应起来

```javascript
// 参数是一组有次序的值
function f([x, y, z]){
  ...
}
f([1, 2, 3]);

// 参数是一组无次序的值
function f([x, y, z]) {
  ...
}
f([x:1, y:2, z:3]);
```

### 提取JSON数据
解构赋值对提取JSON对象中的数据,尤其有用

```javascript
var jsonData = {
  id: 42,
  status: 'ok',
  data: [867, 5309]
}

let {id, status, data:number} = jsonData;
console.log(id, status, number); // 42 'ok' [867, 5309]
```

### 函数参数的默认值
指定参数的默认值,就避免了在函数体内部再写var foo = config.foo || 'default foo';这样的语句

### 遍历Map结构

## 输入模块的指定方法
加载模块时,往往需要指定输入那些方法.解构赋值使得输入语句非常清晰

```javascript
const {SourceMapConsumer, SourceNode} = require('source-map');
```
