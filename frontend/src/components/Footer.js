import React from 'react';
import './Footer.css'; // Add custom styles here

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>Akshayaa Automation</h4>
                    <p>Your partner in mechanical solutions.</p>
                </div>
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <p>Muthalakadu, Kollupalayam, Kaniyur(P.O), Coimbatore, Tamil Nadu</p>
                    <p>Email: contact@akshayaaautomation.com</p>
                    <p>Phone: +91 98659 03256</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Akshayaa Automation. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
