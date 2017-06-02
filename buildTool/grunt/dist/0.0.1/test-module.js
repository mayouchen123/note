/* 这里是concat添加的属性banner */ 
console.log('test.js');
// ---- 
'use strict';
function Product(productName, productPrice, productNum){
  this._productName = productName;
  this._productPrice = productPrice;
  this._productNum = productNum;
}
Product.prototype.concat = function(){
  return this._productName + ' - ' + this._productPrice + ' - ' + this._productNum;
}
var simpleProduct = new Product('coffee','10美元',20);
console.log(simpleProduct.concat());
/* 这里是concat添加的属性footer */