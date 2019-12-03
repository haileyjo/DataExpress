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

app.use(expressSession ({
	secret: 'thisisthemostsecuresecrettoplevelclearance',
	saveUninitialized: true,
	resave: true,
	cookie: {maxAge: 9999999999999999}
}));
app.use(bodyParser.json());
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

<<<<<<< Updated upstream
=======
app.get('/api', route.api);


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

>>>>>>> Stashed changes
app.listen(3000);