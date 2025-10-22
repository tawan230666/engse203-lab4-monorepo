import { useParams } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';

export default function ProductDetailPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const handleAdd = useCallback(() => {
    if (!product) return;
    dispatch(addItem({ id: product.id, title: product.title, price: product.price, image: product.image }));
  }, [dispatch, product]);

  useEffect(() => {
    const run = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        setProduct(res.data);
      } catch (e) {
        console.error(e);
        setError('Failed to fetch product');
      } finally {
        setLoading(false);
      }
    };
    run();
  }, [productId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!product) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white rounded-xl shadow p-6 flex items-center justify-center">
        <img src={product.image} alt={product.title} className="w-72 h-72 object-contain" />
      </div>
      <div className="prose max-w-none">
        <h1>{product.title}</h1>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-2xl font-bold mt-2">${product.price}</p>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={handleAdd}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
