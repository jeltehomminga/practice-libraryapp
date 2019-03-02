const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const stringToObjectId = string => mongoose.Types.ObjectId(string);

const BookSchema = new Schema({
    id: ObjectId,
    title: String,
    description: String,
    author: { type: Schema.Types.ObjectId, ref: 'authors', set: stringToObjectId },
    rating: Number,
    createdAt: Date,
    updatedAt: Date
});

const Book = mongoose.model('books', BookSchema);

module.exports = Book;