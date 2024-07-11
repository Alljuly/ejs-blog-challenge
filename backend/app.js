//jshint esversion:6
const express = require("express");
const Router = require("./routes/postRouter.js");
const bodyParser = require("body-parser");
const connectDB = require("./config/database.js");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT;

const app = express();

connectDB();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../frontend/views"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../frontend/public")));
app.use(Router);

app.listen(port,  () => {
	console.log(`Server started on ${port}`);
});
