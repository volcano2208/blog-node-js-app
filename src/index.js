const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;
const db = require('./config/db.index');
const route = require('./routes/index');

//connect to db
db.connect();

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
//use static files
app.use(express.static(path.join(__dirname, 'public')));

//template engines
app.engine('hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//HTTP logger
app.use(morgan('combined'));

//routes
route(app);


//app listen port
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
})