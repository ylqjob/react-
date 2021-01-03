import React from 'react'

function CountChild(props) {
  return (
    <h1>{props.num}</h1>
  )
}

export default class TestEvent extends React.Component {
  constructor(props) {
    super(props)
    // state特点：当state发生变化时，视图自动更新
    this.state = {
      num: 0
    }
  }

  // ES5：使用bind()方式绑定的事件处理器，它的最后一个形参就是事件对象
  addHandle(arg1, arg2, e) {
    console.log('加', this)
    console.log('参数列表', arg1, arg2, e)

    // num的新值是由旧值计算而来时，不要使用这种写法
    // this.setState({num: this.state.num+1})

    // setState() 更新state，触发Diff运算、更新视图
    // setState()是React组件中，专门用于更新state的

    // ES5写法
    // this.setState(function(state, props){
    //   return { num: state.num } // 返回一个新的虚拟DOM（vm）
    // })

    // ES6写法（推荐）
    this.setState((state, props)=>({num: state.num+1}), ()=>{
      console.log('done')
    })
  }

  // ES6：使用箭头函数来绑定事件处理器，不用考虑this指向问题了
  // this就指向当前箭头函数所在类的实例对象
  subHandle(e, arg1, arg2) {
    console.log('减', this)
    console.log('参数列表', e, arg1, arg2)
    this.setState((state, props)=>({num: state.num-1}))
  }

  render() {
    let { num } = this.state

    return (
      <div>
        <h1>测试事件绑定</h1>
        {/* 把num这个state变量，通过props传递给子组件 */}
        <CountChild num={num} />
        {/* 绑定事件的第1种方法：使用bind(this)来改变this指向 */}
        <button onClick={this.addHandle.bind(this, 1, 2)}>加</button>
        {/* 绑定事件的第2种方法：使用箭头函数，它的this指向所在类的实例 */}
        <button onClick={(e)=>this.subHandle(e, 1, 2)}>减</button>
      </div>
    )
  }
}
