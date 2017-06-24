'use strict';

{
  // codePointAt()
  var s = '𠮷a';
  console.log(s.length); // 3个字节  其中'𠮷'占4个字节   'a'占一个字节

  console.log(s.codePointAt(0)); // 获取 '𠮷' 前2个字节 码点
  console.log(s.codePointAt(1)); // 获取 '𠮷' 后2个字节 码点
  console.log(s.codePointAt(2)); // 获取 'a' 最后2个字节 码点


  console.log(s.codePointAt(0).toString(16));
  console.log(s.codePointAt(1).toString(16));
  console.log(s.codePointAt(2).toString(16));
}

{
  var s = '𠮷a';
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = s[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var ch = _step.value;

      console.log(ch.codePointAt(0).toString(16));
    }
    // 20bb7
    // 61
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}