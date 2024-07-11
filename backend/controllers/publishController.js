const publishService = require("../services/publishService.js");

async function findAllPublishes() {
	try {
		const publishes = await publishService.findAllPublishes();
		return publishes;
	} catch (error) {

    }
}
