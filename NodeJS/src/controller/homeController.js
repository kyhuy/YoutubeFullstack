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

  return res.render("displayCRUD.ejs", { dataTable: data });
};
let getEditCRUD = async (req, res) => {
  let userId = req.query.id;
  if (userId) {
    let userData = await CRUDservice.getUserInfoById(userId);
    // checl user data not found!

    //=====
    return res.render("editCRUD.ejs", { user: userData });
  } else {
    return res.send("Users not found");
  }
};
let putCRUD = async (req, res) => {
  let data = req.body;

  let allUsers = await CRUDservice.updateUserData(data);

  return res.render("displayCRUD.ejs", { dataTable: allUsers });
};
module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
  displayGetCRUD: displayGetCRUD,
  getEditCRUD: getEditCRUD,
  putCRUD: putCRUD,
};
