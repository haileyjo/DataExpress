const config = require("../config.json");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/data", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
});

const mdb = mongoose.connection;
mdb.on("error", console.error.bind(console, "connection error:"));
mdb.once("open", function(callback) {});

var userSchema = mongoose.Schema({
  username: String,
  password: String,
  email: String,
  age: String,
  question1: String,
  question2: String,
  question3: String
});

var User = mongoose.model("User_Collection", userSchema);

exports.index = (req, res) => {
  if (req.cookies.rememberUser) {
    req.session.user = {
      id: req.cookies.rememberUser
    };
  }
  User.find({}, (err, User_Collection) => {
    if (err) return console.error(err);
    res.render("index", {
      title: "Data",
      question1: User_Collection.question1,
      question2: User_Collection.question2,
      question3: User_Collection.question3,
      config
    });
  // res.render("index", {
  //   title: "title",
  //   config
  // });
});
};

exports.create = (req, res) => {
  res.render("create", {
    title: "",
    config: config
  });
};

exports.createUser = (req, res) => {
  console.log(req.body.password);
  bcrypt.hash(req.body.password, null, null, function(err, hash) {
    console.log(hash);

    let user = new User({
      username: req.body.username,
      password: hash,
      email: req.body.email,
      age: req.body.age,
      question1: req.body.question1,
      question2: req.body.question2,
      question3: req.body.question3
    });
    user.save(function(err, user) {
      if (err) return console.error(err);
      console.log(req.body.username + " added");
    });
    res.redirect("/");
  });
};

exports.edit = (req, res) => {
  User.findById(req.session.user.id, function(err, user) {
    if (err) return console.error(err);
    res.render("edit", {
      title: "Edit User",
      user,
      config: config
    });
  });
};

exports.editUser = (req, res) => {
  bcrypt.hash(req.body.password, null, null, function(err, hash) {
    User.findById(req.session.user.id, function(err, user) {
      console.log(user);
      if (err) return console.error(err);
      user.username = req.body.username;
      user.password = hash;
      (user.email = req.body.email), (user.age = req.body.age);
      user.question1 = req.body.question1;
      user.question2 = req.body.question2;
      user.question3 = req.body.question3;
      user.save(function(err, user) {
        if (err) return console.error(err);
        console.log(req.body.username + " updated");
      });
    });
    res.redirect("/");
  });
};

exports.delete = (req, res) => {
  User.findByIdAndRemove(req.session.user.id, function(err, user) {
    if (err) return console.error(err);
    res.redirect("/");
  });
};

exports.signIn = function(req, res) {
  res.render("signIn", {
    title: "Sign In",
    config: config
  });
};

exports.auth = function(req, res) {
  User.findOne({ username: req.body.username }, function(err, user) {
    if (user) {
      bcrypt.compare(req.body.password, user.password, function(
        err,
        isAuthenticated
      ) {
        if (isAuthenticated) {
          req.session.user = {
            id: user.id
          };
          if (req.body.rememberUser === "on") {
            res.cookie("rememberUser", user.id, {
              maxAge: 99999999999999
            });
          }
          res.redirect("/details");
        }
      });
    } else {
      res.redirect("/signIn");
    }
  });
};

// Testing out how to get details to not break when not logged in

// exports.details = (req, res) => {
//   User.findById(req.session.user.id, function (err, user){
//     if(user.id) {
//       res.render("details", {
//         title: user.username + "'s Details",
//         user,
//         config
//       });
//     } else {
//       res.redirect('/');
//     }
//   })
// };

exports.details = (req, res) => {
  User.findById(req.session.user.id, function(err, user) {
    if (err) return console.error(err);
    res.render("details", {
      title: user.username + "'s Details",
      user,
      config
    });
  });
};

exports.logout = function(req, res) {
  // req.session == null;
  req.session.destroy();

  res.clearCookie("rememberUser");
  res.redirect("/");
};

exports.api = (req,res) => {
<<<<<<< Updated upstream
  User.find({}, (err,User_Collection) => {
    res.json(User_Collection)
  })
}
=======
  User.find({}, (err, User_Collection) => {
    if (err) return console.error(err);
    res.json(User_Collection);
  });
};

// exports.api = (req, res) => {
//   User.find({}, (err, User_Collection) => {
//     if (err) return console.error(err);
//     res.render("api", {
//       title: "Data",
//       question1: User_Collection.question1,
//       question2: User_Collection.question2,
//       question3: User_Collection.question3,
//       config
//     });
    
//   })
//   // User.find({}, (err, User_Collection) => {
//   //   res.json(User_Collection).question1;
//   //   res.json(User_Collection).question2;
//   //   res.json(User_Collection).question3;
//   // });
  
// };
>>>>>>> Stashed changes
