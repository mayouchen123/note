'use strict';

{
  let test = new RegExp('fff', 'i');
  console.log(test);

  let test1 = new RegExp(/fff/i);
  console.log(test1);

  let test2 = new RegExp(/fff/, 'i');
  console.log(test2);
}

{
  console.log(Object.keys(RegExp.prototype));
}
