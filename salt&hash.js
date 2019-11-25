const bcrypt = require('bcrypt-nodejs')
const express = require('express');
const plainTextPassword1 = "DFGh5546*%^__90";
const pug = require('pug');
const path = require('path');
const route = require('./routes/routes.js');
const bodyParser = require('body-parser');
const expressSessions = require('express-session');

const app = express();
const salting = 10;
const plainTextPassword1 = "DFGh5546*%^__90";

bcrypt
  .genSalt(salting)
  .then(salt => {
    console.log(`Salt: ${salt}`);

    return bcrypt.hash(plainTextPassword1, salt);
  })
  .then(hash => {
    console.log(`Hash: ${hash}`);

    // Store hash in your password DB.
  })
  .catch(err => console.error(err.message));

// var myHash;

// const makeHash = the_str => {
//     bcrypt.hash(the_str, null, null, (err, hash) => {
//         myHash = hash;
//         hashDone();
//     });
// }

// const hashDone = () => {
//     var Password;

//     bcrypt.compare(Password, myHash, (err, res) => {
//         if(res) {
//             require.session.user = {
//                 isAuthenticated: true,
//                 username: require.body.username
//             };
//             console.log('Strong')
//         } else {
//             console.log('Bad')
//         }
//     });
// };
