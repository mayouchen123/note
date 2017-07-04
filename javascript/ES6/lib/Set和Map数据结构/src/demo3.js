'use strict';

// 遍历应用

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

{
	var set = new Set(['red', 'green', 'blue']);
	var arr = [].concat(_toConsumableArray(set));
	console.log(arr);
}

{
	// 扩展运算符和Set结构结合,可以去除数组的重复成员
	var _arr = [1, 2, 3, 3, 4];
	var unique = [].concat(_toConsumableArray(new Set(_arr)));
	console.log(unique);
}