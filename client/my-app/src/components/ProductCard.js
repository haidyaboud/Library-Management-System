import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './cardstyle.css';
import DeleteBookButton from './DeleteBookButton'; 
import axios from 'axios';

const ProductCard = ({ _id, title, author, imageUrl, price, onEdit, onDelete }) => {

  const handleAddToWishlist = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/wishlist/add-to-wishlist', {
        userId: 'USER_ID_HERE', // Replace with actual user ID
        bookId: _id
      });
      console.log(response.data.message);
    } catch (error) {
      console.error('Error adding to wishlist:', error);
    }
  };

  const handleAddToCart = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/cart/add-to-cart', {
        userId: 'USER_ID_HERE', // Replace with actual user ID
        bookId: _id
      });
      console.log(response.data.message);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  return (
    <div className="card dark-card-bg">
      <div className="card-image-container">
        <img src={imageUrl} alt={title} className="card-image" />
      </div>
      <div className="card-info">
        <h3 className="card-title">{title}</h3>
        <p className="card-author">{author}</p>
        <p className="card-price">Price: <span>{price}</span></p>
      </div>
      <div className="card-actions">
        <button className="wishlist-button" onClick={handleAddToWishlist}>
          <FontAwesomeIcon icon={faHeart} /> Add to Wishlist
        </button>
        <button className="cart-button" onClick={handleAddToCart}>
          <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart 
        </button>
      </div>
      <button className="edit-button" onClick={() => onEdit({ _id, title, author, imageUrl, price })}>
        Edit
      </button>
      <DeleteBookButton className="delete-button" bookId={_id} onDelete={() => onDelete(_id)} />
    </div>
  );
};

export default ProductCard;
