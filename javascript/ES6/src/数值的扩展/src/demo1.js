// Number.isFinite()
Number.isFinite(15) // true
Number.isFinite(0.8) // true
Number.isFinite(NaN) // false
Number.isFinite(Infinity) // false
Number.isFinite(-Infinity) // false
Number.isFinite('foo') // false
Number.isFinite('15') // false
Number.isFinite(true) // false

// Number.isNaN()
Number.isNaN(NaN) // true
Number.isNaN(15) // false
Number.isNaN('15') // false
Number.isNaN(true) // false
Number.isNaN(9 / NaN) // true
Number.isNaN('true' / 0) // true
Number.isNaN('true' / 'true') // true

// Number.parseInt() and Number.parsefloat()
// ES5的写法
parseInt('12.34') // 12
parseFloat('123.45#') // 123.45

// ES6的写法
Number.parseInt('12.34') // 12
Number.parseFloat('123.45#') // 123.45

// Number.isInteger() 判断一个值是否为整数
Number.isInteger(25) // true
Number.isInteger(25.0) // true
Number.isInteger(25.1) // false
Number.isInteger('15') // false
Number.isInteger(true) // false
