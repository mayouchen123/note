'use strict';

{
  var test = new RegExp('fff', 'i');
  console.log(test);

  var test1 = new RegExp(/fff/i);
  console.log(test1);

  var test2 = new RegExp(/fff/, 'i');
  console.log(test2);
}

{
  console.log(Object.keys(RegExp.prototype));
}