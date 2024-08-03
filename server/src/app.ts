import axios from 'axios';
import dotenv from "dotenv";
import { DatabaseLoader } from "./loaders/database.loader";
import { ExpressLoader } from "./loaders/express.loader";
import { WebScrap } from "./service/webScrap.service";
import tagRouter from  "./routes/tags.routes";
import authRouter from  "./routes/auth.routes";
import { MiddlewareLoader } from "./loaders/middleware.loader";
import { RoutesLoader } from "./loaders/routes.loader";

//aws serverless deployment
import serverless from 'serverless-http';

dotenv.config();
const app = ExpressLoader.init();
// Set the port number for the server
const port = process.env.PORT;
//  Number(process.env.PORT);
(async () => {
  try {
  const response = await axios.get('http://httpbin.org/ip');
  const ip = response.data.origin;

  console.log(`Public IP address: ${ip}`);
  }catch(err) {
    console.log("error from ip" , err);
  }
})();

console.log("port", process.env.PORT);
DatabaseLoader.init();



const appVersion = "v1";
MiddlewareLoader.init(app);
RoutesLoader.init(app, appVersion);



// if (process.env.IS_OFFLINE) {
  app.listen(port, () =>
    console.log(`
      ==================================
      🚀 Server running on port ${port}!🚀
      ==================================
    `)
  );
// }



export const handler = serverless(app);
// module.exports = app;
