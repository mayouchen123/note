'use strict';

{
  var s = 'Hello world!';

  // 判断参数字符串是否在源字符串开头
  console.log(s.startsWith('Hello')); // true
  // 判断参数字符串是否在源字符串尾部
  console.log(s.endsWith('!'));// true
  // 判断参数字符串是否在源字符串中
  console.log(s.includes('o')); // true
}

{
  var s = 'Hello world!';

  console.log(s.startsWith('world', 6)); // true
  // endsWith()的行为与其他两个方法有所不同.它针对前个字符
  console.log(s.endsWith('Hello', 5)); // true
  console.log(s.includes('Hello', 6)); // false
}
