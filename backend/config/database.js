const mongoose = require("mongoose");

 async function connectDB() {
	try {
		mongoose.connect("mongodb://127.0.0.1:27017/BlogDB");
		console.log("Atlas mongo connect");
	} catch (error) {
		console.error("Error:", error.message);
	}
}

async function disconnDB() {
	await mongoose.disconnect();
}

module.exports = connectDB, disconnDB;
