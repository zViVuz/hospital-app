import express from "express";
import bodyParser from "body-parser"; //lấy các tham số mà client sử dụng | /user?id=7
import viewEngine from "./config/viewEngine";
import initWebRouetes from "./route/web";
require('dotenv').config();

let app = express();

//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRouetes(app);

let port = process.env.PORT || 6969;
//PORT === undefined => port = 6969
app.listen(port, () => {
  //callback
  console.log("Backend Nodejs is runnig on the port: " + port);
});
