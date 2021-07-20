import express from "express";
import homeController from "../controller/homeController";
let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/hoidanit", homeController.getAboutPage);
  router.get("/crud", homeController.getCRUD);
  //rest api

  return app.use("/", router);
};
module.exports = initWebRoutes;
