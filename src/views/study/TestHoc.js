import React from 'react'

// 高阶组件
// 作用：它是React中业务逻辑复用的一种解决方案
// 高阶组件是基于React组合特性而得来的一种设计模式、软件开发经验
// 高阶组件，也被称之为高阶函数、纯函数、容器组件

// function fn() {
//   return function() {
//     return function() {
//       console.log('hehe')
//     }
//   }
// }
//
// fn()()()

// 如何在当下环境支持ES6的装饰器语法？
// 安装 @babel/plugin-proposal-decorators / @babel/plugin-proposal-class-properties
// 安装 babel-eslint，它可以配合 eslint 一起工作
// 配置babel，参考 babel.config.js 文件
// 配置eslint，参考 .eslintrc.json 文件

import { comment, themeHoc, roleHoc } from '@/utils/hoc'

// 装饰器，是ES6中新增的特性
// 装饰器有两个作用，其一用于修饰一个类，其二可以修饰类的方法

@themeHoc
@roleHoc
@comment
class TestHoc extends React.Component {
  render() {
    console.log('props', this.props)
    let { list, userinfo } = this.props
    return (
      <div>
        <h1>测试高阶组件</h1>
        <hr/>
        {
          list.map(ele=>(
            <div key={ele.id}>
              <span>{ele.user}</span>
              <span>----</span>
              <span>{ele.content}</span>
              {
                userinfo.role===1 && [<span key='1'>----</span>, <span key='2'>删除</span>]
              }
            </div>
          ))
        }
      </div>
    )
  }
}

export default TestHoc
