var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//CORS Settings
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//expose rest api

//Mock data
var heroes = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' },
    { id: 21, name: 'Subramanian' },
    { id: 22, name: 'Geetha' }


];
//Get all heroes
app.get('/api/heroes', function (req, res) {
    console.log('request is coming');
    res.json(heroes);
})

app.post('/api/heroes', function (req, res) {
    var hero = req.body;
    var newHero = {
        id: heroes.length + 1,
        name: hero.name
    }
    heroes.push(newHero);
    return res.json(heroes);
});

app.listen(8080, function () {
    console.log('App is started to accept Request');
})