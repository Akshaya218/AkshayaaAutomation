// backend/controllers/aboutController.js
exports.getAboutPage = (req, res) => {
    res.json({ 
        companyName: 'Akshayaa Automation',
        description: 'We specialize in high-precision CNC machining and VMC services.'
    });
};
