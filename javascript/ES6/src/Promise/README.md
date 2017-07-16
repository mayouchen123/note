# Promises 简介
在 ES6 Promises 标准中定义的API还不是很多。

目前大致有下面三种类型。
## Constructor
Promise类似于 XMLHttpRequest，从构造函数 Promise 来创建一个新建新promise对象作为接口。
要想创建一个promise对象、可以使用new来调用Promise的构造器来进行实例化。

```javascript
var promise = new Promise(function(resolve, reject) {
    // 异步处理
    // 处理结束后、调用resolve 或 reject
});
```

## Instance Method
对通过new生成的promise对象为了设置其值在 resolve(成功) / reject(失败)时调用的回调函数 可以使用promise.then() 实例方法

```javascript
promise.then(onFulfilled, onRejected)
```

+ resolve(成功)时
      onFulfilled 会被调用

+ reject(失败)时
      onRejected 会被调用
onFulfilled、onRejected 两个都为可选参数。

promise.then 成功和失败时都可以使用。 另外在只想对异常进行处理时可以采用 promise.then(undefined, onRejected) 这种方式，只指定reject时的回调函数即可。 不过这种情况下
promise.catch(onRejected) 应该是个更好的选择。

```javascript
promise.catch(onRejected)
```

## Static Method
像 Promise 这样的全局对象还拥有一些静态方法。

包括 Promise.all() 还有 Promise.resolve() 等在内，主要都是一些对Promise进行操作的辅助方法。
