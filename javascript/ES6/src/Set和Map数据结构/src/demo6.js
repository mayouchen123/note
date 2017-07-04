// Map的遍历顺序就是插入顺序
{
  const map = new Map([
    ['name', 'peter'],
    ['age', 20],
  ]);

  for (let key of map.keys()) {
    console.log(key);
  }

  for (let value of map.values()) {
    console.log(value);
  }

  for (let [key, value] of map.entries()) {
    console.log(key, value);
  }

// 等同于使用map.entries()
  for (let [key, value] of map) {
    console.log(key, value);
  }

  console.log([...map.values()]);
}
