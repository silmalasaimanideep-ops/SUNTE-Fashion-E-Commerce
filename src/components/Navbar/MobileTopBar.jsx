import { Link } from "react-router-dom";
import { User, Heart, ShoppingBag } from "lucide-react";
import { ProfileMenu } from "./ProfileMenu";

export function MobileTopBar({ user, cartCount, wishlistCount, handleLogout }) {
  return (
    <div className="lg:hidden p-3 flex items-center justify-between">
      <Link to="/" className="p-1">
        <img src="/banner/logo-4.png" alt="logo" className="w-16 h-8 object-contain" />
      </Link>

      <div className="flex items-center gap-4">
        {/* Wishlist */}
        <Link to="/wishlist" className="relative p-1 hover:scale-110 transition">
          <Heart size={20} className="text-gray-700" />
          {wishlistCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {wishlistCount}
            </span>
          )}
        </Link>

        {/* Cart */}
        <Link to="/cart" className="relative p-1 hover:scale-110 transition">
          <ShoppingBag size={20} className="text-gray-700" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Link>

        <ProfileMenu user={user} handleLogout={handleLogout} />
      </div>
    </div>
  );
}