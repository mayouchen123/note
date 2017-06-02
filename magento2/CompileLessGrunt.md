# Compile Less with Grunt

## Prerequisites
首先把magento应用模式设置为developer mode or default mode <br/>
推荐设置为developer mode

## 安装配置Grunt
+ 安装nodejs
+ 安装Grunt CLI
```bash
npm install -g grunt-cli
```
+ 修改magento根目录下的两个文件
  + package.json.sample to package.json
  + Gruntfile.js.sample to Gruntfile.js
+ 在magento根目录下
  + npm install
  > 可能会出现卡在下载phantomjs这个位置,是应为过来网络被墙下载较慢或网络错误 <br/>
  解决办法:<br/>
  ```bash
  // 在装有node的环境下
  npm config list //查看npm配置
  // 如果装了cnpm 可以
  cnpm config list
  // 在.cnpmrc中设置phantomjs淘宝镜像下载
  cnpm config set phantomjs_cdnurl https://npm.taobao.org/dist/phantomjs
  ```
  + npm update
+ 添加自己的主题到Grunt配置文件中,
找到magento根目录下面的dev/tools/grunt/configs/themes.js
  ```javascript
  /**
   * Copyright © 2013-2017 Magento, Inc. All rights reserved.
   * See COPYING.txt for license details.
   */

  'use strict';

  /**
   * Define Themes
   *
   * area: area, one of (frontend|adminhtml|doc),
   * name: theme name in format Vendor/theme-name,
   * locale: locale,
   * files: [
   * 'css/styles-m',
   * 'css/styles-l'
   * ],
   * dsl: dynamic stylesheet language (less|sass)
   *
   */
  module.exports = {
      blank: {
          area: 'frontend',
          name: 'Magento/blank',
          locale: 'en_US',
          files: [
              'css/styles-m',
              'css/styles-l',
              'css/email',
              'css/email-inline'
          ],
          dsl: 'less'
      },
      luma: {
          area: 'frontend',
          name: 'Magento/luma',
          locale: 'en_US',
          files: [
              'css/styles-m',
              'css/styles-l'
          ],
          dsl: 'less'
      },
      backend: {
          area: 'adminhtml',
          name: 'Magento/backend',
          locale: 'en_US',
          files: [
              'css/styles-old',
              'css/styles'
          ],
          dsl: 'less'
      }
  };

  // 可以看到上面这段js中配置了前端blank,luma主题和后台backend主题
  // 这里我们就需要配置自己创建的主题,直接复制luma来修改就可以

  ...
  luma: {
      area: 'frontend',
      name: 'Magento/luma',
      locale: 'en_US',
      files: [
          'css/styles-m',
          'css/styles-l'
      ],
      dsl: 'less'
  },
  point: {
      area: 'frontend',
      name: 'Pointline/point',
      locale: 'en_US',
      files: [
          'css/styles-m',
          'css/styles-l'
      ],
      dsl: 'less'
  },
  ...
  ```
+ 如果想在grunt自动编译的同时,浏览器自动刷新查看css修改情况,可在google浏览器装
上`[LiveReload extension](http://livereload.com/)`


## Grunt commands
下表描述可以使用执行不同自定义任务的grunt命令,从Magento根目录运行所有命令

| Grunt task | Action | Example |
| ---------- | ------ | ------- |
| grunt clean: < theme > | Removes the theme related static files in the pub/static and var directories. | grunt clean:point |
| grunt exec: < theme > | Republishes symlinks to the source files to the pub/static/frontend/<Vendor>/<theme>/<locale> directory. | grunt exec:point |
| grunt less: < theme > | Compiles .css files using the symlinks published in the pub/static/frontend/<Vendor>/<theme>/<locale> directory | grunt less:point |
| grunt watch | Tracks the changes in the source files, recompiles .css files, and reloads the page in the browser pages (you need to have LiveReload installed for you browser) | grunt watch |
