import React from 'react'

// 粗粒度的权限管理
// 细粒度的权限管理
export default function roleHoc(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        userinfo: {}
      }
    }
    componentDidMount() {
      this.setState({userinfo: {
        role: 2,
        mobile: '1300000000',
        username: '小王'
      }})
    }
    render() {
      let { userinfo } = this.state
      return (
        <div>
          <WrappedComponent {...this.props} userinfo={userinfo}  />
        </div>
      )
    }
  }
}
