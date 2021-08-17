//计算服务器消耗时长的中间件
module.exports = async (ctx,next) => {
    //记录开始时间
    const start = Date.now()
    //记录中间件得到执行
    await next()
    //记录结束的时间
    const end = Date.now()
    const duration = end -start
    //设置相应头 X-Response-Time   ctx.set 
    ctx.set('X-Response-Time', duration + 'ms')
}