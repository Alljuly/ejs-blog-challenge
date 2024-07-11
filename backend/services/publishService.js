const jsonData = require("../config/posts.json");
const Publish = require("../models/posts");



const { homeStartingContent, aboutContent, contactContent, firstPublish } =
	jsonData.reduce((acc, obj) => {
		return { ...acc, ...obj };
	}, {});
const publish = new Publish(firstPublish);

const postDefault = [publish];

async function findAllPublishes(){
    try {
    
        
    } catch (error) {
        
    }
}


