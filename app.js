//jshint esversion:6
const Publish = require ("./models/posts");
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const jsonData = require("./postsSamples.json");
const  { homeStartingContent, aboutContent, contactContent } = jsonData.reduce((acc, obj) => {
  return { ...acc, ...obj };
}, {});


mongoose.connect("mongodb://127.0.0.1:27017/BlogDB");


const publish = new Publish({
  title: "Padrão",
  content: "tly to show my beauty sit on human. Stick butt in face ask to be pet then attack owners hand so the best thing in the universe is a cardboard box, and gimme attention gimme attention gimme attention gimme attention gimme attention gimme attention just kidding i don't want it anymore meow bye. Jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human around for not waking up request food, purr loud scratch the walls, the floor, the windows, the humans. Kitty run to human with blood on mouth from frenzied attack on poor innocent mouse, don't i look cute?. I shredded your linens for you love to play with owner's hair tie the fat cat sat on the mat bat away with paws or attack the child stand with legs in litter box, but poop outside so meow but i heard this rumor where the humans are our owners, pfft, what do they know?!. Scratch so owner bleeds. Kitty loves pigs friends are not food stuff and things, so i love cuddles. Give me some of your food give me some of your food give me some of your food meh, i don't want it get video posted to internet for chasing red dot. tly to show my beauty sit on human. Stick butt in face ask to be pet then attack owners hand so the best thing in the universe is a cardboard box, and gimme attention gimme attention gimme attention gimme attention gimme attention gimme attention just kidding i don't want it anymore meow bye. Jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human around for not waking up request food, purr loud scratch the walls, the floor, the windows, the humans. Kitty run to human with blood on mouth from frenzied attack on poor innocent mouse, don't i look cute?. I shredded your linens for you love to play with owner's hair tie the fat cat sat on the mat bat away with paws or attack the child stand with legs in litter box, but poop outside so meow but i heard this rumor where the humans are our owners, pfft, what do they know?!. Scratch so owner bleeds. Kitty loves pigs friends are not food stuff and things, so i love cuddles. Give me some of your food give me some of your food give me some of your food meh, i don't want it get video posted to internet for chasing red dot. Meow for food, then when human fills food dish, t Meow for food, then when human fills food dish, t"
});

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
