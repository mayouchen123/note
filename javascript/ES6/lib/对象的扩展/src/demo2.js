'use strict';

// Object.assign()方法有很多用处

{
  // 为对象添加属性
  // 为对象添加方法
  var Info = {};

  Object.assign(Info, {
    name: 'default name',
    say: function say() {
      console.log(this.name);
    }
  });
  console.log(Info);
  Info.say();
}

{
  // 克隆对象 注意这里是浅拷贝 拷贝对象实例上的属性和方法
  var peterInfo = {
    name: 'peter'
  };
  var newPeterInfo = Object.assign({}, peterInfo);
  console.log(newPeterInfo);
}

{
  // 合并多个对象
  var obj1 = { name: 'peter' };
  var obj2 = { age: 20 };
  var obj3 = { sex: '男' };
  var merge = function merge(target) {
    for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      sources[_key - 1] = arguments[_key];
    }

    return Object.assign.apply(Object, [target].concat(sources));
  };
  var newObj = merge(obj1, obj2, obj3);
  console.log(newObj);
}

{
  var processContent = function processContent(options) {
    options = Object.assign({}, DEFAULTS, options);
    console.log(options);
  };

  // 为属性指定默认值
  var DEFAULTS = {
    url: {
      host: 'pointline.github.io',
      port: 8080
    }
  };

  processContent();
}