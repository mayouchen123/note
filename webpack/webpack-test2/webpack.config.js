var path = require('path')

module.exports = {
  // 第一种传入方式
  // entry: './src/script/main.js',
  // 第二种传入数组方式
  entry: ['./src/script/main.js', './src/script/a.js'],
  // 第三种传入对象方式
  // entry: {
  //   main: './src/script/main.js',
  //   a: './src/script/a.js'
  // },
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'bundle.js'
  }
}
