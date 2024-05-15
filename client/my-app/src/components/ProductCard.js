// ProductCard.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './ProductCard.css';
import './cards.css';

const ProductCard = ({ title, author, imageUrl, price, isOnSale }) => {
  return (
    <div className="card">
      {isOnSale && <div className="sale-badge">SALE</div>}
      <div className="card-image-container">
        <img src={imageUrl} alt={title} className="card-image" />
      </div>
      <div className="card-info">
        <h3 className="card-title">{title}</h3>
        <p className="card-author">{author}</p>
        <p className="card-price">Price: <span>{price}</span></p>
      </div>
      <div className="card-actions">
        <button className="wishlist-button">
          <FontAwesomeIcon icon={faHeart} /> Add to Wishlist
        </button>
        <button className="cart-button">
          <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
