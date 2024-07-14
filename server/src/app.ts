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

const webScraper = new WebScrap();
DatabaseLoader.init();

(async () => {
  try {
    console.log("connecting....");
    console.log("donee");
    // const browser = await webScraper.getPopularLanguage(); //for scrapping data
  } catch (error: any) {
    console.log("Error " + error.toString());
  }
})();


const appVersion = "v1";
MiddlewareLoader.init(app);
RoutesLoader.init(app, appVersion);
app.use('/api/v1/tags', tagRouter);




app.listen(port, () =>
  console.log(`
    ==================================
    🚀 Server running on port ${port}!🚀
    ==================================
  `)
);

module.exports = app;
