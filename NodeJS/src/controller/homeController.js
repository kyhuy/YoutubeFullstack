import db from "../models/index";
import CRUDservice from "../services/CRUDservice";
let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();

    return res.render("homepage.ejs", { data: JSON.stringify(data) });
  } catch (e) {
    console.log(e);
  }
};
let getAboutPage = (req, res) => {
  return res.render("test/about.ejs");
};
let getCRUD = (req, res) => {
  return res.render("crud.ejs");
};
// object: {
//     key:'';
//     value:'';
// }
let postCRUD = async (req, res) => {
  let message = await CRUDservice.createUser(req.body);
  console.log(message);
  return res.send("POST CRUD FROM SERVER");
};
let displayGetCRUD = async (req, res) => {
  let data = await CRUDservice.getAllUser();

  return res.render("displayCRUD.ejs");
};
module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
  displayGetCRUD: displayGetCRUD,
};
