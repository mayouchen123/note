# Require JS Note

requireJS是一个非常小巧的JavaScript模块载入框架，是AMD规范最好的实现者之一。最新版本的requireJS压缩后只有14K，堪称非常轻量。
它还同时可以和其他的框架协同工作，使用requireJS必将使您的前端代码质量得以提升。

## 使用requireJS之前,先看看正常编写代码
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>demo1</title>
    <script src="./index.js" charset="utf-8"></script>
  </head>
  <body>
  <h1>demo1</h1>
  </body>
</html>
```
```javascript
(function () {
  alert('123');
})();
```
如果这样写我们会看到先alert弹出123再显示页面html内容,这就是`JS阻塞浏览器渲染`导致的结果
假如网页加载的文件越多,网页失去响应的时间越长

## 下面看看使用requirejs的效果
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>demo2-requirejs</title>
    <script src="../js/require.js" charset="utf-8"></script>
    <script type="text/javascript">
      require(["index"]);
    </script>
  </head>
  <body>
    <h1>demo2-requirejs</h1>
  </body>
</html>
```
```javascript
define(function () {
  function fn1() {
    alert('it work');
  }

  fn1();
})
```
这次你会感觉到不一样,页面并没有被`JS阻塞`,而是同时加载了html了页面,这样页面加载速度是不是有了提高,异步加载了其它JS文件

## 😄😄 入门了哟

# requireJS的优点
+ 实现JS文件的异步加载,避免网页失去响应
+ 管理模块之间的依懒性,便于代码的编写和维护
+ requireJS的目标是鼓励代码的模块化
+ 模块化促使避免污染全局空间

## [加载javascript文件](./demo3)

requireJS以一个相对于baseUrl的地址来加载所有的代码.页面顶层script标签含有一个特殊的属性`data-main`,
requireJS使用它来启动脚本加载过程,而`baseUrl`一般设置到与该属性相一致的目录

```javascript
    <script src="../js/require.js" data-main="../demo3/main.js" charset="utf-8"></script>
```

requirejs也可以通过`requirejs config`手动配置,如果没有显示指定config及`data-main`,则默认的baseUrl为包含requirejs的那个html页面所属的目录

理想状况下,每个加载的脚本都是通过`define()`来定义的一个模块;但是些"浏览器全局变量注入"型的传统/遗留库并没有使用define()来定义它们的依赖关系,
你必须使用`shim config`来指明它们的依赖关系.如果你没有指明依赖关系,加载可能报错.这是因为基于素的原因,requireJS会异步的以无序的形式加载这些库

## data-main入口点
requirejs在加载的时候会检察data-main属性
```javascript
    <script src="../js/require.js" data-main="../demo3/main.js" charset="utf-8"></script>
    // main.js
    require.config({
      paths: {
        "test": '../demo3/test.js'
      }
    });
```

## 定义模块
模块不同于传统的脚本文件,它良好地定义了一个作用域来避免全局名称空间污染,它可以显示的列出其依赖关系,并以函数参数的形式将这些依赖进行注入,而无需引入全局变量

### 简单的值对
如果一个模块仅含值对,没有任何依赖,则在define()中定义这些值对就好了:
```javascript
define({
  color: "black",
  size: "unisize"
});
```

### 函数式定义
如果一个模块没有任何依赖,但是需要一个做setup工作的函数,则在define()中定义该函数,并将其传给define():
```javascript
define(function () {
  return {
    color: "black",
    size: "unisize"
  }
})
```

### 存在依赖的函数式定义
如果模块存在依赖:则第一个参数是依赖的名称数组;第二个参数是函数,在模块的所有依赖加载完毕后,该函数会调用来定义该模块,因此该模块返回一个object.
依赖关系会以参数的形式注入到该函数,参数列表与依赖名称列表一一对应
define(['../demo3/test'],function(test) {
  return {
    color: "black",
    size: "large",
    addToCart: function() {
      test.add(this);
    }
  }
})

### 将模块定义为一个函数
对模块的返回值类型并没有强制为一定是个object,任何函数的返回值都是允许的.此处是一个返回了函数的模块定义
```javascript
define(['../demo3/test'], function() {
  return function(title) {
    return title + "hello world";
  }
})
```

