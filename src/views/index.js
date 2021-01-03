import React from 'react'
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,  // React类
  MenuFoldOutlined
} from '@ant-design/icons'

// 在React环境中，如何实现“代码分割”？

// cnpm install @loadable/component -S
// import loadable from '@loadable/component'
// 把所有路由匹配组件都写成 const Home = loadable(()=>import('./Home.js'))
// 如果报了 动态import 语法错误，请安装这个babel插件
// cnpm install @babel/plugin-syntax-dynamic-import -D
// 在 babel.config.js 中添加一个plugins配置，重启项目即可

import loadable from '@loadable/component'

const TestJsx = loadable(()=>import('./study/TestJsx'))
const TestProps = loadable(()=>import('./study/TestProps'))

import TestEvent from './study/TestEvent'
import TestState from './study/TestState'
import TestCondition from './study/TestCondition'
import TestList from './study/TestList'
import TestForm from './study/TestForm'
import TestLife from './study/TestLife'
import TestLang from './study/TestLang'
import TestLift from './study/TestLift'
import TestCombine from './study/TestCombine'
import TestContext from './study/TestContext'
import TestHoc from './study/TestHoc'
import TestTypes from './study/TestTypes'
import TestHooks from './study/TestHooks'

import MusicList from './music/MusicList'
import MusicDetail from './music/MusicDetail'

const TodoList = loadable(()=>import('./todo/TodoList'))
const TestAntd = loadable(()=>import('./antd/TestAntd'))

const routes = [
  {
    id: 10,
    text: 'React学习',
    icon: <MenuFoldOutlined />,
    children: [
      {
        id: 1010,
        text: '学习JSX',
        path: '/',
        component: TestJsx
      },
      {
        id: 1011,
        text: '学习props',
        path: '/props',
        component: TestProps
      },
      {
        id: 1012,
        text: '事件绑定',
        path: '/event',
        component: TestEvent
      },
      {
        id: 1013,
        text: '学习state',
        path: '/state',
        component: TestState
      },
      {
        id: 1014,
        text: '条件渲染',
        path: '/condition',
        component: TestCondition
      },
      {
        id: 1015,
        text: '列表渲染',
        path: '/list',
        component: TestList
      },
      {
        id: 1016,
        text: '受控表单',
        path: '/form',
        component: TestForm
      },
      {
        id: 1017,
        text: '生命周期',
        path: '/life',
        component: TestLife
      },
      {
        id: 1018,
        text: '类表单',
        path: '/lang',
        component: TestLang
      },
      {
        id: 1019,
        text: '状态提升',
        path: '/lift',
        component: TestLift
      },
      {
        id: 1020,
        text: '组合思想',
        path: '/combine',
        component: TestCombine
      },
      {
        id: 1021,
        text: '上下文',
        path: '/ctx',
        component: TestContext
      },
      {
        id: 1022,
        text: '高阶组件',
        path: '/hoc',
        component: TestHoc
      },
      {
        id: 1023,
        text: '类型检查',
        path: '/types',
        component: TestTypes
      },
      {
        id: 1024,
        text: '使用Hooks',
        path: '/hooks',
        component: TestHooks
      }
    ]
  },
  {
    id: 11,
    text: '音乐管理',
    icon: <MenuUnfoldOutlined />,
    children: [
      {
        id: 1110,
        text: '音乐列表',
        path: '/music',
        component: MusicList,
        children: [
          { id: 111010, path: '/music/detail/:id/:name', component: MusicDetail }
        ],
        notExact: true  // 模糊匹配高亮
      },
      {
        id: 1111,
        text: 'TODOLIST',
        path: '/todo',
        component: TodoList
      },
    ]
  },
  {
    id: 12,
    text: 'Antd学习',
    icon: <AppstoreOutlined />,
    children: [
      {
        id: 1210,
        text: '使用Antd',
        path: '/antd',
        component: TestAntd
      }
    ]
  }
]

export default routes
