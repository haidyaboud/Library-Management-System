import React from 'react';
import ProductCard from './ProductCard';
import './cards.css';

const CardsContainer = ({ products }) => {
  return (
    <div className="cards-container">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

export default CardsContainer;