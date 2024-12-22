import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebroutes from "./routes/web";
require("dotenv").config();

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebroutes(app);

let port = process.env.PORT || 3030;
// port == undifined => port = 3030
app.listen(port, () => {
  console.log("Server listening on port " + port);
});
