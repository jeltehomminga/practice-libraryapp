var express = require('express');
var router = express.Router();
const Book = require('../models/book');
const Author = require('../models/author');

router.get('/newbook', (req, res) => {
    Author.find({}, 'firstName lastName')
        .then((authorsFromDB) => res.render("newbook", { authorsFromDB }))
        .catch(error => console.log(error));
})

router.post('/newbook', (req, res) => {
    Book.create(res.req.body, err => err ? res.status(500).send("book not created") : res.status(200).redirect("/"));
})

module.exports = router;