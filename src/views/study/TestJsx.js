import React from 'react'

import img from '@/utils/img'

// 什么是JSX？
// JSX = JavaScript XML 是一种js语法糖
// 为什么要使用JSX？
// 在React开发中JSX语法是可选的，但是React官方建议使用JSX，JSX代码更加优雅、便于维护。

// JSX 是变量、是对象、React元素
// JSX是可嵌套的
// JSX中，可以使用表达式，但要使用 {} 包起来
// JSX中，class 这个属性要写成 className
// JSX中，for 这个属性要写成 htmlFor
// JSX中，注释内容也要使用 {} 包起来
// JSX中，默认可以防注入攻击（XSS）

// React元素 vs. React类
// 简单理解：视觉上看起来像是HTML结构的玩意，就是React元素，也叫JSX

const red = 'jsx'

const ele1 = <div className={red}>Hello JSX</div>

const ele2 = <div>{ Math.random() }</div>

const ele3 = <div>{ele1}{ele2}</div>

const ele4 = ()=><div>{ele3}</div>

function ele5() {
  return ele4()
}

// 如果不使用JSX语法糖，应该像这样创建React元素
const ele6 = React.createElement(
  'div',
  { className: 'jsx', title: 'hello div', id: 'box' },
  'Hello JSX'
)

// 类组件
class TestJsx extends React.Component {
  render() {
    return (
      <div>
        { ele1 }
        { ele2 }
        { ele3 }
        { ele4() }
        { ele5() }
        {/* 这是我公司的图片 */}
        <img className='img' src={img.logo} />
        <hr/>
        { ele6 }
      </div>
    )
  }
}

// 函数式组件（无状态组件）
// 用function关键来定义，也可以用箭头函数来定义
export default props=> {
  const bol = Math.random() > 0.5
  // do something
  console.log('---test jsx props', props)
  return (
    <div>
      { ele1 }
      { ele2 }
      { ele1 }
      { ele2 }
      <hr/>
      { ele3 }
      { ele4() }
      { ele5() }
      {/* 这是我公司的图片 */}
      <img className='img' src={img.logo} />
      <hr/>
      { ele6 }
      <hr/>
      { bol ? ele1 : ele2 }
    </div>
  )
}
