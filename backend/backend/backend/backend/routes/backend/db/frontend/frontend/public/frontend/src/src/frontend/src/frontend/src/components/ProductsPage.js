import React, { useState, useEffect } from 'react';
import './ProductsPage.css';

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // We will replace this with a real API call
    const fetchProducts = () => {
      // Mock data for now
      const mockProducts = [
        { id: 1, name: 'Beef Mince', price: '15.50', unit: 'kg', stock: 100 },
        { id: 2, name: 'Chicken Breast', price: '8.00', unit: 'pkt', stock: 50 },
        { id: 3, name: 'Lamb Chops', price: '22.00', unit: 'kg', stock: 30 },
      ];
      setProducts(mockProducts);
      setLoading(false);
    };

    fetchProducts();
  }, []);

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
              <td>${product.price}</td>
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
