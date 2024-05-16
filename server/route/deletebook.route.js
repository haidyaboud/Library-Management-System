// deletebook.route.js
const express = require('express');
const router = express.Router();
const bookModel = require('../models/books');

router.delete('/delete/:id', async (req, res) => {
    const bookId = req.params.id;
    if (!bookId) {
      return res.status(400).json({ message: 'Book ID is undefined' });
    }
    try {
      const deletedBook = await bookModel.findByIdAndDelete(bookId);
      if (!deletedBook) {
        return res.status(404).json({ message: 'Book not found' });
      }
      res.json({ message: 'Book deleted successfully', deletedBook });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error deleting book', error });
    }
});

module.exports = router;
