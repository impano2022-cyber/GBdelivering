const express = require('express');
require('dotenv').config();

// --- Import Routes ---
const productRoutes = require('./routes/products');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// --- API Routes ---
app.use('/api/products', productRoutes);

// A simple test route to make sure everything is working
app.get('/', (req, res) => {
  res.send('Hello from the GBdelivering Backend!');
});

// TODO: Add webhook for WhatsApp

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
