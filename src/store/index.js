// 使用 mobx 这个库，定义并创建一个 store
// mobx-react 这个库，用于把 mobx 和 react组件连接起来

// mobx 5+   mobx-react 6+
// mobx 6+   mobx-react 7+

import {
  makeObservable,
  observable,
  action,
  makeAutoObservable  // 可被观察的
} from 'mobx'

// 分modules
import TodoStore from './modules/todo'
import MusicStore from './modules/music'

// mobx6的写法
class Store {
  constructor() {
    // 子store实例化
    this.todo = new TodoStore()
    this.music = new MusicStore()

    // makeAutoObservable(this)

    makeObservable(this, {
      msg: observable,
      changeMsg: action
    })
  }
  msg = 'hello 2009'  // 类属性

  changeMsg(payload) {
    this.msg = payload
  }
}

export default new Store()


// mobx5的写法
// 在mobx5中，是没有 makeObservable/makeAutoObservable这些api
// class Store {
//   constructor() {
//     this.todo = new TodoStore()
//   }
//   @observable msg = 'hello msg'
//   @action
//   changeMsg() {
//
//   }
//   @computed
//   get total() {
//     return this.msg.length
//   }
// }
