// 长轮询

{
  let ajax = function * () {
    yield new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve({code: 0})
      }, 200)
    })
  }

  let pull = function () {
    let generator = ajax()
    let step = generator.next()
    // console.log(step)  返回generator对象 {value: Promise实例, done:false}
    step.value.then(function (d) {
      if (d.code !== 0) {
        setTimeout(function () {
          console.log('wait')
          pull()
        }, 1000)
      } else {
        console.log(d)
      }
    })
  }

  pull()
}
