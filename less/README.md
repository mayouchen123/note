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

## [Variables](./variables/variables.html)
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

### Variable Interpolation
可以给变量赋值,然后通过@{变量名}引用
```css
// Variables
@my-selector: banner;

// Usage
.@{my-selector} {
  font-weight: bold;
  line-height: 40px;
  margin: 0 auto;
}

// 编译后
.banner {
  font-weight: bold;
  line-height: 40px;
  margin: 0 auto;
}

// 比如还可以带到url
// Variables
@images: "../img";

// Usage
body {
  color: #444;
  background: url("@{images}/white-sand.png");
}

// 像这样定义路径也是可以的
// Variables
@themes: "../../src/themes";

// Usage
@import "@{themes}/tidal-wave.less";
```

### Variable Names
```css
@fnord:  "I am fnord.";
@var:    "fnord";
content: @@var;

// 编译后
content: "I am fnord.";
```

### [Lazy Evaluation](./variables/lazy.html)
变量是惰性加载的,在使用前不必声明
```css
.lazy-eval {
  width: @var;
}

@var: @a;
@a: 9%;

// 也可以这样
.lazy-eval-scope {
  width: @var;
  @a: 9%;
}

@var: @a;
@a: 100%;

// 编译后
.lazy-eval-scope {
  width: 9%;
}

// 下面这个会跟复杂
@var: 0;
.class {
  @var: 1;
  .brass {
    @var: 2;
    three: @var;
    @var: 3;
  }
  one: @var;
}

// 编译后
.class {
  one: 1;
}
.class .brass {
  three: 3;
}
```

## [Extend]()
```css
nav ul {
  &:extend(.inline);
  background: blue;
}
.inline {
  color: red;
}

// 编译后
nav ul {
  background: blue;
}
.inline,
nav ul {
  color: red;
}
```
