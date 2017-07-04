'use strict';
// Class的基本用法

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

{
  // 创建一个简单Class对象
  var Info = function () {
    function Info(name, age) {
      _classCallCheck(this, Info);

      this.name = name;
      this.age = age;
    }

    _createClass(Info, [{
      key: 'toString',
      value: function toString() {
        console.log('\u6211\u7684\u540D\u5B57' + this.name + ', \u6211\u7684\u5E74\u9F84' + this.age);
      }
    }]);

    return Info;
  }();

  var peterInfo = Reflect.construct(Info, ['peter', 20]);
  console.log(peterInfo);
  peterInfo.toString();

  var tel = _defineProperty({}, Symbol.for('tel'), 110);

  // 使用Object.assign()合并Info和tel对象
  Object.assign(peterInfo, tel

  // 为对象添加方法 使用 Object.assign()
  );Object.assign(Info.prototype, {
    say: function say() {
      console.log('\u6211\u7684\u540D\u5B57' + this.name + ', \u6211\u7684\u5E74\u9F84' + this.age);
    }
  });
  peterInfo.say

  // 类的内部所有定义的方法, 都是不可美枚举的
  ();console.log(Reflect.ownKeys(peterInfo));
}