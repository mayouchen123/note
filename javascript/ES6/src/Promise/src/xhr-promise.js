'use strict'
// 编写Promise代码
{
  // 创建Promise对象
  // 1.new Promise()返回一个Promise对象
  // 2.在fn中指定异步等处理
  //   处理结果正常的话,调用resolve(处理结果值)
  //   处理结果错误的话,调用reject(Error对象)
  //
  // 任务是用Promise来通过异步处理方式来获取XMLHttpRequest(XHR)的数据

  // 创建XHR的promise对象
  // 首先,创建一个用Promise把XHR处理包装起来名为getURL的函数
  function getURL (URL) {
    return new Promise(function (resolve, reject) {
      let req = new window.XMLHttpRequest()
      req.open('GET', URL, true)
      req.onload = function () {
        if (req.status === 200) {
          resolve(req.responseText)
        } else {
          reject(new Error(req.statusText))
        }
      }
      req.onerror = function () {
        reject(new Error(req.statusText))
      }
      req.send()
    })
  }
  let URL = 'http://music.baidu.com/data/music/links?songIds=123719725'
  getURL(URL).then(function onFulfilled (value) {
    console.log(value)
  }).catch(function onRecject (value) {
    console.log(value)
  })
  // 需要在浏览器端执行在node端失效
}
