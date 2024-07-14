import dotenv from "dotenv";
import { DatabaseLoader } from "./loaders/database.loader";
import { ExpressLoader } from "./loaders/express.loader";
import { WebScrap } from "./service/webScrap.service";
import tagRouter from  "./routes/tags.routes";
import authRouter from  "./routes/auth.routes";
import { MiddlewareLoader } from "./loaders/middleware.loader";
import { RoutesLoader } from "./loaders/routes.loader";



dotenv.config();
const app = ExpressLoader.init();
// Set the port number for the server
const port = 3080;
//  Number(process.env.PORT);

DatabaseLoader.init();



const appVersion = "v1";
MiddlewareLoader.init(app);
RoutesLoader.init(app, appVersion);




app.listen(port, () =>
  console.log(`
    ==================================
    🚀 Server running on port ${port}!🚀
    ==================================
  `)
);

module.exports = app;
