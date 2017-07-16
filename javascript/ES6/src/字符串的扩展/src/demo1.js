'use strict'

{
  // codePointAt()
  let s = '𠮷a'
  console.log(s.length) // 3个字节  其中'𠮷'占4个字节   'a'占一个字节

  console.log(s.codePointAt(0)) // 获取 '𠮷' 前2个字节 码点
  console.log(s.codePointAt(1)) // 获取 '𠮷' 后2个字节 码点
  console.log(s.codePointAt(2)) // 获取 'a' 最后2个字节 码点

  console.log(s.codePointAt(0).toString(16))
  console.log(s.codePointAt(1).toString(16))
  console.log(s.codePointAt(2).toString(16))
}

{
  let s = '𠮷a'
  for (let ch of s) {
    console.log(ch.codePointAt(0).toString(16))
  }
  // 20bb7
  // 61
}
