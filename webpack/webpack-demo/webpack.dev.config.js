var path = require('path')

module.exports = {
  // 打包入口文件
  entry: './src/script/main.js',
  // 输出内容路径
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/js')
  }
}
