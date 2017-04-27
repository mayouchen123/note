# less
> Less 是一门 CSS 预处理语言，它扩充了 CSS 语言，增加了诸如变量、混合（mixin）、函数等功能，让 CSS 更易维护、方便制作主题、扩充。

# 环境需求
## 服务端
运行在服务端需要node环境,通过npm全局安装
```bash
npm install -g less
# 命令行用法
lessc styles.less > styles.css
```
若要输出压缩过的css,只需加上`-x`选项.如果希望更好的压缩效果,加上`--clean-css="advanced"`

## 客户端
在项目开发阶段,在浏览器上跑less.js非常方便,但不推荐生产环境,生产环境性能,可靠性很重要,建议还是服务端预编译

1.引入你的`.less`文件,并将rel属性设置为`stylesheet/less`
```html
<link rel="stylesheet/less" type="text/css" href="styles.less" />
```
2.浏览器端设置参数
```html
<!-- set options before less.js script -->
<script>
  less = {
    env: "development",
    async: false,
    fileAsync: false,
    poll: 1000,
    functions: {},
    dumpLineNumbers: "comments",
    relativeUrls: false,
    rootpath: ""
  };
</script>
```
3.引入`less.js`文件,放置于<head>中
```html
<script src="less.js" type="text/javascript"></script>
```

下载[less.js地址](https://raw.githubusercontent.com/less/less.js/v2.7.2/dist/less.min.js)

# 基本语法

## [Variables](./src/variables.html)
```css
a,
.link {
  color: #428bca;
}
.widget {
  color: #fff;
  background: #428bca;
}
// 使用变量后的写法
// Variables
@link-color:        #428bca; // sea blue
@link-color-hover:  darken(@link-color, 10%);

// Usage
a,
.link {
  color: @link-color;
}
a:hover {
  color: @link-color-hover;
}
.widget {
  color: #fff;
  background: @link-color;
}
```
