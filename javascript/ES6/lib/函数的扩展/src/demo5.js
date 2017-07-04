'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

{
  // 箭头函数
  var f = function f(v) {
    return v;
  };

  var h = function h() {
    return 5;
  };
  console.log(h());

  var sum = function sum(num1, num2) {
    return num1 + num2;
  };
  console.log(sum(2, 4));
}

{
  // 箭头函数直接返回对象
  var getTempItem = function getTempItem(id) {
    return { id: id };
  };
  console.log(getTempItem(20));
}

{
  // 箭头函数与变量解构结合使用
  var fullname = function fullname() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$firstname = _ref.firstname,
        firstname = _ref$firstname === undefined ? "default firstname" : _ref$firstname,
        _ref$lastname = _ref.lastname,
        lastname = _ref$lastname === undefined ? 'default lastname' : _ref$lastname;

    return firstname + " " + lastname;
  };
  console.log(fullname({ firstname: 'peter', lastname: 'xu' }));
}

{
  var _console;

  // 箭头函数简化回调函数
  var arr = [1, 2, 3];
  var newArr = arr.map(function (x) {
    return x * x;
  });

  console.log(newArr);
  (_console = console).log.apply(_console, _toConsumableArray(newArr));
  console.log([].concat(_toConsumableArray(newArr)));
}