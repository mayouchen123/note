'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

{
  // 字符串解构赋值
  var _hello = 'hello',
      _hello2 = _slicedToArray(_hello, 5),
      a = _hello2[0],
      b = _hello2[1],
      c = _hello2[2],
      d = _hello2[3],
      e = _hello2[4];

  console.log(a, b, c, d, e); // h e l l o
}

{
  var _hello3 = 'hello',
      len = _hello3.length;

  console.log(len); // 5
}