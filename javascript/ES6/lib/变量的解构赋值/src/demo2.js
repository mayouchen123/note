'use strict';

// 对象的解构赋值

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

{
  var _foo$bar = { foo: 'aaa', bar: 'bbb' },
      foo = _foo$bar.foo,
      bar = _foo$bar.bar;

  console.log(foo, bar); // aaa bbb

  var _foo$bar2 = { foo: 'aaa', bar: 'bbb' },
      _baz = _foo$bar2.baz;

  console.log(_baz); // undefined
}

{
  //如果变量名与属性不一致,必须写成下面这样
  var _foo$bar3 = { foo: 'aaa', bar: 'bbb' },
      baz = _foo$bar3.foo;

  console.log(baz); // aaa

  var _obj = { first: 'hello', last: 'world' };
  var f = _obj.first,
      l = _obj.last;

  console.log(f, l); // hello world
}

{
  //嵌套对象解构
  var obj = {
    p: ['hello', { y: 'world' }]
  };

  var _obj$p = _slicedToArray(obj.p, 2),
      x = _obj$p[0],
      y = _obj$p[1].y;

  console.log(x, y); // hello world
}

{
  // 对象解构默认值
  var _ref = {},
      _ref$x = _ref.x,
      x = _ref$x === undefined ? 3 : _ref$x;

  console.log(x); // 3

  var _x = { x: 1 },
      x = _x.x,
      _x$y = _x.y,
      y = _x$y === undefined ? 5 : _x$y;

  console.log(x, y); // 1 5

  var _ref2 = {},
      _ref2$message = _ref2.message,
      msg = _ref2$message === undefined ? "hello world" : _ref2$message;

  console.log(msg); // hello world
}

{
  // 默认值生效的条件是,对象的属性值严格等于undefined
  var _x2 = { x: undefined },
      _x2$x = _x2.x,
      x = _x2$x === undefined ? 3 : _x2$x;

  console.log(x); // 3

  var _y = { y: null },
      _y$y = _y.y,
      y = _y$y === undefined ? 3 : _y$y;

  console.log(y); // null
}

{
  // 对于已经声明的变量解构,需要非常小心
  var x;
  //{x} = {x: 1}; // SyntaxError

  // 正确的写法
  var _x3 = { x: 1 };
  x = _x3.x;

  console.log(x); // 1
}