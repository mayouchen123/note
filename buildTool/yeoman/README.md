# YEOMAN

## 安装yeoman
```bash
npm install -g yo
```

## generators
这个是yeoman的重点,项目生成器,利用generator生成你需要的项目结构

## 比如现在需要生成一个webapp的项目,那么就可以利用generator
+ 在generator中搜索webapp
+ generator的包名组成都是generator-包名
+ 通过npm全局安装generator-webapp
  ```bash
  cnpm install -g generator-webapp
  ```
+ 安装完成后,先创建一个项目目录webapp-in-action,进入到项目目录webapp-in-action
+ 比如想生成一个项目名为mywebapp
  ```bash
  yo webapp mywebapp
  // 接下来就会有一些选项让你选择,直到项目生成完成
  ```
