const config = require('../config');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/data', {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

const mdb = mongoose.connection;
mdb.on('error', console.error.bind(console, 'connection error:'));
mdb.once('open', function (callback) {

});

var userSchema = mongoose.Schema({
	username: String,
	password: String,
	email: String,
	age: String,
	question1: String,
	question2: String,
	question3: String
});

var User = mongoose.model('User_Collection', userSchema);

exports.index = (req, res) => {
	User.find(function (err, user) {
		if (err) return console.error(err);
		res.render('index', {
			title: '',
			"config": config
			//user: user

		});
	});
};

exports.create = (req, res) => {
	res.render('create', {
		title: '',
		config: config
	});
};

exports.createUser = (req, res) => {
	let user = new User({
		username: req.body.username,
		password: req.body.password,
		email: req.body.email,
		age: req.body.age,
		question1: req.body.question1,
		question2: req.body.question2,
		question3: req.body.question3
	});
	user.save(function (err, user) {
		if(err) return console.error(err);
		console.log(user.username + ' added');
	});
	res.redirect('/');
};

exports.edit = (req, res) => {
	User.findById(req.params.id, function (err, user) {
	  if (err) return console.error(err);
	  res.render('edit', {
		title: 'Edit User',
		user: user,
		config: config
	  });
	});
  };

exports.editUser = (req, res) => {
	User.findById(req.params.id, function (err, user) {
		console.log(user);
	  if (err) return console.error(err);
		user.username = req.body.username,
		user.password = req.body.password,
		user.email =req.body.email,
		user.age =req.body.age,
		user.question1 = req.body.question1,
		user.question2 = req.body.question2,
		user.question3 = req.body.question3
	  user.save(function (err, user) {
			if (err) return console.error(err);
			console.log(req.body.username + ' updated');
	  });
	});
	res.redirect('/'); 
};

exports.delete = (req, res) => {
	User.findByIdAndRemove(req.params.id, function (err, user) {
	  if (err) return console.error(err);
	  res.redirect('/');
	});
};

exports.details = (req, res)=> {
	User.findById(req.params.id, function (err, user) {
	  if (err) return console.error(err);
	  res.render('details', {
		title: user.username + "'s Details",
		user: user,
		config: config
	  });
	});
};