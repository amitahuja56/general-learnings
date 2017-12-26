var express = require('express');

var authRouter = express.Router();

var routerA = function (navArray) {
    var authArray = [{
        name: "amit",
        des: "amit ahuja something"
    }, {
        name: "Amish",
        des: "Amish Something"
    }];

    var authObject = {
        titileString: "Auhtors",
        navArray: navArray,
        authArray: authArray
    };

    authRouter.route('/').get(function (req, res) {
        res.render('authors', authObject);
    });

    authRouter.route('/:name').get(function (req, res) {
        var name= req.params.name;
        console.log(authArray);
        var author = {};
        for (var i = 0; i < authArray.length; i++){
            if(authArray[i].name == name){
                author = authArray[i];
            }
        }
        console.log(author);
        res.render('singleauhtor', {
            titileString: name,
            navArray: navArray,
            authArray: author
        });
    });

    return authRouter;
}

module.exports = routerA;