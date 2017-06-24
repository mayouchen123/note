'use strict';

{
  // 函数参数默认值
  var log = function log() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'hello';
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'world';

    console.log(x + ' ' + y);
  };

  log();
}

{
  // 构造函数默认参数
  var Point = function Point() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    this.x = x;
    this.y = y;
  };

  var p = new Point();
  console.log(p);
}

{
  // 与解构赋值默认值结合使用
  var Info = function Info(_ref) {
    var _ref$name = _ref.name,
        name = _ref$name === undefined ? 'default name' : _ref$name,
        _ref$age = _ref.age,
        age = _ref$age === undefined ? 20 : _ref$age;

    this.name = name;
    this.age = age;
  };

  var defaultInfo = new Info({});
  console.log(defaultInfo);

  var peterInfo = new Info({ name: 'peter', age: 21 });
  console.log(peterInfo);
}