const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser('passphrase'));

app.get('/' = (req, res) => {
    if(req.cookies.LastHere == null) {
        let date = new Date();
        let time = date.getMonth() + '/' +date.getDate() + '/' + date.getFullYear();
        res.clearCookie('Last here');
        res.cookie('Last Here', time);
        res.send('Last Vist' + time);
    }
    res.send('Last Here' + req.cookies.LastHere);
})