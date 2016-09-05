const ObjectId = require('mongodb').ObjectId;

module.exports.addForm = (req, res, next) => {
	return res.json(req.query);
	res.render('users/user-add.njk.html');
};

module.exports.add = (req, res) => {

	req.app.connection.collection('users')
		.insertOne({
			name: req.body.name, 
			age: req.body.age
		})
		.then((data) => res.redirect('/users'))
		.catch((error) => next(error))
	;
};

module.exports.detail = function(req, res) {
	res.render('users/user-detail.njk.html', {user: req.user});
};

module.exports.delete = function(req, res) {
	req.app.connection.collection('users')
		.deleteOne({
			_id: new ObjectId(req.params.id)
		})
		.then(() => res.redirect('/users'))
	;
};

module.exports.list = function(req, res) {
	req.app.connection.collection('users')
		.find().toArray()
		.then((foundUsers) => res.render('users/user-list.njk.html', {users: foundUsers}))
	;
};

module.exports.updateForm = function(req, res) {
	 res.render('users/user-update.njk.html', {user: req.user});
};

module.exports.update = function(req, res) {
	req.app.connection.collection('users')
		.updateOne({
			_id: new ObjectId(req.params.id)
		}, {
			$set: {name: req.body.name}
		})
		.then(() => res.redirect('/users'))
	;
};
