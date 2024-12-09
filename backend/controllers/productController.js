// backend/controllers/productsController.js
exports.getProducts = (req, res) => {
    const products = [
        { name: 'CNC Machining', description: 'High-precision CNC machining for all industries' },
        { name: 'VMC Services', description: 'Vertical machining center services for custom needs' },
        { name: 'Custom Automation', description: 'Custom automation solutions for efficiency and reliability' }
    ];

    res.json(products);
};
