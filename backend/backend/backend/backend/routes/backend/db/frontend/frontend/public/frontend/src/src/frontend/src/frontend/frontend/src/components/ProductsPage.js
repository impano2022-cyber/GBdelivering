import React, { useState, useEffect } from 'react';
import './ProductsPage.css';

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // This function now fetches data from your real backend
    const fetchProducts = async () => {
      try {
        // The '/api/products' URL is automatically proxied to your backend
        const response = await fetch('/api/products');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // The empty array ensures this effect runs only once

  if (loading) {
    return <div className="products-page">Loading products...</div>;
  }

  if (error) {
    return <div className="products-page">Error: {error}</div>;
  }

  return (
    <div className="products-page">
      <h1>Product Management</h1>
      <table className="products-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Unit</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              {/* Assuming price is a number, format it nicely */}
              <td>${Number(product.price).toFixed(2)}</td>
              <td>{product.unit}</td>
              <td>{product.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductsPage;
