const express = require('express');
const pug = require('pug');
const path = require('path');
const route = require('./routes/routes.js');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const config = require('./config');

const app = express();

app.use(cookieParser('This is a cookie'));

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use(express.static(path.join(__dirname + '/public')));

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});
app.use(expressSession ({
	secret: 'thisisthemostsecuresecrettoplevelclearance',
	saveUninitialized: true,
	resave: true,
	cookie: {maxAge: 9999999999999999}
}));

var urlencodedParser = bodyParser.urlencoded({
	extended: true
});

app.get('/', route.index);
app.get('/create', route.create);
app.get('/edit', route.edit);
app.get('/details', route.details);
app.get('/signIn', route.signIn);
app.get('/logout', route.logout);
app.post('/create', urlencodedParser, route.createUser);
app.post('/auth', urlencodedParser, route.auth);
app.post('/edit', urlencodedParser, route.editUser);
app.get('/delete', route.delete);

app.listen(3000);