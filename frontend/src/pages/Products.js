// src/pages/Products.js
import React, { useState, useEffect } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/api/products')
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <div className="products-page">
            <h1>Our Products & Services</h1>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Products;
