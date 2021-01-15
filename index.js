const Koa = require('koa');
const app = new Koa();
var moment = require('moment');



app.use(async ctx => {
  moment.locale();
  const today = moment().format('LLLL'); 
  ctx.body = today;
});

app.listen(3000);



