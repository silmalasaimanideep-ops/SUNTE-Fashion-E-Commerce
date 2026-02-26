import { Link } from "react-router-dom";
import { Home, Shirt, Users, Baby } from "lucide-react";

export function MobileBottomNav() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center py-2 px-4 z-40 shadow-lg">
      
      <Link to="/" className="flex flex-col items-center p-2 text-xs text-gray-700 hover:text-[#B76E79] hover:bg-gray-50 rounded-lg transition">
        <Home size={20} />
        <span>Home</span>
      </Link>

      <Link to="/category/men" className="flex flex-col items-center p-2 text-xs text-gray-700 hover:text-[#B76E79] hover:bg-gray-50 rounded-lg transition">
        <Shirt size={20} />
        <span>Men</span>
      </Link>

      <Link to="/category/women" className="flex flex-col items-center p-2 text-xs text-gray-700 hover:text-[#B76E79] hover:bg-gray-50 rounded-lg transition">
        <Users size={20} />
        <span>Women</span>
      </Link>

      <Link to="/category/kids" className="flex flex-col items-center p-2 text-xs text-gray-700 hover:text-[#B76E79] hover:bg-gray-50 rounded-lg transition">
        <Baby size={20} />
        <span>Kids</span>
      </Link>

    </div>
  );
}