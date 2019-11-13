const express = require('express'),
    pug = require('pug'),
    path = require('path'),
    route = require('./routes/routes.js'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser');

const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname+'/views');

app.use(express.static(path.join(__dirname+'/public')));
app.use(cookieParser('passphrase that we need to change later'));

var urlencodedParser = bodyParser.urlencoded({
    extended: true
});



app.listen(3000);