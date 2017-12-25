var express = require('express');
var bookRouter = express.Router();

var router = function (navArray) {
    var booksArray = [{
        title: "Lord of the rings",
        author: "amit ahuja"
    }, {
        title: "Shiva Triology",
        author: "Amish"
    }];

    var booksObject = {
        titileString: "Books",
        navArray: navArray,
        booksArray: booksArray
    };

    bookRouter.route('/').get(function (req, res) {
        res.render('books', booksObject);
    });

    bookRouter.route('/:id').get(function (req, res) {
        var id = req.params.id;
        res.render('singlebook', {
            titileString: "Book",
            navArray: navArray,
            booksArray: booksArray[id]
        });
    });
    
    return bookRouter;
}



module.exports = router;