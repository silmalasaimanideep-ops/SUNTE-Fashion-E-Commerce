import { Link } from "react-router-dom";
import { User, Heart, ShoppingBag, Search } from "lucide-react";
import { ProfileMenu } from "./ProfileMenu";

export function DesktopNavbar({
  user,
  cartCount,
  wishlistCount,
  searchTerm,
  setSearchTerm,
  handleSearchSubmit,
  handleLogout,
}) {
  return (
    <div className="hidden lg:block">
      <div className="max-w-7xl mx-auto py-3">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="p-1">
            <img src="/banner/logo-4.png" alt="logo" className="w-24 h-auto" />
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-3">
            <Link to="/" className="text-sm font-semibold uppercase hover:text-[#B76E79] px-3 py-2 transition">Home</Link>
            <Link to="/category/men" className="text-sm font-semibold uppercase hover:text-[#B76E79] px-3 py-2 transition">Men</Link>
            <Link to="/category/women" className="text-sm font-semibold uppercase hover:text-[#B76E79] px-3 py-2 transition">Women</Link>
            <Link to="/category/kids" className="text-sm font-semibold uppercase hover:text-[#B76E79] px-3 py-2 transition">Kids</Link>
            <Link to="/category/genz" className="text-sm font-semibold uppercase hover:text-[#B76E79] px-3 py-2 transition">GenZ</Link>
          </div>

          {/* Desktop Search */}
          <div className="flex-1 max-w-xl mx-8">
            <form onSubmit={handleSearchSubmit} className="relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search products..."
                className="w-full pl-11 pr-4 py-2.5 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#B76E79]"
              />
            </form>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <Link to="/wishlist" className="relative p-2 hover:scale-110 transition">
              <Heart size={22} className="text-gray-700" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#db1b38] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <Link to="/cart" className="relative p-2 hover:scale-110 transition">
              <ShoppingBag size={22} className="text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#db1b38] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            <ProfileMenu user={user} handleLogout={handleLogout} />
          </div>

        </div>
      </div>
    </div>
  );
}