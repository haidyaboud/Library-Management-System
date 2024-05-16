//books.model.js
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  author: {
    type: String,
    required: true,
    trim: true
  },
  imageUrl: { // added field for image URL
    type: String,
    required: true,
    trim: true
  },
  price: { // added field for price
    type: Number,
    required: true,
    min: 0 // assuming price cannot be negative
  }
}, { timestamps: true });

const Book = mongoose.model('Books', bookSchema);

module.exports = Book;
