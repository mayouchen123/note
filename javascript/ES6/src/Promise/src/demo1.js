// 实际上Promise中.then()异步

{
  let promise = new Promise(function (resolve) {
    console.log('inner promise') // 1
    resolve('peter')
  })

  promise.then(function (value) {
    console.log(value) // 3
  })

  console.log('outer promise') // 2
}
