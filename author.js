var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var authorSchema = new Schema({
    name: String    
}, { versionKey: false });

module.exports = mongoose.model("Author", authorSchema);