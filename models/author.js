const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const AuthorSchema = new Schema({
    id: ObjectId,
    image_url: String,
    author: String,
    firstName: String,
    lastName: String,
    nationality: String,
    birthday: Date,
    createdAt: Date,
    updatedAt: Date
});

const Author = mongoose.model('authors', AuthorSchema);

module.exports = Author;