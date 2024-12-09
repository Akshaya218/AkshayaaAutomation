// src/pages/Home.js
import React from 'react';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import CustomerSection from '../components/CustomerSection';
import './Home.css';

const Home = () => {
    return (
        <div>
            <HeroSection />
            
            {/* Services Section */}
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
            
            <CustomerSection/>
        </div>
    );
};

export default Home;
