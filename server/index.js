const Koa = require('koa');
const router = require('koa-router')();
const cors = require('koa2-cors');
const app = new Koa();
app.use(cors({
  origin: function (ctx) {
    if (ctx.url === '/list') {
      return 'http://localhost:3000';
    }
    return 'http://localhost:3004'
  },
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept']
}))

router.get('/list', async function (ctx) {
  ctx.body = {
    code: 200,
    data: [
      {
        text: '呵呵',
        done: true
      },
      {
        text: '嘻嘻',
        done: false
      },
      {
        text: '呜呜',
        done: false
      }
    ]
  }
});

app.use(router.routes());

app.listen(3004, () => {
  console.log('running at port 3004');
});