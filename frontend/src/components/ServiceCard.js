// src/components/ServiceCard.js
import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ name, description, icon }) => {
    return (
        <div className="service-card">
            <div className="service-icon">
                <img src={icon} alt={name} />
            </div>
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    );
};

export default ServiceCard;
