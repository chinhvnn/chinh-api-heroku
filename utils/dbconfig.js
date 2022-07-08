var mongoose = require('mongoose');

const mlabURI = 'mongodb+srv://chinhvnn:123VanChinh@cluster0.c5tgm0v.mongodb.net/chinh-demo'

const connection = mongoose.connect(mlabURI, (error) => {
	if(error){
		console.log("Error " + error);
	}else{
		console.log("Connected successfully to server MONGODB")
	}
});

module.exports = connection;