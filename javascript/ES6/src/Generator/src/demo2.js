// 通过generator部署Iterator

{
  let obj = {}
  obj[Symbol.iterator] = function * () {
    yield 1
    yield 2
    yield 3
  }
  for (let key of obj) {
    console.log(`key: ${key}`)
  }
}
