var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var authorSchema = new Schema({
    name: String,
    books: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Book' 
    }
}, { versionKey: false });

module.exports = mongoose.model("Author", authorSchema);