// backend/routes/productsRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Define a route to fetch products
router.get('/', productController.getProducts);

module.exports = router;
