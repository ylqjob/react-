# 技术栈

* Webpack
* Babel
* ESlint
* React + React-Router-Dom
* Sass
* Axios
* Antd
* Mobx
* ES6

* Webpack

作用：是当下前端工程化环境中使用最为广泛的构建工具，它的作用是把比较新的前端技术和文件模块，编译打包成浏览器能够识别、并且能够尽可能兼容主流浏览器的代码（HTML、CSS、ES5），它就是一个打包器。

## 1、安装webpack

* webpack 是核心库，它提供了很多 API，可以用于编程
* webpack-cli 是命令行工具，它提供了一些很好用的命令行

cnpm install webpack -g
cnpm install webpack-cli -g
cnpm install webpack -D
cnpm install webpack-cli -D

* 使用配置文件
  webpack运行或打包时，默认使用 webpack.config.js这个文件。

* webpack-dev-server
  它是使用express来编写的用于创建本地node服务器的第三方包
  ```
  webpack serve --config react.config.js
  ```

* 重点学习四个概念：入口、出口、loaders、plugins

## react-router-dom

* 官网：https://reactrouter.com/web/guides/quick-start
* 安装：cnpm install react-router-dom -S
* 常用组件：HashRouter/BrowserRouter, Route, NavLink/Link, Redirect, Switch
* 高阶组件：withRouter
* 编程式路由跳转、路由动态传递

## 状态管理

状态，就是数据。状态管理工具，是用来对应用程序中的数据流进行科学地管理。
最早出现状态管理思想的是Flux，Flux只是一套数据流管理的指导思想、设计模式。

mobx + mobx-react  小项目中经常用到
  mobx 只是用于定义store
  mobx-react 是帮助我们在React组件中使用store，借助了React上下文和高阶组件
    Provider组件，inject('store')()  observer()

redux + react-redux  大项目中经常用到
  redux 只是定义store
  react-redux 是帮助我们在React组件中使用store，借助了React上下文和高阶组件
    Provider组件，connect(fn1,fn2)()

1、如何安装mobx?
* cnpm install mobx -S
* 在src中新建 store/index.js，代码如下：
```
import { makeAutoObservable } from 'mobx'
class Store {
  constructor() {
    makeAutoObservable(this)
  }
  msg = 'hello'
  changeMsg(payload) {
    this.msg = payload
  }
}
export default new Store()
```
* cnpm install mobx-react -S
* 在App.js中，代码如下
```
import { Provider } from 'mobx-react'
import store from './store/index.js'

export default function App() {
  return(
    <Provider store={store}>
      <Layout />
    </Provider>
  )
}
```
* 在页面组件中代码如下：
```
import { inject, observer } from 'mobx-react'
export default inject('store')(observer(props=>()))
```
* 在页面中，使用 props.store 来访问 共享的数据和action方法。
