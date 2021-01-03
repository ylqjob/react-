module.exports = {
  // preset 是Babel对不同版本的JS语法的一种支持编译
  // plugin 是用于某些特殊语法的支持与编译

  // @babel/preset-env作用是把ES6编辑成流量浏览器能够兼容的ES5代码
  "presets": [
    ["@babel/preset-env"],
    ["@babel/preset-react"]
  ],
  "plugins": [
    ["@babel/plugin-transform-destructuring"],
    // 下面两个插件的作用是编译装饰器语法
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose" : true }],
    // 解决路由代码分割中关于“动态import”报错的问题
    ["@babel/plugin-syntax-dynamic-import"]
  ]
}
