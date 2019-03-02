var express = require('express');
var router = express.Router();
const Book = require('../models/book');

router.get('/', (req, res) => {
  Book.find({}).populate('author')
  .then((books)=> res.render("index", {books}))
  .catch(error => console.log(error));
});

module.exports = router;