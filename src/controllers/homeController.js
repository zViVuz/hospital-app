import db from "../models/index";

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    console.log("------------------------");
    console.log(data);
    console.log("------------------------");
    return res.render("homepage.ejs", {
      data: JSON.stringify(data)
    });
  } catch (error) {
    console.log(error);
  }
  //   return res.send("Hello world from controller");
};

let aboutPage = (req, res) => {
  return res.render("test/aboutme.ejs");
};

module.exports = {
  getHomePage: getHomePage,
  aboutPage: aboutPage,
};
