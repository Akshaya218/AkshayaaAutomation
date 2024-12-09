import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Add custom styles here

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <Link to="/" className="logo">
                    <img src="/path/to/logo.png" alt="Akshayaa Automation" />
                </Link>
                <nav className="navbar">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </nav>
                <div className="contact-button">
                    <Link to="/contact">Get in Touch</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
