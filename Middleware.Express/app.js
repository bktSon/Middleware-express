const express = require('express');
const app     = express();
const router  = require('./router');
const mongodb = require('./mongodb.provider');
const expressNunjucks = require('express-nunjucks');
const bodyParser = require('body-parser');

app.set('views', __dirname + '/templates');
 
const njk = expressNunjucks(app);

app.use(bodyParser({
	extends: true
}))

app.use(mongodb);
app.use(router);
app.listen(3000);

