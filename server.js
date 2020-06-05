var express = require('express')
var path = require('path')
var app = express()
// var opn = require('opn')
var localhost = require('address').ip()
let staticDir
let baseUrl
const argv = process.argv[2]
if (argv === 'test') {
  staticDir = '/dist/TestReleased'
  baseUrl = 'http://118.31.222.92:8088'
} else if (argv === 'stage') {
  staticDir = '/dist/GrayReleased'
  baseUrl = 'http://101.37.27.140:12800'
} else if (argv === 'release') {
  staticDir = '/dist/FormalReleased'
  baseUrl = 'https://sp.timing360.com'
}

app.use(express.static(path.join(__dirname, staticDir)))
var proxy = require('http-proxy-middleware')

var options = {
  target: baseUrl, // 测试
  changeOrigin: true, // 需要虚拟主机站点
  pathRewrite: {},
}
var exampleProxy = proxy(options) // 开启代理功能，并加载配置
app.use('/', exampleProxy)
app.listen(8888, err => {
  var uri = `http://${localhost}:8888`
  if (!err) {
    console.log(uri)
  } else {
    console.log(err)
  }
})
