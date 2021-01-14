const Koa = require('koa');
const app = new Koa();
var moment = require('moment');

const today = moment().format('MMMM Do YYYY, h:mm:ss a');

app.use(async ctx => {
  ctx.body = today;
});

app.listen(3000);