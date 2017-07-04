const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
// const config = {
//   // 打包入口文件
//   entry: ['./src/script/main.js', './src/script/a.js'],
//   // 输出内容路径
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist/js')
//   }
// }

// const config = {
//   // entry 为对象时
//   entry: {
//     main: './src/script/main.js',
//     a: './src/script/a.js'
//   },
//   // 输出内容路径
//   output: {
//     filename: '[name].js',
//     // filename: '[name]-[hash].js',
//     // filename: '[name]-[chunkhash].bundle.js',
//     // filename: '[id].bundle.js',
//     path: path.resolve(__dirname, 'dist/js')
//   }
// }

const config = {
  // entry 为对象时
  entry: {
    main: './src/script/main.js',
    a: './src/script/a.js'
  },
  // 输出内容路径
  output: {
    // filename: '[name].js',
    filename: 'js/[name]-[hash].js',
    // filename: '[name]-[chunkhash].bundle.js',
    // filename: '[id].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // 添加插件
  plugins: [
    // 和自己的html文件建立关联关系
    new htmlWebpackPlugin({
      filename: 'index-[hash].html',
      template: 'index.html'
    })
  ]
}
module.exports = config
