const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

async function connectDB() {
	try {
		await mongoose.connect(process.env.DATABASE);
		console.log("Atlas mongo connect");
	} catch (error) {
		console.logo("Error:", error.message);
	}
}

async function disconnDB() {
	await mongoose.disconnect();
}

module.exports = connectDB;

