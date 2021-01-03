import React from 'react'

// comment()是函数，它接收一个 UI 组件作为参数，返回一个新的组件
// 它的作用是，用于对 UI 组件进行修饰或包装，为了复用业务逻辑
export default function comment(WrappedComponent) {
  return class extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        commentList: []
      }
    }
    componentDidMount() {
      // 假如，在这里触发后端api接口
      const res = [
        { id: 1, content: '你好棒1', user: 'zhangsan' },
        { id: 2, content: '你好棒2', user: 'zhangsan' },
        { id: 3, content: '你好棒3', user: 'zhangsan' },
        { id: 4, content: '你好棒4', user: 'zhangsan' },
        { id: 5, content: '你好棒5', user: 'zhangsan' }
      ]
      this.setState({commentList: res})
    }
    render() {
      let { commentList } = this.state
      return (
        <div>
          <WrappedComponent {...this.props} list={commentList} />
        </div>
      )
    }
  }
}
