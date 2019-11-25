const express = require('express');
const pug = require('pug');
const path = require('path');
const route = require('./routes/routes.js');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSessions = require('express-session');
const config = require('./config');

const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use(express.static(path.join(__dirname + '/public')));

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

const logout = () => {
	console.log('logged out');
	var pageContent = document.getElementById('userTable');
	var logoutBtn = document.getElementById('logoutBtn');
	
	if (pageContent.style.display === "none" && logoutBtn.style.display === "none") {
		pageContent.style.display = "block";
		logoutBtn.style.display = "block";		
	} else {
		pageContent.style.display = "none";
		logoutBtn.style.display = "none";
	}
}

const checkAuth = (req, res) => {
	if (req, session.user && req.session.user.isAuthenticated) {
		next();
	} else {
		res.redirect('/')
	}
}

app.listen(3000);