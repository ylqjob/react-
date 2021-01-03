import {
  makeObservable,
  observable,
  action,
  computed
} from 'mobx'

export default class TodoStore {
  constructor() {
    makeObservable(this, {
      list: observable,
      addTask: action,
      delTask: action,
      total: computed
    })
  }
  list = [
    { id: 1, task: '跑步1' },
    { id: 2, task: '跑步2' }
  ]
  addTask(payload) {
    this.list.push({id: Date.now(), task: payload})
  }
  delTask(payload) {
    this.list = this.list.filter(ele=>ele.id!==payload)
  }
  // 这相当是vuex中 getters 
  get total() {
    return this.list.length
  }
}
