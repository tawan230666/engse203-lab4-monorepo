import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Layout() {
  const count = useSelector((s) => s.cart.items.reduce((sum, i) => sum + i.quantity, 0));
  const active = ({ isActive }) => (isActive ? { textDecoration: 'underline' } : undefined);
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <nav className="container mx-auto px-6 py-3 flex items-center justify-between">
          <div className="font-bold">Mini E‑commerce</div>
          <div className="flex gap-6">
            <NavLink to="/" style={active}>Home</NavLink>
            <NavLink to="/products" style={active}>Products</NavLink>
            <NavLink to="/cart" style={active}>Cart ({count})</NavLink>
          </div>
        </nav>
      </header>
      <main className="container mx-auto p-6">
        <Outlet />
      </main>
    </div>
  );
}
