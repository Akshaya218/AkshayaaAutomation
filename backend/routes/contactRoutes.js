// backend/routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Define a route for the contact page
router.post('/', contactController.submitContactForm);

module.exports = router;
