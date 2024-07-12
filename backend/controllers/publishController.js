const publishService = require("../services/publishService.js");
const jsonData = require("../config/posts.json");

const pageText = {
	homeStartingContent,
	aboutContent,
	contactContent,
	firstPublish,
} = jsonData.reduce((acc, obj) => {
	return { ...acc, ...obj };
}, {});

async function findAllPublishes() {
	try {
		const publishes = await publishService.findAllPublishes();
		return publishes;
	} catch (error) {}
}


function findPageText(str) {
	let res 
	str ? res = publishService.findPageText(str) : res = "Algo inesperado aconteceu"
	return res
}

async