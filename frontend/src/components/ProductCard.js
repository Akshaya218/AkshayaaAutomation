// src/components/ProductCard.js
import React from 'react';
import './ProductCard.css';

const ProductCard = ({ name, description, image }) => {
    return (
        <div className="product-card">
            <img src={image} alt={name} className="product-image" />
            <h3>{name}</h3>
            <p>{description}</p>
            <button className="btn-primary">Learn More</button>
        </div>
    );
};

export default ProductCard;
