import React from 'react'

export default class TestCondition extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      gender: 1,
      numIdx: 1,
      classDis: 'd1',
      styleDis: 'block',
      size: 20,
      color: 'red'
    }
  }
  
  // 自定义视图渲染方法
  renderNumDiv() {
    let { numIdx } = this.state
    let ele = null
    switch (numIdx) {
      case 1:
        ele = <div>1111111</div>
        break
      case 2:
        ele = <div>2222222</div>
        break
      case 3:
        ele = <div>3333333</div>
        break
      case 4:
        ele = <div>4444444</div>
        break;
      default:
    }
    return (
      <div>
        { ele }
      </div>
    )
  }

  // 自定义事件处理器
  change(key) {
    switch (key) {
      case 'gender':
        this.setState(state=>{
          return { gender: state.gender===1 ? 2 : 1 }
        })
        break
      case 'numIdx':
        this.setState({numIdx: Math.ceil(Math.random()*4)})
        break
      case 'classDis':
        this.setState(state=>{
          return { classDis: state.classDis==='d1' ? 'd2' : 'd1' }
        })
        break
      case 'styleDis':
        this.setState(state=>{
          let colorArr = ['red', 'yellow', 'green', 'blue', 'black']
          return {
            styleDis: state.styleDis==='block' ? 'none' : 'block',
            size: state.size + 5,
            color: colorArr[Math.floor(Math.random()*colorArr.length)]
          }
        })
        break
      default:
    }
  }

  render() {
    let { gender, numIdx, classDis, styleDis, size, color } = this.state

    return (
      <div>
        <h1>测试条件渲染</h1>

        <hr/>
        { /* 只有两个元素需要执行条件渲染，建议使用三元表达式 */ }
        { gender === 1 ? <div>女</div> : <div>男</div> }
        <button onClick={()=>this.change('gender')}>切换性别</button>

        <hr/>
        { /* 两个以的元素需要执行条件渲染，建议使用 && 来实现 */ }
        { numIdx===1 && <div>1111111</div> }
        { numIdx===2 && <div>2222222</div> }
        { numIdx===3 && <div>3333333</div> }
        { numIdx===4 && <div>4444444</div> }
        { this.renderNumDiv() }
        <button onClick={()=>this.change('numIdx')}>切换数字</button>

        <hr/>
        {/* 用动态 className 实现条件渲染 */}
        <div className={classDis}>
          我可有可无（用动态的class来实现）
        </div>
        <button onClick={()=>this.change('classDis')}>显示/隐藏</button>

        <hr/>
        {/* 用动态 style 实现条件渲染 */}
        <div style={{color, fontSize: size+'px', display: styleDis }}>
          我可有可无（用动态的style来实现）
        </div>
        <button onClick={()=>this.change('styleDis')}>显示/隐藏</button>
      </div>
    )
  }
}
