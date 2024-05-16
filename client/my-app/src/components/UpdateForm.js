import React, { useState } from 'react';

const EditBookForm = ({ book, onUpdate }) => {
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [imageUrl, setImageUrl] = useState(book.imageUrl);
  const [price, setPrice] = useState(book.price);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ensure the _id is included in the object passed to onUpdate
    onUpdate({ _id: book._id, title, author, imageUrl, price });
  };
  

  return (
    <form className="edit-book-form" onSubmit={handleSubmit}>
      <h2>Edit Book</h2>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Author:
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
      </label>
      <label>
        Image URL:
        <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
      </label>
      <label>
        Price:
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      </label>
      <button type="submit">Update Book</button>
    </form>
  );
};

export default EditBookForm;
