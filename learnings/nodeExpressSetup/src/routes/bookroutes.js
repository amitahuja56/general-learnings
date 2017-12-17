var express = require('express');

var bookRouter = express.Router();

var booksArray = [{
        title: "Lord of the rings",
        author: "amit ahuja"
    },{
        title: "Shiva Triology",
        author: "Amish"
    }];

var booksObject = {
    titileString: "Books",
    navArray: [{
        Link: "/books",
        Text: "books"
    }, {
        Link: "/authors",
        Text: "authors"
    }],
    booksArray: booksArray
};

bookRouter.route('/').get(function(req,res){
    res.render('books', booksObject);
});

bookRouter.route('/:id').get(function(req,res){
    var id = req.params.id;
    res.render('singlebook',{
    titileString: "Book",
    navArray: [{
        Link: "/books",
        Text: "books"
    }, {
        Link: "/authors",
        Text: "authors"
    }],
    booksArray: booksArray[id]
});
});

module.exports = bookRouter;