const Router = require('koa-router')

const userRouter = new Router({
  prefix: '/user'
})

userRouter.post('/login', async ctx => {
  const user = ctx.request.body
  if (user.username === 'niuniu' && user.password === '123') {
    ctx.session.user = {
      username: 'niuniu'
    }
    ctx.body = {
      success: true,
      data: {
        username: 'niuniu'
      }
    }
  } else {
    ctx.status = 400
    ctx.body = {
      success: false,
      message: 'username or password error'
    }
  }
})

module.exports = userRouter
