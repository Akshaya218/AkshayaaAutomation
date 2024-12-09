// backend/controllers/contactController.js
exports.submitContactForm = (req, res) => {
    const { name, email, message } = req.body;

    // You can save this data to MongoDB or send an email (for now, just log it)
    console.log('Contact Form Submitted:', { name, email, message });

    res.json({ status: 'success', message: 'Message sent successfully!' });
};
