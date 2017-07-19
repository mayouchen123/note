const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  // 入口文件
  entry: './src/app.js',
  // 输入文件
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    // 清理文件
    new cleanWebpackPlugin(['dist']),
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: 'body'
    })
  ],
  module: {
    rules: [
      {
        // 加入babel-loader
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        // 加入style-loader css-loader
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              // sourceMap: true, // 创建sourceMap
              // minimize: true // 压缩css
              importLoaders: 1 // 表示css-loader之后用几个loader来处理@import进来的资源
            }
          },
          'postcss-loader' // 加入postcss-loader 配置文件是postcss.config.js
        ]
      },
      {
        // 加入less-loader处理less文件
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        // 加入html-loader处理html文件
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        // 加入ejs-loader处理模板文件
        test: /\.tpl$/,
        use: 'ejs-loader'
      },
      {
        // 加入file-loader处理图片文件
        test: /\.(jpe?g|png|gif|svg)/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[name]-[hash:6].[ext]'
            }
          },
          {
            // 加入image-webpack-loader压缩图片
            loader: 'image-webpack-loader'
          }
        ]
      }
    ]
  }
}
