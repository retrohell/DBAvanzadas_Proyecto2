const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
const methodOverride = require('method-override');

// Initializations
const app = express();
//const __dirname = dirname(fileURLToPath(import.meta.url));

// settings
app.set("port", process.env.PORT || 4000);
app.set("views", path.join(__dirname, "views"));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// middlewares}
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'))

// Global Variables

// routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/articles.routes'));
app.use(require('./routes/categories.routes'));
app.use(require('./routes/comments.routes'));
app.use(require('./routes/tags.routes'));
app.use(require('./routes/users.routes'));

//app.get('/', (req, res) => {
//    res.render('index')
//});

// static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;