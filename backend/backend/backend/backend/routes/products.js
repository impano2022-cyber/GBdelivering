const express = require('express');
const router = express.Router();
// The path is '../config/database' because we need to go up one level from 'routes'
const db = require('../config/database');

// --- Product API Routes ---

// GET all products
router.get('/', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM products ORDER BY name ASC');
    res.json(rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// GET a single product by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await db.query('SELECT * FROM products WHERE id = $1', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// POST a new product (Create)
router.post('/', async (req, res) => {
  try {
    const { name, description, price, unit, stock } = req.body;
    const newProduct = await db.query(
      'INSERT INTO products (name, description, price, unit, stock) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [name, description, price, unit, stock]
    );
    res.status(201).json(newProduct.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// PUT to update a product by ID
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, unit, stock } = req.body;
    const updatedProduct = await db.query(
      'UPDATE products SET name = $1, description = $2, price = $3, unit = $4, stock = $5 WHERE id = $6 RETURNING *',
      [name, description, price, unit, stock, id]
    );
    if (updatedProduct.rows.length === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(updatedProduct.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// DELETE a product by ID
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteOp = await db.query('DELETE FROM products WHERE id = $1 RETURNING *', [id]);
    if (deleteOp.rowCount === 0) {
        return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
