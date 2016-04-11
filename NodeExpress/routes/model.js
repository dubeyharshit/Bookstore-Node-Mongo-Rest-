/**
 * Created by Harshit on 4/10/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema  = new Schema({
    name: { type: String}
});

module.exports = mongoose.model('books', bookSchema);
