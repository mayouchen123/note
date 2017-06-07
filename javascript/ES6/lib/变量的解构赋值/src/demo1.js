'use strict';

// 数组嵌套解构

{
  var foo = 1,
      bar = 2,
      baz = 3;

  console.log(foo, bar, baz); // 1 2 3

  var _ref = ['foo', 'bar', 'baz'],
      third = _ref[2];

  console.log(third); // baz

  var _ref2 = [1, 2, 3],
      _x = _ref2[0],
      _y = _ref2[2];

  console.log(_x, _y); // 1 3

  var head = 1,
      tail = [2, 3, 4];

  console.log(head); // 1
  console.log(tail); // [2, 3, 4]
}

// 不完全解构,解构依然可以工作
{
  var _ref3 = [1, 2, 3],
      _x2 = _ref3[0],
      _y2 = _ref3[1];

  console.log(_x2, _y2); //1 2

  var a = 1,
      _ref4 = [2, 3],
      b = _ref4[0],
      d = 4;

  console.log(a, b, d); // 1 2 4
}

//解构赋值允许指定默认值
{
  var _ref5 = [],
      _ref5$ = _ref5[0],
      _foo = _ref5$ === undefined ? true : _ref5$;

  console.log(_foo); // true

  var _ref6 = ['a'],
      x = _ref6[0],
      _ref6$ = _ref6[1],
      y = _ref6$ === undefined ? 'b' : _ref6$;

  console.log(x, y); //a b

  var z = 'z',
      _undefined = undefined,
      w = _undefined === undefined ? 'c' : _undefined;

  console.log(z, w); // z c
}

{
  var _undefined2 = undefined,
      x = _undefined2 === undefined ? 1 : _undefined2;

  console.log(x); // 1

  var _ref7 = null,
      y = _ref7 === undefined ? 1 : _ref7;

  console.log(y); // null
}