# requireJS机制
requireJS使用head.appendChild()将每一个依赖加载为一个script标签.
requireJS等待所有的依赖加载完毕,计算出模块定义函数正确调用顺序,然后依次调用它们.

## 配置可选
支持的配置项:
baseUrl: 所有模块的查找根路径.baseUrl可跟require.js页面处于不同的域下,requireJS脚本的加载是跨域的.

[paths](): path映射那些不直接放置于baseUrl下的模块名.设置path时起始位置是相对于baseUrl的,除非该path设置以"/"开头或含有URL协议(如http)
用于模块名的path不应该含有.js后缀,应为一个path有可能映射到一个目录.路径解析机制会自动在映射模块名到path时添加上.js后缀.
在浏览器中运行时,可指定路径的备选[fallbacks],以实现诸如首先指定了从CDN中加载,一旦CDN加载失败则从本地位置中加载这类的机制

[shim](): 为那些没有使用define()来声明依赖关系,设置模块的"浏览器全局变量注入"型脚本做依赖和导出配置

下面有个示例,它需要requireJS2.1.0+,并且假定backbone.js, underscore.js, jquery.js都装于baseUrl目录下.如果没有,则你可能需要为它们设置paths config
```javascript
require.config({
  shim: {
    'backbone': {
      deps: ['underscore', 'jquery'], // backbone模块需要依赖的包
      exports: 'Backbone' // 导出的名字
    },
    'underscore': {
      exports: '_'
    },
    'foo': {
      deps: ['bar'],
      exports: 'Foo',
      init: function(bar) {
        return this.Foo.noConflict();
      }
    }
  }
});
```
requireJS2.0中,shim配置中的"exports"属性可以是一个函数而不是字符串.这种情况下它就起到上诉示例中的"init"属性的功能.requireJS2.1.0中加入了"init"承接
库加载后的初始工作,以使exports作为字符串值被enforceDefine所使用

那些仅作为jquery或Backbone的插件存在而不导出任何模块变量的"模块"们,shim配置可以简单设置为依赖数组:
```javascript
require.config({
  shim: {
    'jquery.colorize': ['jquery'],
    'jquery,scroll': ['jquery'],
    'backbone.layoutmanager': ['backbone']
  }
});
```
但请注意，若你想在IE中使用404加载检测以启用path备选(fallbacks)或备错(errbacks)，则需要给定一个字串值的exports以使loader能够检查
出脚本是否实际加载了(init中的返回值不会用于enforceDefine检查中)：
```javascript
requirejs.config({
  shim: {
    'jquery.colorize': {
      deps: ['jquery'],
      exports: 'jQuery.fn.colorize'
    },
    'jquery.scroll': {
      deps: ['jquery'],
      exports: 'jQuery.fn.scroll'
    },
    'backbone.layoutmanager': {
      deps: ['backbone']
      exports: 'Backbone.LayoutManager'
    }
  }
});
```

`shim"配置的重要注意事项`:

shim配置仅设置了代码的依赖关系,想要实际加载shim指定或涉及的代码块,仍然需要一个常规的require/define调用.设置shim本身不会触发代码的加载

请仅使用其他"shim"模块作为shim脚本的依赖，或那些没有依赖关系，并且在调用define()之前定义了全局变量(如jQuery或lodash)的AMD库。
否则，如果你使用了一个AMD模块作为一个shim配置模块的依赖，在build之后，AMD模块可能在shim托管代码执行之前都不会被执行，这会导致错误。
终极的解决方案是将所有shim托管代码都升级为含有可选的AMD define()调用。

[map]():对于给定的模块前缀,使用一个不同的模块ID来加载模块.
该手段对于某些大型项目很重要:如有两类模块需要使用不同版本的"foo",但它们之间仍需要一定的协同.在那些基于上下文的多版本实现中很难做到这一点.而且,paths配置仅用于
为模块ID设置root paths,而不是为了将一个模块ID映射到另一个

