import React from 'react'

// import TestJsx from './views/study/TestJsx'
// import TestProps from './views/study/TestProps'
// import TestEvent from './views/study/TestEvent'
// import TestState from './views/study/TestState'
// import TestCondition from './views/study/TestCondition'
// import TestList from './views/study/TestList'
// import TestForm from './views/study/TestForm'
// import TestLife from './views/study/TestLife'
// import TestLang from './views/study/TestLang'
// import TestLift from './views/study/TestLift'
// import TestCombine from './views/study/TestCombine'
// import TestContext from './views/study/TestContext'
// import TestHoc from './views/study/TestHoc'
// import TestTypes from './views/study/TestTypes'
import TestHooks from './views/study/TestHooks'

import { Layout } from '@/components'

// const ele = <h1>Hello React 2009</h1>

// 类组件，组件定义
// class App extends React.Component {
//   render() {
//     return ele
//   }
// }

import ThemeCtx from '@/utils/theme'

// 路由
import {
  HashRouter,
  BrowserRouter
} from 'react-router-dom'

// mobx-react的使用，用于把mobx store 和 react 组件组装起来
import { Provider } from 'mobx-react'
import store from './store'

// 函数式组件，组件定义
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: '#000000',
      background: '#ffffff'
    }
  }
  themeChange(key, e) {
    this.setState({[key]: e.target.value})
  }
  render() {
    let { color, background } = this.state
    return (
      <HashRouter>
        {/*是一个组件，它是基于React上下文来封装的*/}
        <Provider store={store}>
          <ThemeCtx.Provider value={{color, background}}>
            <Layout />
              {/*
                <TestProps
                  msg2='hello msg'
                  hello='hello child'
                  bol={true}
                  arr={[1,2,3,4]}
                  user={{name:'小明', age:20}}
                  ele={<div>react child ele</div>}
                />
              */}
              {/*<TestEvent msg='hello set state' />*/}
              {/* 测试上下文 */}
              {/*
                <span>选择前景色：</span>
                <input type="color" value={color} onChange={(e)=>this.themeChange('color', e)}/>
                <span style={{paddingLeft:'50px'}}>选择背景色：</span>
                <input type="color" value={background} onChange={(e)=>this.themeChange('background', e)}/>
                <hr/>
              </div>
              */}
          </ThemeCtx.Provider>
        </Provider>
      </HashRouter>
    )
  }
}

export default App
