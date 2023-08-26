// 引入express插件包并生成一个实例app
var express = require('express')
var app = express()

// 静态资源服务器
var path = require('path') // path路径用来找文件哦
var serveStatic = require('serve-static') // serve-static用来启动静态资源文件服务
const rootPath = path.join(__dirname, 'public') // 去哪里找呢？去public目录下找
app.use(serveStatic(rootPath)) // 注册即使用

// 在80端口上启动后端服务
app.listen(80, (req, res) => {
    console.log('后端服务端口地址为:  http://localhost:80');
    console.log('后端服务端口地址为:  http://127.0.0.1:80');
})