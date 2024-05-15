//Addbooks component
import React, { useState } from 'react';
import axios from 'axios';

function AddBook() {
  const [book, setBook] = useState({
    title: '',
    author: '',
    imageUrl: '', // added field for image URL
    price: '' // added field for price
    // other book fields
  });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Corrected URL to match the route defined in books.route.js
      const response = await axios.post('http://localhost:5000/api/add', book);
      console.log(response.data);
      // handle success (e.g., redirect to book list)
    } catch (error) {
      console.error(error);
      // handle error
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={book.title}
        onChange={handleChange}
        placeholder="Title"
      />
      <input
        type="text"
        name="author"
        value={book.author}
        onChange={handleChange}
        placeholder="Author"
      />
      <input
        type="text"
        name="imageUrl"
        value={book.imageUrl}
        onChange={handleChange}
        placeholder="Image URL"
      />
      <input
        type="text"
        name="price"
        value={book.price}
        onChange={handleChange}
        placeholder="Price"
      />
      {/* other inputs */}
      <button type="submit">Add Book</button>
    </form>
  );
}

export default AddBook;
