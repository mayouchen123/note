'use strict';

{
  // 箭头函数有几个使用注意点
  // 1.函数体内的this对象,就是定义所在的对象,而不是使用时所在的对象
  function foo(){
    setTimeout(() => {
      console.log('id:', this.id);
    }, 100);
  }

  foo.call({id: 20});
}
