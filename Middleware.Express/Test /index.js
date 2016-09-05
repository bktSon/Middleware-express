'use strict';
const express = require('express');
const app     = express();
const router  = express.Router();
const connection = require('./mongo.provider');

router.get('/a', function(req, res, next) {
	if (req.query.name == 'sonbkt') {
		return next();
	}
	res.json('Acess Denide');
}, function(req, res) {
	res.json("Hello Sonbkt");
})

router.get('/', function(req, res) {
	console.log(req.app.get('mongodb'));
});







//app.use(connection);
app.use(connection);
app.use(router);
app.listen(3000);
