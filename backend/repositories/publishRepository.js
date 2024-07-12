const PublishSchema = require("../schemas/publishSchema");

async function insertDefault(data) {
	return await PublishSchema.create(data);
}
