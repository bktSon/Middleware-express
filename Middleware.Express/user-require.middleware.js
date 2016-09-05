const ObjectId = require('mongodb').ObjectId;

module.exports = function(req, res, next) {
	if (req.params.id.length != 24) {
		return res.render('error.njk.html', {message: 'Invalid Id'});
	}

	req.app.connection.collection('users')
		.findOne({
			_id: new ObjectId(req.params.id)
		}).then((user) => {
			if (user) {
				req.user = user;
				return next();
			}
			return res.render('error.njk.html', {message: 'User required'});
		})
}