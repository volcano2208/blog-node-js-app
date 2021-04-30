const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;



//use static files
app.use(express.static(path.join(__dirname, 'public')));

//template engines
app.engine('hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));

//HTTP logger
app.use(morgan('combined'));

//routes
app.get('/', (req, res) => {
    res.render('home');
})

//app listen port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})