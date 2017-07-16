// Object.is()
// ES5比较两个值是否相等，只有两个运算符：相等运算符（==）和严格相等运算符（===）。它们都有缺点，
// 前者会自动转换数据类型，后者的NaN不等于自身，以及+0等于-0

console.log(Object.is('foo', 'foo')) // true

console.log(Object.is({}, {}))

// 不同之处只有两个：一是+0不等于-0，二是NaN等于自身。

console.log(+0 === -0) // true
console.log(NaN === NaN) // false

console.log(Object.is(+0, -0)) // false
console.log(Object.is(NaN, NaN)) // true
