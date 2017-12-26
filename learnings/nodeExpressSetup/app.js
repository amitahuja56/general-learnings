var express = require('express');

var app = express();

var navArray = [{
        Link: "/books",
        Text: "books"
    }, {
        Link: "/authors",
        Text: "authors"
    }];

var bookRouter = require('./src/routes/bookroutes.js')(navArray);
var authRouter = require('./src/routes/authroutes.js')(navArray);
var adminRouter = require('./src/routes/adminroutes')(navArray);

var port = 2209;

app.use(express.static('public'));


//bootsrtap story template index render

//app.use(express.static('src/views'));
//app.use(express.static('src/views')); 

// handlebars thing

//var handlebars = require('express-handlebars');
//app.set('views','./src/views');
//app.engine('.hbs', handlebars({extname: '.hbs'}));
//var handlebarsObjcet = {
//    yo: 'baba ji'
//}
//app.set('view engine', '.hbs');
//app.get('/', function (req, res) {
//    res.render('index',handlebarsObjcet);    
//}); 


app.set('views', './src/views');
app.set('view engine', 'ejs');

var homeObject = {
    titileString: "Home",
    navArray: navArray
};

//routes 

app.get('/', function (req, res) {
    res.render('index', homeObject);
});

app.use('/books', bookRouter);

app.use('/authors', authRouter);
app.use('/admin', adminRouter);

app.listen(port, function (err) {
    if (err) {
        console.log(err);
    }
    console.log('express is runnnig on the port:' + port);
});