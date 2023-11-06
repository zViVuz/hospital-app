import express from "express";
import homePageController from "../controllers/homeController"

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homePageController.getHomePage);
    router.get('/about', homePageController.aboutPage)
    
    router.get('/helloconsau', (req, res) => {
        return res.send('Hello con sau')
    });

    //rest api

    return app.use("/", router)
}

module.exports = initWebRoutes