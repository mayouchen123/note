
{
// Map
  const m = new Map()
  const o = { p: 'hello world' }

  m.set(o, 'content')
  console.log(m.get(o))

  console.log(m.has(o)) // true
  console.log(m.delete(o)) // true
  console.log(m.has(o)) // false
}

{
// Map也可以接受一个数组作为参数,该数组的成员是一个个表示键值对的数组
  const items = new Map([
    ['name', 'peter'],
    ['age', '20']
  ])

  const map = new Map()

  items.forEach((key, value) => map.set(key, value))
  console.log(map)
}
