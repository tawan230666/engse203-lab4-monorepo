import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from '../features/cart/cartSlice';

export default function CartPage() {
  const items = useSelector((s) => s.cart.items);
  const dispatch = useDispatch();
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0).toFixed(2);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {items.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {items.map((i) => (
            <div key={i.id} className="bg-white rounded-xl shadow p-4 flex items-center gap-4">
              <img src={i.image} alt={i.title} className="w-16 h-16 object-contain" />
              <div className="flex-1">
                <div className="font-semibold line-clamp-1">{i.title}</div>
                <div className="text-sm text-gray-500">${i.price} each</div>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-2 py-1 rounded bg-gray-200" onClick={() => dispatch(updateQuantity({ id: i.id, quantity: i.quantity - 1 }))}>-</button>
                <span className="w-8 text-center">{i.quantity}</span>
                <button className="px-2 py-1 rounded bg-gray-200" onClick={() => dispatch(updateQuantity({ id: i.id, quantity: i.quantity + 1 }))}>+</button>
              </div>
              <button className="px-3 py-2 rounded bg-red-500 text-white hover:bg-red-600" onClick={() => dispatch(removeItem({ id: i.id }))}>Remove</button>
            </div>
          ))}
          <div className="text-right text-xl font-bold">Total: ${total}</div>
        </div>
      )}
    </div>
  );
}
