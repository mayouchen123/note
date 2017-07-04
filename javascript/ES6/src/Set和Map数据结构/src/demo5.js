
// Map 实例的属性和操作方法
// 属性 size
// 方法 set(key, value) get(key) has(key) delete(key) clear()
{
  const map = new Map();
  map.set('name', 'peter');
  map.set('age', 20);
  console.log(map.size);

  console.log(map.has('name'));
  console.log(map.get('name'));
  map.clear();
  console.log(map.has('name'));
}
