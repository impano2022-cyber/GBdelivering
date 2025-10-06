const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// A simple test route to make sure everything is working
app.get('/', (req, res) => {
  res.send('Hello from the GBdelivering Backend!');
});

// TODO: Add routes for API (products, orders, etc.)
// TODO: Add webhook for WhatsApp

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
