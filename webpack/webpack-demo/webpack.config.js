const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')

module.exports = {
  // 入口文件
  // entry: './src/index.js',
  // 第二种对象方式
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    // 引入所需插件
    // 清除目录文件
    new CleanWebpackPlugin(['dist']),
    // 以json文件记录打包文件的对应关系 manifest.json
    new ManifestPlugin(),
    // 引入html插件导入js css等等文件
    new HtmlWebpackPlugin({
      title: 'app',
      filename: 'app.html',
      template: 'index.html',
      date: Date.now(),
      chunks: ['app'],
      inject: 'body',
      minify: {
        removeComments: true, // 删除注释
        collapseWhitespace: true // 删除空格
      }
      // 排除那些chunks
      // excludeChunks: []
    }),
    // 多页面应用
    new HtmlWebpackPlugin({
      title: 'print',
      filename: 'print.html',
      template: 'index.html',
      date: Date.now(),
      chunks: ['print'],
      inject: 'body',
      minify: {
        removeComments: true, // 删除注释
        collapseWhitespace: true // 删除空格
      }
    })
  ],
  // 打包后输出的文件
  output: {
    // filename: 'bundle.js',
    // 如果上面entry是对象方式可修改为
    filename: 'js/[name]-[chunkhash].bundle.js',
    path: path.resolve(__dirname, 'dist')
    // 上线占位符 publicPath
    // publicPath: ''
  },
  // 配置需要的module 处理指定文件
  module: {
    rules: [
      {
        // 处理css css-loader style-loader
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        // 处理文件 file-loader
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        // 处理csv文件
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ]
  }
}
