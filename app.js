const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const publicRouter = require('./routes/home');
const userData = require('./routes/user');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(publicRouter);
app.use(userData.router);
app.use((req, res, next) => {
    res.status(404).render('404', {
        pageTitle: 'Not Found',
        path: ''

    });
});

app.listen(4000);