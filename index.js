const express = require('express');
const pug = require('pug');
const path = require('path');
const route = require('./routes/routes.js');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSessions = require('express-sessions');

const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use(express.static(path.join(__dirname + '/public')));
app.use(cookieParser('passphrase that we need to change later'));

var urlencodedParser = bodyParser.urlencoded({
	extended: true
});

app.get('/', route.index);

app.listen(3000);