// construct方法用于拦截new命令，下面是拦截对象的写法

const person = new Proxy(function () {}, {
  construct (target, args) {
    console.log(`args ${Array.from(args).join(',')}`)
    return {value: args[0] * 10}
  }
})

console.log(new person(1, 2, 3))
