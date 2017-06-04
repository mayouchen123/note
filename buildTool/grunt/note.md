# 加载Gruntfile插件
在Gruntfile中如果要加载很多grunt插件需要谢很多`grunt.loadNpmTask()`很麻烦,
可以使用`load-grunt-tasks`模块去自动加载package.json中以`grunt-contrib`开头的插件 <br/>
`https://github.com/sindresorhus/load-grunt-tasks`

# 统计所有grunt运行的时间
只需在开头引入`time-grunt`
