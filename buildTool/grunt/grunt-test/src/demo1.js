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
