const mongoose = require("mongoose");


export async function connectDB() {
	try {
		mongoose.connect("mongodb://127.0.0.1:27017/BlogDB");
		console.log("Atlas mongo connect");
	} catch (error) {
		console.log("aaa", error.message);
	}
}

export async function disconnDB() {
	await mongoose.disconnect();
}




