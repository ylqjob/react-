import React from 'react'

// 自定义Modal组件
const QfModal = props => {
  // 三种按钮
  const ConfirmBtn = ()=> (
    <span
      className='info'
      onClick={()=>props.onOk && props.onOk()}
    >
      {props.okText || '确定'}
    </span>
  )
  const CancelBtn = ()=> (
    <span
      onClick={()=>props.onCancel && props.onCancel()}
    >
      取消
    </span>
  )
  const DeleteBtn = ()=> (
    <span
      className='delete'
      onClick={()=>props.onDelete && props.onDelete()}
    >
      删除
    </span>
  )

  // 动态渲染btns按钮组
  function renderBtns() {
    switch (props.type) {
      case 'confirm':
        return (
          <div>
            <ConfirmBtn />
            <CancelBtn />
          </div>
        )
        break
      case 'delete':
        return (
          <div>
            <CancelBtn />
            <DeleteBtn />
          </div>
        )
        break
      default:
        return(
          <div>
            <ConfirmBtn />
          </div>
        )
    }
  }
  return (
    <div
      className='qf-modal'
      style={{width: props.tip ? '500px' : '410px'}}
    >
      {
        props.tip && (
          <div className='qf-modal-header'>
            <span>{props.tip}</span>
            <span>X</span>
          </div>
        )
      }
      <div className='qf-modal-content'>
        { props.children }
      </div>
      <div className='qf-modal-footer'>
        { renderBtns() }
      </div>
    </div>
  )
}


// 在React中，实现组件复用，使用的是组合思想，不是继承思想
export default class TestConbine extends React.Component {
  okHandle() {
    console.log('你点击了 确定 按钮')
  }
  cancelHandle() {
    console.log('你点击了 取消 按钮')
  }
  deleteHandle() {
    console.log('你点击了 删除 按钮')
  }
  render() {
    return (
      <div>
        <h1>测试组合</h1>
        <hr/>

        {/* 有 Header 的 确认框 */}
        <QfModal
          tip='编辑'
          type='confirm'
          onOk={()=>this.okHandle()}
          onCancel={()=>this.cancelHandle()}
        >
          <div>
            <span>用户名：</span><input type="text"/>
          </div>
        </QfModal>

        {/* 有 Header 的 删除框 */}
        <QfModal
          tip='警告'
          type='delete'
          onDelete={()=>this.deleteHandle()}
          onCancel={()=>this.cancelHandle()}
        >
          <div>
            你确定要删除吗？
          </div>
        </QfModal>

        {/* 有 Header 的 默认弹框 */}
        <QfModal
          tip='警告'
          okText='我知道了'
          onOk={()=>this.okHandle()}
        >
          <div>
            你确定要删除吗？
          </div>
        </QfModal>

        {/* 没有 Header 的 确认框 */}
        <QfModal
          type='confirm'
          onOk={()=>this.okHandle()}
          onCancel={()=>this.cancelHandle()}
        >
          <div>你确定要删除吗？</div>
        </QfModal>

        {/* 没有 Header 的 删除框 */}
        <QfModal
          type='delete'
          onDelete={()=>this.deleteHandle()}
          onCancel={()=>this.cancelHandle()}
        >
          <div>你确定要删除吗？</div>
        </QfModal>

        {/* 没有 Header 的 默认弹框 */}
        <QfModal
          okText='我知道了'
          onOk={()=>this.okHandle()}
        >
          <div>你确定要删除吗？</div>
        </QfModal>

      </div>
    )
  }
}
