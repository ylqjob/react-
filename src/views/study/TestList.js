import React, {Component} from 'react'

export default class TestList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        { id: 1, name: 'zhang san', age: 20 },
        { id: 2, name: 'li si', age: 21 },
        { id: 3, name: 'wang wu', age: 22 },
        { id: 4, name: 'zhao liu', age: 23 }
      ]
    }
  }

  // 自定义的视图渲染方法
  // 当数组不需要进行二次转化处理时，建议用这种写法
  renderList1() {
    let { list } = this.state
    return list.map(ele=>(
      <div key={ele.id}>
        <span>{ele.id}</span>
        <span>--</span>
        <span>{ele.name}</span>
        <span>--</span>
        <span>{ele.age}</span>
      </div>
    ))
  }

  // 自定义的视图渲染方法
  // 当数组需要进行二次转化处理时，建议使用这种写法
  renderList2() {
    let { list } = this.state
    let arr = []
    list.map((ele,idx)=>{
      ele.age = ele.age+2
      // 添加一个自定义属性，避免使用 undefined
      ele.checked = ele.checked || false
      arr.push(
        <div key={ele.id}>
          <input type="checkbox" checked={ele.checked} onChange={(e)=>this.rowChange(e, idx)}/>
          <span>{ele.id}</span>
          <span>--</span>
          <span>{ele.name}</span>
          <span>--</span>
          <span>{ele.age}</span>
          <span>--</span>
          <button onClick={()=>this.rowClick(ele)}>操作</button>
        </div>
      )
    })
    return arr
  }

  rowChange(e, idx) {
    console.log('e', idx, e.target.checked)
    // console.log('ele', ele)
    this.setState(state=>{
      state.list[idx].checked = e.target.checked
      console.log('list', state.list)
      return {
        list: state.list
      }
    }, ()=>{
      console.log('this.state.list', this.state.list)
    })
  }
  rowClick(row) {
    console.log('row', row.id, row)
  }

  render() {
    let { list } = this.state

    // 构造一个数组，来承载JSX对象(React元素)
    let arr = []
    list.map(ele=>{
      ele.age = ele.age+2
      arr.push(
        <div key={ele.id}>
          <span>{ele.id}</span>
          <span>--</span>
          <span>{ele.name}</span>
          <span>--</span>
          <span>{ele.age}</span>
        </div>
      )
    })

    return (
      <div>
        <h1>测试列表</h1>
        <hr/>
        {/* 语法：JSX支持直接渲染由React元素构造成的数组 */}
        {
          [<div key='1'>1</div>, <div key='2'>2</div>, <div key='3'>3</div>, <div key='4'>4</div>]
        }
        <hr/>

        {/* 以下两种写法等价的，区别是一个封装了，另一个未封装 */}
        {
          list.map(ele=>(
            <div key={ele.id}>
              <span>{ele.id}</span>
              <span>--</span>
              <span>{ele.name}</span>
              <span>--</span>
              <span>{ele.age}</span>
            </div>
          ))
        }
        <hr/>
        { this.renderList1() }


        { /*以下两种写法也是等价的，区别在于一个放在render中直接处理，另一个封装成渲染方法 */}
        <hr/>
        { arr }
        <hr/>
        { this.renderList2() }

      </div>
    )
  }
}
