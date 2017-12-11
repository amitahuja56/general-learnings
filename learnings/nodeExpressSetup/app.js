var express = require('express');

var app = express();

var port = 2210;

app.use(express.static('public'));
app.use(express.static('src/views'));


app.get('/', function(req,res){
    res.send('hello world');
})

app.get('/books', function(req,res){
    res.send('hello books');
})

app.listen(port,function(err){
    if(err)
    console.log(err);
    console.log('express is runnnig on the port:' + port);
});