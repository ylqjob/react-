import React from 'react'

const ChildA = props => {
  return (
    <div>
      <h3>child a</h3>
      <h3>{props.count}</h3>
      <button onClick={()=>props.onChange(5)}>自增</button>
    </div>
  )
}

const ChildB = props => {
  return (
    <div>
      <h3>child b</h3>
      <h3>{props.count}</h3>
      <button onClick={()=>props.onChange(10)}>自减</button>
    </div>
  )
}

// 当兄弟组件之间需要共享一些状态（数据）时
// 我们的做法是把这些需要共享的状态，定义在它们共同的父组件中。
// 这种做法就叫做“状态提升”。

export default class TestLift extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0   // 两个子组件需要共享这个状态（数据）
    }
  }
  render() {
    let { count } = this.state

    return (
      <div>
        <h1>测试状态提升</h1>

        <hr/>
        <ChildA
          count={count}
          onChange={step=>this.setState(state=>({count:state.count+step}))}
        />

        <hr/>
        <ChildB
          count={count}
          onChange={step=>this.setState(state=>({count:state.count-step}))}
        />
      </div>
    )
  }
}
