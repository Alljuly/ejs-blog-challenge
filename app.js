//jshint esversion:6
const Publish = require ("./api/models/posts");
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const jsonData = require("data/postsSamples.json");
const  { homeStartingContent, aboutContent, contactContent, firstPublish } = jsonData.reduce((acc, obj) => {
  return { ...acc, ...obj };
}, {});


mongoose.connect("mongodb://127.0.0.1:27017/BlogDB");


const publish = new Publish(firstPublish);

const postDefault = [publish];


const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  await Publish.find({}).then((findPosts) =>{
    if(findPosts.length === 0 ){
      Publish.insertMany(postDefault).then(() =>{
        console.log("Data inserted");
      }).catch((err) => {
        console.log(err);
      })
    }
  })
  res.render("home", {
    pageText: homeStartingContent, postDefault
  });
});

app.post("/post/:postId", (req, res) => { 
  const {title, content} = req.body;

  res.render("post", {title, content});
})



app.get("/about", (req, res) => {
  res.render("about", {
    pageText: aboutContent,
  });
})



app.get("/contact", (req, res) => {
  res.render("contact", {
    pageText: contactContent,
  });
});

app.get("/compose",  (req, res) =>{
  res.render("compose")
});

function newPost(title, content){
  const newP = new Publish({title: title, content: content});
  postDefault.push(newP);
  newP.save();
  console.log(postDefault);
}

app.post("/compose", (req, res) =>{
const newTitle= req.body.newTitle;
const newContent= req.body.newPost;

newPost(newTitle, newContent);
res.redirect("/");

})

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
