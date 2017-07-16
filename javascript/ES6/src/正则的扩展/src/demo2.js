// 字符串的正则方法
// ES6将这4个方法, 在语言内部全部调用RegExp的实例方法, 从而做到所有与正则相关的方法, 全部定义在RegExp对象上
//  String.prototype.match 调用 RegExp.prototype[Symbol.match]
//  String.prototype.replace 调用 RegExp.prototype[Symbol.replace]
//  String.prototype.search 调用 RegExp.prototype[Symbol.search]
//  String.prototype.split 调用 RegExp.prototype[Symbol.split]
