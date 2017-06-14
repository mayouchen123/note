'use strict';

{
    // 字符串的遍历器接口
    let name = 'peter';
    for (let codePoint of name) {
      console.log(codePoint);
    }

}

{
  var text = String.fromCodePoint(0x20BB7);

  for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
  }
  // " "
  // " "

  // for...of 会自动识别大于0xFFFF的码点
  for (let i of text) {
    console.log(i);
  }
  // "𠮷"
}
