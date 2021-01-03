import React from 'react'

// 上下文 Context
// 在根组件上注入数据，然后组件树中的所有组件节点都可访问该数据了
// 特点：数据只能单向传递，即从根组件向后代组件传递
// 应用实践：状态管理就是借助了上下文来实现数据传递的

import ThemeCtx from '@/utils/theme'

// 第一种写法：
// export default class TestContext extends React.Component {
//   render() {
//     return (
//       <ThemeCtx.Consumer>
//         {
//           (value)=>(
//             <div style={{color: value.color, background: value.background }}>
//               <h1>测试上下文</h1>
//             </div>
//           )
//         }
//       </ThemeCtx.Consumer>
//     )
//   }
// }


// 第二种写法：
class TestContext extends React.Component {
  render() {
    console.log('this.context', this.context)
    console.log('props', this.props)
    const theme = this.context
    return (
      <div style={{color: theme.color, background: theme.background}}>
        <h1>测试上下文</h1>
        <h2>我是TestContext子组件的页面</h2>
      </div>
    )
  }
}

TestContext.contextType = ThemeCtx
export default TestContext
