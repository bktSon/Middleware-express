const MongoClient = require('mongodb').MongoClient;
const url         = 'mongodb://localhost:27017/test';

module.exports = function(req, res, next) {
	MongoClient.connect(url, function(err, connection) {
		// req.app.connection = connection;
		// next();
		req.app.set('mongodb', connection);
		next();
	});
}