map示例:
```javascript
require.config({
  map: {
    'some/newmodule': {
      'foo': 'foo1.2'
    },
    'some/oldmodule': {
      'foo/foo1.0'
    }
  }
});
# 如果各模块在磁盘上分布如下：
  foo1.0.js
  foo1.2.js
  some/
    newmodule.js
    oldmodule.js
```
当"some/newmodule"调用了"require('foo')",它将获取到foo1.2.js文件;而当"some/oldmodule"调用"require('foo')"时它将获取到foo1.0.js

该特性仅适用于那些调用了define()并将其注册为匿名模块的真正AMD模块脚本.并且,请在map配置中仅使用绝对模块ID,"../some/thing"之类的相对ID不能工作

另外在map中支持"*",意思是"对于所有的模块加载,使用本map配置".如果还有更细化的map配置,会优先于"*"配置.示例:
```javascript
require.config({
  map: {
    "*": {
      'foo': 'foo1.2'
    },
    'some/oldmodule': {
      'foo': 'foo1.0'
    }
  }
});
# 意思是除了"some/oldmodule"外的所有模块,当要使用"foo"时,使用"foo1.2"来替代.对与'some/oldmodule'自己,则使用"foo1.0"
```

[config]():常常需要将配置信息传给一个模块,这些配置往往是application级别的信息,需要一个手段将它们向下传递给模块.在requireJS,基于requirejs.config()
配置项来实现.要获取这些信息的模块可以加载特殊的依赖“module”，并调用module.config()。示例：
```javascript
requirejs.config({
    config: {
        'bar': {
            size: 'large'
        },
        'baz': {
            color: 'blue'
        }
    }
});

define(function (require, exports, module) {
    var size = module.config().size;
});

define(['module'], function (module) {
    var color = module.config().color;
});
```
从CommonJS包(package)中加载模块。参见从包中加载模块。
```javascript
requirejs.config({
    config: {
        'pixie/index': {
            apiKey: 'XJKDLNS'
        }
    },
    packages: [
        {
            name: 'pixie',
            main: 'index'
        }
    ]
});
```
[packages]():从CommonJS包(package)中加载模块。参见从包中加载模块。

[nodeIdCompat]():在放弃加载一个脚本之前等待的秒数。设为0禁用等待超时。默认为7秒。

[waitSeconds]():命名一个加载上下文。这允许require.js在同一页面上加载模块的多个版本，如果每个顶层require调用都指定了一个唯一的上下文字符串。

[context]指定要加载的一个依赖数组。当将require设置为一个config object在加载require.js之前使用时很有用。一旦require.js被定义，这些依赖就已加载。
使用deps就像调用require([])，但它在loader处理配置完毕之后就立即生效。它并不阻塞其他的require()调用，它仅是指定某些模块作为config块的一部分而异步加载的手段而已。

[deps]():指定要加载的一个依赖数组。当将require设置为一个config object在加载require.js之前使用时很有用。一旦require.js被定义，这些依赖就已加载。
使用deps就像调用require([])，但它在loader处理配置完毕之后就立即生效。它并不阻塞其他的require()调用，它仅是指定某些模块作为config块的一部分而异步加载的手段而已。

[callback]():在deps加载完毕后执行的函数。当将require设置为一个config object在加载require.js之前使用时很有用，其作为配置的deps数组加载完毕后为require指定的函数。

[enforceDefine]():如果设置为true，则当一个脚本不是通过define()定义且不具备可供检查的shim导出字串值时，就会抛出错误。参考在IE中捕获加载错误一节。

[xhtml]():如果设置为true，则使用document.createElementNS()去创建script元素。

[urlArgs]:requireJS获取资源时附加在URL后面的额外的query参数。作为浏览器或服务器未正确配置时的“cache bust”手段很有用。使用cache bust配置的一个示例：
```javascript
urlArgs: "bust=" +  (new Date()).getTime()
# 在开发中这很有用，但请记得在部署到生成环境之前移除它。
```

[scriptType]():指定requireJS将script标签插入document时所用的type=""值。默认为“text/javascript”。想要启用Firefox的JavaScript 1.8特性，可使用值“text/javascript;version=1.8”。

[skipDataMain]():
