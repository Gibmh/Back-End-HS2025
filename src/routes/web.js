import express from "express";
import HomeController from "../controllers/homeController";
let router = express.Router();

let initWebroutes = (app) => {
  router.get("/", HomeController.getHomePage);

  router.get("/home", (req, res) => {
    return res.send("Tét");
  });

  return app.use("/", router);
};

export default initWebroutes;
