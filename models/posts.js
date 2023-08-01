const mongoose = require("mongoose")

const publishSchema = {
    title: String, content: String
}

const Publish = mongoose.model("Publish", publishSchema);

const newPublish = new Publish();
   




module.exports =  Publish;
