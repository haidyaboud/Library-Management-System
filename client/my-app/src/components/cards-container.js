// CardsContainer.js
import React from 'react';
import ProductCard from './ProductCard';
import './cardstyle.css';

const CardsContainer = ({ products, onEdit, onDelete }) => {
  return (
    <div className="container">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default CardsContainer;
