var express = require('express');
var router = express.Router();
var Author = require('./author');

router.post('/', (req, res) => {
    console.log(req.body);
    let a = new Author({ 
        name: req.body.name        
    });
    a.save((err, author) => {
        if(err)
            res.status(500).send(err);
        else
            res.status(200).send(author);
    })
})

router.get('/', (req, res) => {    
    Author.find().exec((err, authors) => {
        if(err)
            res.status(500).send(err);
        else
            res.status(200).send(authors);
    })
})

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    Author.deleteOne({ _id: id }, (err) => {
        if(err)
            res.status(500).send(err);
        else
            res.status(200).send({});
    })
})

router.patch('/:id', (req, res) => {
    Author.findById(req.params.id, (err, author) => {
        if(err)
            res.status(500).send(err);
        else if(!author) 
            res.status(404).send({});
        else {
            author.name = req.body.name;
            author.save()
                .then((a) => res.status(200).send(a))
                .catch((e) => res.status(500).send(e));
        }
    })
})

module.exports = router;

