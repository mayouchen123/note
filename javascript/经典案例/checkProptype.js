// 检查对象属性是自有属性还是共有属性

'use strict';

(function () {
  function Demo(name) {
    this.name = name;
  }
  Demo.prototype.age = '11';

  let newDemo = new Demo('peter');
  console.log(newDemo);
  console.log(newDemo.age);

  function checkProp(obj, pname) {
      // return Object().hasOwnProperty.call(obj, pname) ? '自有属性' :
      //   !Object().hasOwnProperty.call(obj, pname) && obj[pname] !== undefined ? '共有属性' :
      //   `没有${pname}属性`;
    let checkName;
    if (Object().hasOwnProperty.call(obj, pname)) {
      checkName = '自有属性';
    } else if (Object().hasOwnProperty.call(obj, pname) && obj[pname] !== undefined) {
      checkName = '共有属性';
    } else {
      checkName = `没有${pname}属性`;
    }
    return checkName;
  }
  console.log(checkProp(newDemo, 'name'));
  console.log(checkProp(newDemo, 'age'));
  console.log(checkProp(newDemo, 'sex'));
}());
