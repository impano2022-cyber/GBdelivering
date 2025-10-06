const express = require('express');
const router = express.Router();
// const db = require('../config/database'); // We will use this later

// --- Product API Routes ---

// GET all products
// Example: GET /api/products
router.get('/', async (req, res) => {
  // Later, we will fetch this from the database
  res.json({ message: 'Get all products' });
});

// GET a single product by ID
// Example: GET /api/products/123
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  res.json({ message: `Get product with ID ${id}` });
});

// POST a new product (Create)
// Example: POST /api/products
router.post('/', async (req, res) => {
  // Later, we will get product data from req.body
  res.status(201).json({ message: 'Create a new product' });
});

// PUT to update a product by ID
// Example: PUT /api/products/123
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  res.json({ message: `Update product with ID ${id}` });
});

// DELETE a product by ID
// Example: DELETE /api/products/123
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  res.json({ message: `Delete product with ID ${id}` });
});


module.exports = router;
