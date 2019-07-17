const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const author_controller = require('./author_controller');
const book_controller = require('./book_controller');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect('mongodb://hbg:batman123@ds133547.mlab.com:33547/api-node', 
    { useNewUrlParser: true });

app.use('/authors', author_controller);
app.use('/books', book_controller);

app.listen(3000);
