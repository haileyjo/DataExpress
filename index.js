const express = require('express');
const pug = require('pug');
const path = require('path');
const route = require('./routes/routes.js');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const config = require('./config');

const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use(express.static(path.join(__dirname + '/public')));

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

var urlencodedParser = bodyParser.urlencoded({
	extended: true
});

app.get('/', route.index);
app.get('/create', route.create);
app.get('/edit/:id', route.edit);
app.get('/details/:id', route.details);
app.post('/create', urlencodedParser, route.createUser);
app.post('/edit/:id', urlencodedParser, route.editUser);
app.get('/delete/:id', route.delete);

app.post('/', urlencodedParser, (req, res) => {
	hash.makeHash(req.body.password);
	route.results
});

app.get('/logout', (req, res) => {
	res.session.destory(function (err) {
		if(err) {
			console.log(err);
		} else {
			res.redirect('/');
		}
	});
});

const checkAuth = (req, res) => {
	if(req.session.user && req.session.user.isAuthenticated) {
		next();
	} else {
		res.redirect('/')
	}
}

app.listen(3000);