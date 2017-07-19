# webpack

## 安装webpack
```bash
npm i webpack --save-dev
```

## CLI
### 指定config文件
```bash
webpack [--config webpack.config.js]
```

### 指定文件输出
```bash
webpack <entry> [<entry>] <output>
```

### 指定生成环境
通过指定可以用于webpack的配置文件
```bash
webpack --env.production    # sets production to true
webpack --env.platform=web  # sets platform to "web"
```

### Common Options
```bash
webpack --help
webpack -h
```

## webpack参数
--module-bind 指定某个文件需要哪些插件打包
--watch 监听文件改变 打包
--progress 查看打包过程 可以看到打包百分比
--display-modules 查看所有的打包模块
--display-reasons 查看打包的原因
--config 参数  指定webpack配置文件
