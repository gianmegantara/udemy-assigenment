const express = require('express');
const router = express.Router();

const newuser = [];

router.get('/user', (req, res) => {
    res.render('user', {
        path: '/user',
        pageTitle: 'User-Page'
    });
});

router.post('/add-user', (req, res) => {
    newuser.push({
        username: req.body.username
    });
    console.log(newuser);
    res.redirect('/');
});

exports.router = router;
exports.datauser = newuser;