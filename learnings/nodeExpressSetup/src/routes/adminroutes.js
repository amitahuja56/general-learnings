var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var booksArray = [{
    title: "Lord of the rings",
    author: "amit ahuja"
}, {
    title: "Shiva Triology",
    author: "Amish"
}];
var router = function (navArray) {

    adminRouter.route('/addBooks')
        .get(function (req, res) {

            var url = "mongodb://localhost:27017";
            var dbName = 'myproject';

            mongodb.connect(url, function (err, client) {
                var db = client.db(dbName);
                var collection = db.collection('books');

                collection.insertMany(booksArray, function (err, result) {
        
                    res.send(result);
                    client.close();
                })
            })

            //res.send("Inserting Books");
        });
    return adminRouter;
}

module.exports = router;