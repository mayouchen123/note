// Class的静态方法

{
  class Info {
    static classMethod () {
      return 'hello'
    }
  }

  console.log(Info.classMethod())

  // 父类的静态方法, 可以被子类继承

  class Foo extends Info {
    static classMethod () {
      return super.classMethod() + ', too'
    }
  }
  console.log(Foo.classMethod())
}
