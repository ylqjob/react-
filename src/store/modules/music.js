import {
  makeObservable,
  observable,
  action,
  computed
} from 'mobx'

import api from '@/utils/api'

export default class MusicStore {
  constructor() {
    makeObservable(this, {
      list: observable,
      changeList: action
    })
  }
  list = []
  changeList(payload) {
    api.fetchQqMusic(payload).then(res=>{
      this.list = res.song.list
    })
  }
}
