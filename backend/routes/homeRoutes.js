// backend/routes/homeRoutes.js
const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

// Define a route for home
router.get('/', homeController.getHomePage);

module.exports = router;
