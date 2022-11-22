const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const cors = require("koa-cors");

const setupRouter = require("./routes");

// const homeRouter = require("./routes/home.router");
// const categoryRouter = require("./routes/category.router");

const bootstrap = () => {
  const app = new Koa();

  app.use(cors());
  app.use(bodyParser());

  setupRouter(app);

  // app.use(homeRouter.routes());
  // app.use(categoryRouter.routes());

  app.listen(3000, () => {
    console.log("服务已开启");
  });
};

bootstrap();
