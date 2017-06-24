'use strict';

{
  // 函数参数的默认值 下面两种写法的区别
  // 写法一
  var m1 = function m1() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$x = _ref.x,
        x = _ref$x === undefined ? 0 : _ref$x,
        _ref$y = _ref.y,
        y = _ref$y === undefined ? 0 : _ref$y;

    return [x, y];
  };

  // 写法二
  var m2 = function m2() {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { x: 0, y: 0 },
        x = _ref2.x,
        y = _ref2.y;

    return [x, y];
  };

  console.log(m1());;
  console.log(m2());;
}