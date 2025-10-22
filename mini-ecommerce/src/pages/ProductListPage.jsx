import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';

export default function ProductListPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const handleAddToCart = useCallback((product) => {
    dispatch(addItem({ id: product.id, title: product.title, price: product.price, image: product.image }));
  }, [dispatch]);

  useEffect(() => {
    const run = async () => {
      try {
        setLoading(true);
        const res = await axios.get('https://fakestoreapi.com/products');
        setProducts(res.data ?? []);
      } catch (e) {
        console.error(e);
        setError('Failed to fetch products.');
      } finally {
        setLoading(false);
      }
    };
    run();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onAddToCart={() => handleAddToCart(p)} />
      ))}
    </div>
  );
}
