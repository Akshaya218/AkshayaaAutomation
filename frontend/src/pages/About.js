// src/pages/About.js
import React from 'react';
import companyImage from '../assets/company.jpg';
import isoImage from '../assets/iso.png';
import expertiseImage from '../assets/expertise.jpg';
import qualityImage from '../assets/quality.jpg';
import './About.css'; // Add custom styles here

const About = () => {
    return (
        <div className="about-page">
            <h1>About Akshayaa Automation</h1>

            <div className="cards-container">
                <div className="card">
                    <img src={companyImage} alt="Company Overview" className="card-img" />
                    <div className="card-content">
                        <h2>Company Overview</h2>
                        <p>
                            <strong>Akshayaa Automation</strong> is a modern machine shop formed by a dynamic team of professionals,
                            dedicated to providing high-quality manufacturing services for engineering companies in and around 
                            <strong> Coimbatore</strong>. We specialize in the production of machined components and job working services,
                            tailored to meet the specific needs of our customers.
                        </p>
                    </div>
                </div>

                <div className="card">
                    <img src={isoImage} alt="ISO Certification" className="card-img" />
                    <div className="card-content">
                        <h2>ISO Certified Excellence</h2>
                        <p>
                            We are an <strong> ISO 9001-2000</strong> certified company, which demonstrates our commitment to maintaining
                            the highest standards of quality. Our objective is to build long-lasting relationships with our clients by
                            consistently delivering superior products that meet their exact specifications and requirements.
                        </p>
                    </div>
                </div>

                <div className="card">
                    <img src={expertiseImage} alt="Expertise" className="card-img" />
                    <div className="card-content">
                        <h2>Expertise and Experience</h2>
                        <p>
                            Our team consists of highly experienced professionals specializing in new product development, production
                            management, and administration. We are fully equipped with modern industrial standards, and our skilled,
                            qualified, and experienced manpower ensures zero-defect production.
                        </p>
                    </div>
                </div>

                <div className="card">
                    <img src={qualityImage} alt="Quality Assurance" className="card-img" />
                    <div className="card-content">
                        <h2>Quality Assurance</h2>
                        <p>
                            At Akshayaa Automation, we integrate quality at every step of our production processes. From design to final
                            product delivery, we ensure that quality is never compromised, providing our clients with reliable and high-performing products.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
