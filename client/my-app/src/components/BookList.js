// BookList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardsContainer from './cards-container';
import EditBookForm from './UpdateForm'; // Import the edit form component

function BookList() {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);
  const [showEditForm, setShowEditForm] = useState(false);

  const handleEdit = (book) => {
    console.log('Book to edit:', book);
    if (!book._id) {
      console.error('Attempting to edit a book without an _id property.');
      return;
    }
    setEditingBook(book);
    setShowEditForm(true);
  };

  const handleUpdate = async (updatedBook) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/update/${updatedBook._id}`, updatedBook);
      if (response.status === 200) {
        setBooks(books.map(book => book._id === updatedBook._id ? updatedBook : book));
        setShowEditForm(false); // Hide the edit form after successful update
      }
    } catch (error) {
      console.error('Error updating book', error);
    }
  };

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/displaybooks');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books', error);
      }
    };

    fetchBooks();
  }, []);

  const handleDelete = (bookId) => {
    // Delete book logic
    setBooks(books.filter(book => book._id !== bookId));
  };

  return (
    <div className="book-container">
      <CardsContainer products={books} onEdit={handleEdit} onDelete={handleDelete} />
      {showEditForm && <EditBookForm book={editingBook} onUpdate={handleUpdate} />}
    </div>
  );
}

export default BookList;
