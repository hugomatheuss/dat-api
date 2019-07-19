var express = require('express');
var router = express.Router();
var Book = require('./book');
const mongoose = require('mongoose'); 

const Author = mongoose.model('Author');

router.post('/', (req, res) => {
    const author = Author.findById(req.author);
    //console.log(req.body);
    console.log(author);  
    let b = new Book({ 
        title: req.body.title,
        author: req.body.author,
    });
    b.save((err, book) => {
        if(err)
            res.status(500).send(err);
        else {
            res.status(200).json(book);
        
        }
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