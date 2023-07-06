const path = require("path");

const express = require("express");

const router = express.Router();

const users = []; 

// /users/ => GET
router.get("/", (req, res, next) => {
  res.render("users", { users: users, pageTitle: "Users" });
});

// /users/add-user => POST
router.post("/add-user", (req, res, next) => {
  users.push({ user: req.body.user });
  console.log(users);
  res.redirect("/users");
});

exports.routes = router;
exports.users = users;
