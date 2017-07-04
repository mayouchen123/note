# NPM
关于npm方面一些使用技巧

# Getting Started

## 安装nodejs

## 更新npm
```bash
npm install npm@latest -g
```

## 获取npm安装路径
```bash
 npm config get prefix
```

## 安装package
+ 全局安装
```bash
npm install <package_name> -g

// 或者 npm i <package_name> -g
```
+ 本地安装
```bash
npm install <package_name>
```

## 使用package.json配置文件
package.json相当于一个json对象,其中最少需要2个属性
+ name
+ version

通过`npm init`方式创建package.json文件

如果不想配置问答流程,便可以在后面加上`--yes`或`-y`参数,快速生成文件配置
```bash
npm init --yes
```

在package.json文件中还有许多参数,比如:
+ `name`: 模块的名字
+ `version`: 模块版本号
+ `main`: 模块入口文件
+ `script`: 配置需要npm执行的脚本
+ `keywords`: 模块关键字秒速
+ `author`: 模块作者
+ 'license': ISC开源证书
+ `repository`: 模块github地址
+ `bugs`: 报告模块bug地址
+ `homepage`: 模块的首页地址
+ `dependencies`: 生产环境需要的依赖包
+ `devDependencies`: 开发环境需要的依赖包

可以通过以下命令修改package.json文件中的配置项
```bash
npm set init.author.email 'peter@xulukun.cn'
npm set init.author.name 'peter'
npm set init.license 'MIT'
```

## `--save` 和 `--save-dev`安装标记
使用上面两个参数将安装包添加到package.json中
+ `--save`: 只会将依赖包添加到dependencies
```bash
npm install <package_name> --save
```
+ `--save-dev`: 只会将依赖包添加到devDependencies
```bash
npm install <package_name> --save-dev
```
> 像这样将需要的包保存到package.json后,别人拿到项目就可以直接执行`npm install`安装所有保存在package.json中的依赖包

## Updating packages
+ 如果要本地包,必须本地必须要求有pakage.json,就可以执行
```bash
npm update
```
+ 通过运行`npm outdated`查看需要更新的包,但不更新
+ 通过指定深度跟新包`npm outdated -g --depth 0`
+ 更新全局包
```bash
npm update -g <package_name>
```

## 卸载包
+ 本地卸载
加上`--save-dev`参数意思删除包的同时,删除package.json文件中devDependencies依赖,也可以加上`--save`
```bash
npm uninstall <package_name> --save-dev
```
+ 全局卸载
```bash
npm uninstall <package_name> -g
```

## Creating Node.js modules
比如创建一个简单的包
+ `npm init`创建package.json填写相关信息
+ 创建入口文件默认的`index.js`
+ 在`index.js`输入以下内容
```bash
exports.printMsg = function() {
  console.log('This is first learn module');
}
```

## 发布npm包
1.需要先到npmjs创建用户,可以在官网进行注册,也可以在命令行使用npm adduser
2.在命令行登录`npm login`
3.确定登录成功`npm whoami`可在`~/.npmrc`中看到npm缓存的认证信息用户名
4.上传包`npm publish`

## 清除npm cache
```bash
npm cache clean
```
