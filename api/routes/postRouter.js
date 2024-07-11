const express = require("express");
const Router = express.Router();
const jsonData = require("../../config/posts.json");
const { homeStartingContent, aboutContent, contactContent, firstPublish } =
	jsonData.reduce((acc, obj) => {
		return { ...acc, ...obj };
	}, {});
const Publish = require("../models/posts");
const publish = new Publish(firstPublish);

const postDefault = [publish];

Router.get("/", async (req, res) => {
	await Publish.find({}).then((findPosts) => {
		if (findPosts.length === 0) {
			Publish.insertMany(postDefault)
				.then(() => {
					console.log("Data inserted");
				})
				.catch((err) => {
					console.log(err);
				});
		}
	});

	res.render("home", {
		pageText: homeStartingContent,
		postDefault,
	});
});

Router.post("/post/:postId", (req, res) => {
	const { title, content } = req.body;

	res.render("post", { title, content });
});

Router.get("/about", (req, res) => {
	res.render("about", {
		pageText: aboutContent,
	});
});

Router.get("/contact", (req, res) => {
	res.render("contact", {
		pageText: contactContent,
	});
});

Router.get("/compose", (req, res) => {
	res.render("compose");
});

function newPost(title, content) {
	const newP = new Publish({ title: title, content: content });
	postDefault.push(newP);
	newP.save();
	console.log(postDefault);
}

Router.post("/compose", (req, res) => {
	const newTitle = req.body.newTitle;
	const newContent = req.body.newPost;

	newPost(newTitle, newContent);
	res.redirect("/");
});

module.exports = Router;
