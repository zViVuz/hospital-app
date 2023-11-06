let getHomePage = (req, res) => {
  return res.render('homepage.ejs')
//   return res.send("Hello world from controller");
};

let aboutPage = (req, res) => {
    return res.render('test/aboutme.ejs')
}

module.exports = {
  getHomePage: getHomePage,
  aboutPage: aboutPage,
};
