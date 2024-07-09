//jshint esversion:6
const express = require("express");
const postRouter = require("./api/routes/postRouter");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const connectDB = require ("./config/database.js");

const app = express();

connectDB()

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(postRouter)



app.listen(3000, function () {
  console.log("Server started on port 3000");
});
