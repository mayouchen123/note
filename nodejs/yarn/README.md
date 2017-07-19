# Yarn

## [官方网站](https://yarnpkg.com/zh-Hans/)

## 安装(macos)
### Homebrew
你可以通过 Homebrew 包管理器安装 Yarn，如果没有安装 Node.js 它也可以安装。
```bash
brew install yarn
```

如果您使用 nvm，您应该排除安装 Node.js so 以便使用 nvm 的 Node.js 版本。
```bash
brew install yarn --ignore-dependencies
```

通过npm安装
```bash
npm i yarn -g
```

## 操作
### 初始化项目
```bash
yarn init
```

### 添加依赖包
```bash
yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]
```

分别添加到 devDependencies、peerDependencies 和 optionalDependencies
```bash
yarn add [package] --dev
yarn add [package] --peer
yarn add [package] --optional
```

### 升级依赖包
```bash
yarn upgrade [package]
yarn upgrade [package]@[version]
yarn upgrade [package]@[tag]
```

### 移除依赖包
```bash
yarn remove [package]
```

### 安装项目的全部依赖
```bash
yarn
```
或者
```bash
yarn install
```
### 安装选项
安装依赖有许多选项，包括：
+ 安装所有依赖：yarn 或 yarn install
+ 安装一个包的单一版本：yarn install --flat
+ 强制重新下载所有包：yarn install --force
+ 只安装生产环境依赖：yarn install --production

### cache
```bash
yarn cache ls
yarn cache dir
yarn cache clean
```
