# Grunt
Grunt是一个自动前端自动化工具,帮我开发者完成重复反复的任务,
例如:压缩,编译,单元测试,linting等.自动化工具大大节约了开发的时间,
并且Grunt生态系统非常庞大,拥有丰富的插件可以选择.

Grunt和Grunt插件都是通过npm安装并管理,npm是Nodejs的包管理器,
使用之前确保安装的npm是最新的版本`npm install -g npm`

## 安装CLI
npm install -g grunt-cli
> 全局安装grunt-cli <br/>
注意:安装`grunt-cli`并不等于安装了Grunt! Grunt CLI的任务很简单:调用与Gruntfile在同一目录中Grunt.
这样带来的好处是,允许你在同一系统上同时安装多个版本的Grunt

## CLI是如何工作的
每次运行'grunt'时,就利用node提供的require()系统查找本地安装的Grunt.正如这一机制,就可以在项目的任意子目录运行Grunt

## 准备一份新的Grunt项目
一般需要在你的项目中添加两份文件:package.json和Gruntfile

package.json: 此文件被npm用于存储项目的元数据，以便将此项目发布为npm模块。你可以在此文件中列出项目依赖的grunt和Grunt插件，放置于devDependencies配置段内
Gruntfile: 此文件被命名为 Gruntfile.js 或 Gruntfile.coffee，用来配置或定义任务（task）并加载Grunt插件的

### package.json
`package.json`应当放置于项目的根目录中,与Gruntfile在同一目录中,并且应该与项目的源代码一起被提交.
在上诉目录(package.json所在的目录)中运行`npm install`将依据package.json文件中列出的每个依赖来自动安装适当版本的依赖

下面列出几种项目创建package.json文件的方式:
+ 大部分grunt-init模板都会自动创建特定于项目的package.json文件
+ npm init命令会创建一个基本的package.json文件

## 安装Grunt和grunt插件
向已经存在的package.json文件中添加Grunt和grunt插件最简单的通过`npm install < module > --save-dev`命令,还会自动将其添加到devDependencies配置段中.

```bash
// 安装Grunt
npm install grunt --save-dev

// 安装grunt插件
npm install grunt-contrib-jshint --save-dev
```
> 在项目中安装插件之后.记得提交package.json

## Gruntfile
Gruntfile.js或Gruntfile.coffee文件是有效的Javascript或CoffeeScript文件,应当放在你的项目根目录中,和package.json文件在同一目录中.

Gruntfile由以下几部分组成:
+ `wrapper`函数
+ 项目与任务配置
+ 加载grunt插件和任务
+ 自定义任务
