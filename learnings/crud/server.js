const express = require('express');
const app = express();
const bodyParser= require('body-parser');
var db;

app.use(bodyParser.urlencoded({extended: true}))

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://amitahuja56:asdfghjkl@ds227035.mlab.com:27035/basic-crud', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})


app.get('/', (req, res) => {
	console.log('hre');
	db.collection('quotes').find().toArray(function(err, results) {
 	 console.log(results)
  		res.sendFile(__dirname + '/index.html');
	})
})

app.post('/quotes', (req, res) => {

	db.collection('quotes').save(req.body, (err, result) => {
			if (err) return console.log(err)

			console.log('saved to database');
			res.redirect('/');
	})	
})
