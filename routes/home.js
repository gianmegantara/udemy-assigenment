const express = require('express');
const router = express.Router();
const data = require('./user');

router.get('/', (req, res) => {
    const datauser = data.datauser;
    res.render('home', {
        path: '/',
        pageTitle: 'Home-Page',
        user: datauser
    });
});

module.exports = router;