'use strict';

{
  // 解构的用途

  // 交换两变量的值
  let x = 1;
  let y = 2;
  [x, y] = [y, x];
  console.log(x, y); // 2 1
}

{
  // 从函数返回多个值 解构赋值

  // 返回一个数组
  function example1() {
    return [1, 2, 3];
  }

  var [a, b, c] = example1();
  console.log(a, b, c); // 1 2 3

  // 返回对象
  function example2() {
    return {
      foo: 1,
      bar: 2
    }
  }

  var {foo, bar} = example2();
  console.log(foo, bar); // 1 2
}

{
  // 解构提取JSON数据
  var jsonData = {
    id: 42,
    status: 'ok',
    data: [867, 5309]
  }

  let {id, status, data:number} = jsonData;
  console.log(id, status, number); // 42 'ok' [867, 5309]
}

{
  // 函数传入数组默认值
  let getInfo = function([x = 'tom', y = '18', z = 'man']){
    return x + " " + y + " " + z;
  }
  let jack = getInfo(['jack', '20', 'man']);
  console.log(jack);

  let jack2 = getInfo(['jack', '20']);
  console.log(jack2);

  // 函数传入对象默认值
  let getInfo2 = function({name = 'peter', age = 20, sex = 'man'}){
    return name + " " + age + " " + sex;
  }
  let peter = getInfo2({});
  console.log(peter);

  let bob = getInfo2({name:'bob', age:21, sex:'woman'});
  console.log(bob);
}
