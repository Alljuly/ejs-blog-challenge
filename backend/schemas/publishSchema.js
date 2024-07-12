const { mongoose, Schema } = require("mongoose");

const publishSchema = new Schema({
	title: { type: String, required: true },
	content: { type: String, required: true },
});

const Publish = mongoose.model("Publish", publishSchema);

module.exports = Publish;
