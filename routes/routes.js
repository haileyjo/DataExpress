const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/data');

const mdb = mongoose.connection;
mdb.on('error', console.error.bind(console, 'connection error:'));
mdb.once('open', function (callback) {

});

var userSchema = mongoose.Schema({
	username: String,
	password: String,
	email: String,
	age: String,
	ques1Answer: String,
	ques2Answer: String,
	ques3Answer: String
});

var User = mongoose.model('User_Collection', userSchema);

exports.index = (req, res) => {
	User.find(function (err, user) {
		if (err) return console.error(err);
		res.render('index', {
			title: 'Users',
			user: user
		});
	});
};