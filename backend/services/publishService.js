const jsonData = require("../config/posts.json");
const Publish = require("../schemas/publishSchema");
const publishRepository = require("../repositories/publishRepository");

async function findAllPublishes() {
	try {
		const publishes = await publishRepository.findAll();

		if (!publish) {
		}
	} catch (error) {}
}

async function insertDefault() {
	try {
		let firstPublish = jsonData.find((e) => e.page == "firstPublish");
		firstPublish = firstPublish.content;
		const defaultPublish = new Publish(firstPublish);
		const res = await publishRepository.insertPublish(defaultPublish);
		return res;
	} catch (error) {
		return error.message;
	}
}

async function insertPublish(p) {}
