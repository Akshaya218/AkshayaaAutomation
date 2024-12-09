// src/pages/Home.js
import React from 'react';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
    return (
        <div>
            <HeroSection />
            <section className="services-section">
                <h2>Our Services</h2>
                <div className="services-container">
                    <ServiceCard
                        name="CNC Machining"
                        description="Precision CNC machining for all industries."
                        icon="/path/to/cnc-icon.png"
                    />
                    <ServiceCard
                        name="VMC Services"
                        description="High-quality vertical machining center services."
                        icon="/path/to/vmc-icon.png"
                    />
                    <ServiceCard
                        name="Custom Automation"
                        description="Tailored automation solutions for your business."
                        icon="/path/to/automation-icon.png"
                    />
                </div>
            </section>

            <section className="products-section">
                <h2>Our Products</h2>
                <div className="products-container">
                    <ProductCard
                        name="CNC Machining"
                        description="State-of-the-art CNC machinery."
                        image="/path/to/cnc-product.jpg"
                    />
                    <ProductCard
                        name="VMC Services"
                        description="Our advanced VMC solutions."
                        image="/path/to/vmc-product.jpg"
                    />
                    <ProductCard
                        name="Custom Solutions"
                        description="Custom-built automation machines."
                        image="/path/to/automation-product.jpg"
                    />
                </div>
            </section>
        </div>
    );
};

export default Home;
