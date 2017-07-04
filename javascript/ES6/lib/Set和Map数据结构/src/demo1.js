'use strict';

// Set数据结构

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

{
  var _console;

  var set = new Set([1, 2, 3, 4, 4]);
  console.log([].concat(_toConsumableArray(set))); // [1, 2, 3, 4]
  console.log(set.size);
  (_console = console).log.apply(_console, _toConsumableArray(set));
}

{
  // Set 实例的属性和方法
  // 属性: constructor size
  // 方法: add delete has clear
  var _set = new Set();
  _set.add(1).add(2).add(2);

  console.log(_set.size); // 2
  console.log(_set.has(1)); // true
  console.log(_set.delete(1)); // true
  console.log(_set.has(1)); // false
}