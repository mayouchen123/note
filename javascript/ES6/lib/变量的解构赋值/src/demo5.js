'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

{
  // 解构的用途

  // 交换两变量的值
  var x = 1;
  var y = 2;
  var _ref = [y, x];
  x = _ref[0];
  y = _ref[1];

  console.log(x, y); // 2 1
}

{
  // 从函数返回多个值 解构赋值

  // 返回一个数组
  var example1 = function example1() {
    return [1, 2, 3];
  };

  // 1 2 3

  // 返回对象
  var example2 = function example2() {
    return {
      foo: 1,
      bar: 2
    };
  };

  var _example = example1(),
      _example2 = _slicedToArray(_example, 3),
      a = _example2[0],
      b = _example2[1],
      c = _example2[2];

  console.log(a, b, c);
  var _example3 = example2(),
      foo = _example3.foo,
      bar = _example3.bar;

  console.log(foo, bar); // 1 2
}

{
  // 解构提取JSON数据
  var jsonData = {
    id: 42,
    status: 'ok',
    data: [867, 5309]
  };

  var id = jsonData.id,
      status = jsonData.status,
      number = jsonData.data;

  console.log(id, status, number); // 42 'ok' [867, 5309]
}

{
  // 函数传入数组默认值
  var getInfo = function getInfo(_ref2) {
    var _ref3 = _slicedToArray(_ref2, 3),
        _ref3$ = _ref3[0],
        x = _ref3$ === undefined ? 'tom' : _ref3$,
        _ref3$2 = _ref3[1],
        y = _ref3$2 === undefined ? '18' : _ref3$2,
        _ref3$3 = _ref3[2],
        z = _ref3$3 === undefined ? 'man' : _ref3$3;

    return x + " " + y + " " + z;
  };
  var jack = getInfo(['jack', '20', 'man']);
  console.log(jack);
}