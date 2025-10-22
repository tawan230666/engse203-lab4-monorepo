import React, { memo } from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col">
      <Link to={`/products/${product.id}`} className="mb-3">
        <img src={product.image} alt={product.title} className="w-full h-40 object-contain" />
        <h3 className="mt-2 font-semibold line-clamp-2">{product.title}</h3>
      </Link>
      <div className="mt-auto flex items-center justify-between">
        <span className="font-bold">${product.price}</span>
        <button className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700" onClick={onAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default memo(ProductCard);
