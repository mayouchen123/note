// Class的继承
// 类的prototype属性和__proto__属性

{
  // ES5
  function C () {

  }
  function D () {

  }
  Object.setPrototypeOf(D.prototype, C.prototype)
  console.log(D.prototype.__proto__ === C.prototype)
  console.log(D.__proto__ === Function.prototype)
  //
  class A {

  }

  class B extends A {

  }

  console.log(Object.getPrototypeOf(B))
  console.log(Reflect.getPrototypeOf(B))
  console.log(B.prototype)
  console.log(B.prototype === A.prototype)
  console.log(B.__proto__ === A)
}
