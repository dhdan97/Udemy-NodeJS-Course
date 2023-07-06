const http = require("http");
const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const userRoutes = require("./routes/users");
const homeRoutes = require("./routes/index");

// parse incoming request body
app.use(bodyParser.urlencoded({extended: false}));

// identify 'public' as the folder to search for static files
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', userRoutes);

app.use(homeRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page Not Found</h1>");
});

app.listen(3000);
