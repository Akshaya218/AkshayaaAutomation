// backend/routes/aboutRoutes.js
const express = require('express');
const router = express.Router();
const aboutController = require('../controllers/aboutController');

// Define a route for about page
router.get('/', aboutController.getAboutPage);

module.exports = router;
