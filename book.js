var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
    title: String,
    author: {
        type: mongoose.Schema.ObjectId,
        ref: 'Author'
    }
}, { versionKey: false });

module.exports = mongoose.model("Book", bookSchema);