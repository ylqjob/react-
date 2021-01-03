import React from 'react'

export default class TestState extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 100,
      price: 9.9,
      a: 1,
      b: 2,
      c: 3
    }
  }
  changeCount() {
    // setState()是React中专门用于更新VM，触发diff运算，更新视图
    // setState()默认是异步的，但在定时器中却是同步的
    // setState(fn1, [fn2]) fn1必须返回一个新的state，fn2表示更新state完成
    // setState({bol: true})
    setTimeout(()=>{
      console.log('clicked 1111111')
      this.setState((state, props)=>{
        // do something
        return {
          count: state.count+1,
          price: 10
        }
      }, ()=>{
        console.log('done')
      })
      console.log('clicked 2222222')
    }, 0)
  }
  changeABC() {
    // 当有多个setState()执行时，React会自动将其合并，只执行一次diff运算、一次DOM更新

    // this.setState({a: 1000})
    // this.setState({a: 100000})
    // this.setState({a: 10000})

    // this.setState({a: 1000})
    // this.setState({b: 2000})
    // this.setState({c: 3000})
    // 等价于：
    this.setState({
      a: 1000,
      b: 2000,
      c: 3000
    })
  }
  render() {
    let { count, price, a, b, c } = this.state
    return (
      <div>
        <h1>测试State</h1>
        <hr/>

        <h1>数量：{count}</h1>
        <h1>单价：{price}</h1>
        <h1>总价：{count*price}</h1>
        <button onClick={()=>this.changeCount()}>改变Count</button>
        <hr/>
        <h1>{a}</h1>
        <h1>{b}</h1>
        <h1>{c}</h1>
        <button onClick={()=>this.changeABC()}>改变ABC</button>
      </div>
    )
  }
}
