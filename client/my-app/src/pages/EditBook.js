import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';



function EditBook(props) {
  const [book, setBook] = useState({
    title: '',
    author: '',
    imageUrl: '',
    price: ''
    // other book fields
  });

  const { id } = useParams(); // Get the book ID from the URL
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  useEffect(() => {
    // Define an async function inside the useEffect
    const fetchBookData = async () => {
      if (id) { // Check if the id is not undefined
        try {
          // Corrected URL to match the GET route
          const response = await axios.get(`http://localhost:5000/books/${id}`);
          setBook(response.data);
        } catch (error) {
          console.error('Error fetching book data', error);
        }
      }
    };
  
    // Call the async function
    fetchBookData();
  }, [id]); // Dependency array to re-run the effect when `id` changes
  // Dependency array to re-run the effect when `id` changes

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) { // Check if the id is not undefined before making the request
      try {
        const response = await axios.put(`http://localhost:5000/api/books/update/${id}`, book);
        console.log(response.data);
        navigate('/book-list'); // Use navigate to redirect
      } catch (error) {
        console.error('Error updating book', error);
      }
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
      <button type="submit">Update Book</button>
    </form>
  );
}

export default EditBook;
