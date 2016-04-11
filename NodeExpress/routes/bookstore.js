/**
 * Created by Harshit on 4/10/2016.
 */
var express = require('express');
var router = express.Router();
var Book  = require('./model');

router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next();
});

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

router.post('/books',function(req, res) {
    var book = new Book();
    book.name = req.body.name;
    book.save(function (err) {
        if (err)
            res.send(err);
        res.json({message: 'Book created!'});
    })
});

    router.get('/books',function(req, res) {
        Book.find(function(err,books) {
            if (err)
                res.send(err);
            res.json(books);
        });
});

router.get('/:book_id',function(req, res) {
    Book.findById(req.params.book_id, function(err, book) {
        if (err)
            res.send(err);
        res.json(book);
    });
});

router.put('/:book_id',function(req, res) {
    Book.findById(req.params.book_id, function (err, book) {
        if (err)
            res.send(err);
        book.name = req.body.name;
        book.save(function (err) {
            if (err)
                res.send(err);
            res.json({message: 'Book updated!'});
        });
    })
});

router.delete('/:book_id',function(req, res) {
    Book.remove({
        _id: req.params.book_id
    }, function(err, book) {
        if (err)
            res.send(err);

        res.json({ message: 'Successfully deleted' });
    });
});

module.exports = router;