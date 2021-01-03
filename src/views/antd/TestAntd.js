import React from 'react'

// 安装antd
// cnpm install antd -S
// 在main.js中引入样式文件：`import 'antd/dist/antd.css'`
// 在组件中，按需引入相应组件，即可使用

import {
  Button
} from 'antd'

export default props=>{
  return(
    <div>
      <h1>测试antd</h1>
      <hr/>

      <Button type="primary">Primary Button</Button>
    </div>
  )
}
