// BookList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardsContainer from './cards-container';
import './cards.css';

function BookList() {
  const [books, setBooks] = useState([]);

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

  return (
    <div className="book-container">
      <CardsContainer products={books} />
    </div>
  );
}

export default BookList;
