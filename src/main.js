// 两种推荐的ESLint的关闭方式
/* eslint-disable */
console.log('disable eslint') // eslint-disable-line
/* eslint-enable */

// 只要用到了jsx语法的文件模块，都必须引入React
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import '@/assets/css/common.scss'
import '@/assets/css/style.scss'
// 引入antd的样式文件
// import 'antd/dist/antd.css'
import 'antd/dist/antd.less'

// render的第一个参数必须是一个 React元素
// 第二个参数是真实的DOM节点
ReactDOM.render(<App />, document.getElementById('root'))

// import img from '@/utils/img'
// document.getElementById('test').style.color = 'orange'
// document.getElementById('img').src = img.logo
