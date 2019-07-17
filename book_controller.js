var express = require('express');
var router = express.Router();
var Book = require('./book');

router.post('/', (req, res) => {
    console.log(req.body);
    let b = new Book({ 
        title: req.body.title,
        author: req.body.author,
    });
    b.save((err, book) => {
        if(err)
            res.status(500).send(err);
        else
            res.status(200).send(book);
    })
})

router.get('/', (req, res) => {
    Book.find().exec((err, books) => {
        if(err)
            res.status(500).send(err);
        else
            res.status(200).send(books);
    })
})

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    Book.deleteOne({ _id: id }, (err) => {
        if(err)
            res.status(500).send(err);
        else
            res.status(200).send({});
    })
})

router.patch('/:id', (req, res) => {
    Book.findById(req.params.id, (err, book) => {
        if(err)
            res.status(500).send(err);
        else if(!book)
            res.status(404).send({});
        else {
            book.title = req.body.title;
            book.author = req.body.author;
            book.save((err, author) => {
                if(err)
                    res.status(500).send(err);
                else
                    res.status(200).send(author);
            })
        }
    })
})

module.exports = router;