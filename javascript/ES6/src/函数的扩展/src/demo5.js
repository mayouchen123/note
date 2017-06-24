'use strict';

{
  // 箭头函数
  let f = v => v;

  let h = () => 5;
  console.log(h());

  let sum = (num1, num2) => num1 + num2;
  console.log(sum(2,4));
}

{
  // 箭头函数直接返回对象
  let getTempItem = (id) => ({id: id});
  console.log(getTempItem(20));
}

{
  // 箭头函数与变量解构结合使用
  let fullname = ({firstname = "default firstname", lastname = 'default lastname'} = {}) => firstname + " " + lastname;
  console.log(fullname({firstname: 'peter', lastname: 'xu'}));
}

{
  // 箭头函数简化回调函数
  let arr = [1, 2, 3];
  let newArr = arr.map((x) => x * x);

  console.log(newArr);
  console.log(...newArr);
  console.log([...newArr]);

}
