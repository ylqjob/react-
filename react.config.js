// 前端项目都运行在Node.js环境中，这个配置文件是项目运行或打包时执行的
// 它的语法是 CommonJS 模块化语法

const path = require('path')
// 用于把打包后的js/css等资源，自动插入到public/index.html中
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 在每次执行npm run build时，自动帮我们清理掉dist
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// Webpack最新的ESLint的使用方式，eslint-loader已经
const ESLintPlugin = require('eslint-webpack-plugin')

// 使用 cross-env 这个库，可以方便地向 Node 进程中添加环境变量
const isDev = process.env.NODE_ENV === 'development'
console.log('-----------------------', isDev,  process.env.NODE_ENV)

const config = {
  // 在这里写 生产环境的配置
  mode : 'production',
  // 入口，程序的入口
  // entry: path.resolve(__dirname, './src/main.js'),
  entry: {
    // 给入口文件一个名字，叫app
    // app: path.resolve(__dirname, './src/main.js'),
    app: './src/main.js' // 也可以使用相对路径
  },
  // 出口，打包后输出
  output: {
    filename: '[name].[chunkhash].js',  // 一捆、一束
    path: path.resolve(__dirname, './dist'),  // 只能写绝对路径
    publicPath: ''
  },
  plugins: [
    // 打包时，用于把js/css等文件，自动插入到index.html中去
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      title: '2009'
    }),
    // 每次打包前，自动清理掉 dist 目录中残留文件
    new CleanWebpackPlugin()
  ],
  // loaders
  // 在webpack眼中一切皆模块，每一种模块都需要对应的loaders来加载处理
  module: {
    // Webpack要根据你定义的规则，来编译各种不同后缀的文件模块
    rules: [
      // sass是Sass的编译器，它的作用是把sass-loader加载进来的scss文件编译成css文件。
      { test: /\.(css|scss)$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      // less-loader用于加载.less文件，交给 less 进行编译，编译成 css文件。
      // 如何配置 less 支持 antd 主题色的修改？如下两种方法（二选一）：
      // 一种是使用 webpack 的 less-loader 选项配置
      // 一种是直接修改文件 /node_modules/antd/lib/style/themes/default.less
      { test: /\.less$/, use: [
        { loader: 'style-loader' },
        { loader: 'css-loader' },
        { loader: 'less-loader', options: {
          lessOptions: {
            // 开启JavaScript，支持less中的JS函数
            javascriptEnabled: true,
            // 自定义antd主题
            modifyVars: {
              "primary-color": "#00ff00"
            }
          }
        }}
      ]},
      // file-loader的作用，是专门用于加载图片资源的。
      { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader'] },
      // babel-loader用于加载.js文件，并交给 @babel/* 编译器
      // 在处理js模块时，为了让编译速度更快，一定要忽略掉 node_modules
      // 要让 babel生效，在项目根目录，还要添加 babel.config.js 配置文件
      { test: /\.(js|jsx)$/, use: ['babel-loader'], exclude: /node_modules/ },
      // eslint-loader用于加载.js文件，交给 eslint 这个库来进行检查
      // enforce:'pre'，当代码变化时，先检测代码规范，只有当代码满足规范时，才执行其它的 后置loader的处理
      // { test: /\.js$/, use: ['eslint-loader'], exclude: /node_modules/, enforce:'pre' }
    ]
  },
  resolve: {
    alias: {
      // 添加 @ 绝对路径
      '@': path.resolve(__dirname, 'src')
    },
    // 添加可以省略的文件后缀列表
    extensions: ['.js', '.jsx', '.ts', '.json', '.css', '.vue']
  }
}

// 开发环境的特殊配置
if (isDev) {
  config.mode = 'development'
  // 当程序报错时，会显示错误在源码中的位置，否则显示在编译后代码中的位置
  config.devtool = 'source-map'
  // 默认情况下，代码检测是由 eslint 这个包进行检测。
  // babel-eslint 它可以配合 eslint 一起工作，来检测代码规范
  config.plugins.push(
    new ESLintPlugin({
      exclude: ['node_modules']
    })
  )
  // 本地服务
  // 要配合 webpack-dev-server 一起使用
  config.devServer = {
    port: 8888,
    // 运行本地服务时，自动打开浏览器
    open: true,
    // 开启HMR(Hot Module Replacement)热更新功能
    // 启用本地node服务中的socket长连接来实时通信
    hot: true,
    // 指定本地服务的静态资源目录
    contentBase: './public',
    // 当本地项目运行时，发生errors错误，以覆盖层的方式遮住视图
    overlay: {
      errors: true
    },
    proxy: {
      '/soso': {
        target: 'https://c.y.qq.com',
        changeOrigin: true
      }
    }
  }
}

module.exports = config
