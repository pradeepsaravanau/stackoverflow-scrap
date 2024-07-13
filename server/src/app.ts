import { DatabaseLoader } from "./loaders/database.loader";
import { ExpressLoader } from "./loaders/express.loader";
import { WebScrap } from "./service/webScrap.service";
import tagRouter from  "./routes/tags.routes";
import authRouter from  "./routes/auth.routes";


// Create an Express application

import dotenv from "dotenv";
dotenv.config();
const app = ExpressLoader.init();
// Set the port number for the server
const port = 3080;
//  Number(process.env.PORT);

const webScraper = new WebScrap();

(async () => {
  try {
    console.log("connecting....");
    await DatabaseLoader.init();
    console.log("donee");
    // const browser = await webScraper.getPopularLanguage();
  } catch (error: any) {
    console.log("Error " + error.toString());
  }
})();



app.use('/api/v1/tags', tagRouter);
app.use('/api/v1/auth', authRouter);


// app.get('/api/tags', async (req, res) => {
//   const tags = await Tag.find();
//   res.json(tags);
// });

// Start the server and listen on the specified port
app.listen(port, () =>
  console.log(`
    ==================================
    🚀 Server running on port ${port}!🚀
    ==================================
  `)
);

module.exports = app;
