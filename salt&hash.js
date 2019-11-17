const bcrypt = require('bcrypt-nodejs')
const express = require('express');
const pug = require('pug');
const path = require('path');
const route = require('./routes/routes.js');
const bodyParser = require('body-parser');
const expressSessions = require('express-session');

const app = express();
var myHash;

const makeHash = the_str => {
    bcrypt.hash(the_str, null, null, (err, hash) => {
        myHash = hash;
        hashDone();
    });
}

const hashDone = () => {
    var Password;

    bcrypt.compare(Password, myHash, (err, res) => {
        if(res) {
            require.session.user = {
                isAuthenticated: true,
                username: require.body.username
            };
            console.log('Strong')
        } else {
            console.log('Bad')
        }
    });
};
