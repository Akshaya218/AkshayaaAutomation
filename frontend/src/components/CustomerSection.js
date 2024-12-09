// src/components/CustomerSection.js
import React from 'react';
import './CustomerSection.css';

const customers = [
    {
        name: "Customer A",
        logo: "/path/to/customer-a-logo.png",
        testimonial: "Akshayaa Automation's precision services are unmatched!",
    },
    {
        name: "Customer B",
        logo: "/path/to/customer-b-logo.png",
        testimonial: "We rely on their quality and timely delivery every time.",
    },
    {
        name: "Customer C",
        logo: "/path/to/customer-c-logo.png",
        testimonial: "Their expertise in machining is world-class!",
    },
    {
        name: "Customer D",
        logo: "/path/to/customer-d-logo.png",
        testimonial: "Professional, reliable, and efficient services.",
    },
];

const CustomerSection = () => {
    return (
        <section className="customer-section">
            <h2>Our Valued Customers</h2>
            <div className="customer-container">
                {customers.map((customer, index) => (
                    <div key={index} className="customer-card">
                        <img
                            src={customer.logo}
                            alt={`${customer.name} Logo`}
                            className="customer-logo"
                        />
                        <h3>{customer.name}</h3>
                        <p>{customer.testimonial}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CustomerSection;
