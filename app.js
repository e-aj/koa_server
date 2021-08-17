//服务器的入口文件
//1.创建koa的实例对象
const koa = require('koa')
const app = new koa()
//2.绑定中间件
//绑定第一层中间件
const respDurationMiddleware =  require('./middleware/koa_response_duration')
app.use(respDurationMiddleware)
//绑定第二层中间件
const respHraderMiddleware = require('./middleware/koa_response_header')
app.use(respHraderMiddleware)
//绑定第三层中间件
const respDataMiddleware = require('./middleware/koa_response_data')
app.use(respDataMiddleware)
//3.绑定端口号 8888
app.listen(8888)