var express = require('express');
var router = express.Router();
var Authentication = require('../utilities/Authentication');
var BookmarkRepository = require('../repositories/BookmarkRepository');

var bookmarkRepository = new BookmarkRepository();

router.get('/bookmarks', function(req, res, next) {
    res.json(bookmarkRepository.findAll());
});

router.post('/bookmarks', Authentication, function(req, res, next) {
    bookmarkRepository.save(req.body);
    res.json(bookmarkRepository.findAll());
});

router.post('/bookmarks/removeAll', Authentication, function(req, res, next) {
    bookmarkRepository.removeAll();
    res.json(bookmarkRepository.findAll());
});

module.exports = router;