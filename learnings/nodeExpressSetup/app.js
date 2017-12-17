var express = require('express');

var app = express();

var bookRouter = require('./src/routes/bookroutes.js')

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

var ejsObject = {
    titileString: "Home",
    navArray: [{
        Link: "/books",
        Text: "books"
    }, {
        Link: "/authors",
        Text: "authors"
    }]
};

app.get('/', function (req, res) {
    res.render('index', ejsObject);
});

app.use('/books', bookRouter);


app.listen(port, function (err) {
    if (err) {
        console.log(err);
    }
    console.log('express is runnnig on the port:' + port);
});