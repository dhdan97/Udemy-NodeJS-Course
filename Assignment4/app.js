const http = require("http");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const homeRoute = require("./routes/home");
const usersRoute = require("./routes/users");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/users", usersRoute.routes);

app.use("/", homeRoute);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page Not Found</h1>");
});

app.listen(3000);
