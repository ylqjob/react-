import React, { useState, useEffect } from 'react'
import MusicRow from './MusicRow'

import { observer, inject } from 'mobx-react'

// inject('store')() 向组件中注入store数据
// observer() 把当前组件变成观察者，当store中的数据变化时，页面组件自动更新

export default inject('store')(observer(props=> {

  let { music } = props.store

  console.log('music list props', props)

  // const [list, setList] = useState([])
  // useEffect(()=>{
  //   const res = [
  //     { id: 1, name: '稻香' },
  //     { id: 2, name: '等你下课' },
  //     { id: 3, name: '一路向北' }
  //   ]
  //   setList(res)
  //   return undefined
  // }, [])

  let [page, setPage] = useState(1)

  const changeMsg = () => {
    props.store.changeMsg('hello 2011')
  }

  // 开发原则：React中建议一切外部数据都从props进来
  useEffect(()=>{
    const str = 'ct=24&qqmusic_ver=1298&new_json=1&remoteplace=txt.yqq.song&searchid=61453023483879617&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=1&n=10&w=%E5%BC%A0%E6%9D%B0&g_tk_new_20200303=921856724&g_tk=921856724&loginUin=448914712&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0'
    const params = {}
    str.split('&').map(ele=>{
      let arr = ele.split('=')
      params[arr[0]] = arr[1]
    })
    params.w = decodeURI(params.w)
    params.p = page
    music.changeList(params)
    return undefined
  }, [page])  // 当page发生变化时，会自动执行当前副作用

  const changePage = flag => {
    if(flag==='prev' && page<=1) return alert('已经是第一页了')
    setPage(flag==='next' ? ++page : --page)
    console.log('page', page)
  }

  return(
    <div>
      <h1>音乐列表</h1>
      {
        music.list.map(ele=>(
          <MusicRow key={ele.id} music={ele} />
        ))
      }
      <button onClick={()=>changePage('prev')}>上一页</button>
      <button onClick={()=>changePage('next')}>下一页</button>
    </div>
  )
}))
