# webpack

// 绑定css文件绑定style-loader css-loader
cnpm run webpack hello.js hello.bundle.js --module-bind 'css=style-loader!css-loader'

webpack参数
--watch 监听文件改变 打包
--progress 查看打包过程
--display-modules 查看所有的打包模块
--display-reasons 查看打包的原因
--config 参数  指定webpack配置文件
