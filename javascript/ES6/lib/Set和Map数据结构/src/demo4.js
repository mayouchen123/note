'use strict';

{
  // Map
  var m = new Map();
  var o = { p: 'hello world' };

  m.set(o, 'content');
  console.log(m.get(o));

  console.log(m.has(o)); // true
  console.log(m.delete(o)); // true
  console.log(m.has(o)); // false
}

{
  // Map也可以接受一个数组作为参数,该数组的成员是一个个表示键值对的数组
  var items = new Map([['name', 'peter'], ['age', '20']]);

  var map = new Map();

  items.forEach(function (key, value) {
    return map.set(key, value);
  });
  console.log(map);
}