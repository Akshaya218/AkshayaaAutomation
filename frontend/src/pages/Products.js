import React from 'react';
import './Products.css'; // Import the CSS for styling

const Products = () => {
  return (
    <div className="products-page">
      <div className="products-header">
        <h1>Our Products & Services</h1>
        <p>Explore our wide range of machining and quality control services designed to deliver precision and efficiency in every project.</p>
      </div>

      <section className="product-section">
        <h2>Our Machinery</h2>
        <p>We use advanced machinery for precision machining and custom production services. Below is a list of our key machines:</p>
        
        <div className="product-list">
          <div className="product-card">
            <h3>PILATUS 20 T L5 CNC Lathe (LMW)</h3>
            <ul>
              <li>Swing Over Bed Diameter: 470 mm</li>
              <li>Swing Over Carriage Diameter: 310 mm</li>
              <li>Admit Between Centers: 550 mm</li>
              <li>Maximum Turning Length: 440 mm</li>
              <li>Maximum Turning Diameter: 250 mm</li>
              <li>Chuck Size Diameter: 200 mm</li>
            </ul>
          </div>

          <div className="product-card">
            <h3>LL20T L5 CNC Lathe (LMW)</h3>
            <ul>
              <li>Swing Over Bed Diameter: 510 mm</li>
              <li>Swing Over Carriage Diameter: 340 mm</li>
              <li>Admit Between Centers: 595 mm</li>
              <li>Maximum Turning Length: 480 mm</li>
              <li>Maximum Turning Diameter: 320 mm</li>
              <li>Chuck Size Diameter: 250 mm</li>
            </ul>
          </div>

          <div className="product-card">
            <h3>SMARTURN CNC Lathe (LMW)</h3>
            <ul>
              <li>Swing Over Bed Diameter: 480 mm</li>
              <li>Swing Over Carriage Diameter: 260 mm</li>
              <li>Admit Between Centers: 345 mm</li>
              <li>Maximum Turning Length: 262 mm</li>
              <li>Maximum Turning Diameter: 200 mm</li>
              <li>Chuck Size Diameter: 165 mm</li>
            </ul>
          </div>

          <div className="product-card">
            <h3>Conventional Lathe Machines</h3>
            <ul>
              <li>Make: Chetak & Amar, Rajkot</li>
              <li>Center Height: 10”</li>
              <li>Length: 7 Feet</li>
            </ul>
          </div>

          <div className="product-card">
            <h3>Radial Drilling Machine</h3>
            <ul>
              <li>Make: New Bharat, Rajkot</li>
              <li>Capacity: 30/600 mm</li>
            </ul>
          </div>

          <div className="product-card">
            <h3>Pillar Drilling Machine</h3>
            <ul>
              <li>Make: CKP Industries</li>
              <li>Capacity: 1 1/2” dia</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="product-section">
        <h2>Our Quality Control Equipment</h2>
        <p>We ensure the highest precision and quality using our top-tier measuring instruments. Below is a list of our key quality control equipment:</p>

        <div className="product-list">
          <div className="product-card">
            <h3>Micrometers & Verniers</h3>
            <ul>
              <li>Out Side Micrometer (0 – 150 mm)</li>
              <li>Blade Micrometer (0 – 25 mm)</li>
              <li>Depth Micrometer (0 – 150 mm)</li>
              <li>Inside Micrometer (5 – 30 mm)</li>
              <li>Vernier Caliper (0 – 300 mm)</li>
            </ul>
          </div>

          <div className="product-card">
            <h3>Dial Indicators & Test Indicators</h3>
            <ul>
              <li>Dial Indicator (0.01 mm)</li>
              <li>Dial Test Indicator (0.001 mm)</li>
              <li>Lever Dial Indicator (0.02 mm)</li>
            </ul>
          </div>

          <div className="product-card">
            <h3>Other Tools</h3>
            <ul>
              <li>Bore Dial Gauges (Various Sizes)</li>
              <li>Surface Table (930 x 600 mm)</li>
              <li>Magnetic ‘V’ Block (100 x 95 x 70 mm)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="services-section">
        <h2>Our Services</h2>
        <p>We offer precision turning, custom machining, drilling, and prototyping services to meet the needs of various industries. Below is a list of our core services:</p>

        <div className="service-card">
          <h3>Precision Turning</h3>
          <p>Using our advanced CNC and conventional lathes, we provide precision turning for various applications, ensuring the highest standards of quality and accuracy.</p>
        </div>

        <div className="service-card">
          <h3>Custom Machining</h3>
          <p>Our custom machining solutions are designed to meet your unique specifications, whether it's for prototypes or large-scale production runs.</p>
        </div>

        <div className="service-card">
          <h3>Drilling and Boring</h3>
          <p>We specialize in precise drilling and boring tasks using our Radial and Pillar Drilling Machines, perfect for a range of materials and applications.</p>
        </div>

        <div className="service-card">
          <h3>Prototype and Small Batch Production</h3>
          <p>We offer prototype development and small batch production services to help bring your designs to life with precision and efficiency.</p>
        </div>
      </section>
    </div>
  );
};

export default Products;
