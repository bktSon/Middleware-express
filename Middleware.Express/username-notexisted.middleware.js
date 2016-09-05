const ObjectId = require('mongodb').ObjectId;

module.exports = function(req, res, next) {
	req.app.connection.collection('users').findOne({
		name: req.body.name
	}).then((user) => {
		if (user) {
			return res.render('error.njk.html', {message: 'username already in used'});
		}
		next();
	})
}