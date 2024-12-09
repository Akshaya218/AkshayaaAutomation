import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ name, description, icon }) => {
    return (
        <div className="service-feature">
            <div className="feature-icon">
                <img src={icon} alt={name} />
            </div>
            <div className="feature-content">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;
