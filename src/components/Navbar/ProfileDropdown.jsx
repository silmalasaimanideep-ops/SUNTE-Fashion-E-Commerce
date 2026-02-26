import { Link } from "react-router-dom";
import { User, ShoppingBag } from "lucide-react";

export function ProfileDropdown({ user, onClose, onLogout }) {
  return (
    <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 py-4 px-4 z-[100]">
      
      {user && (
        <div className="flex items-start gap-3 p-4 rounded-xl hover:bg-gray-50 transition-all mb-4 -mx-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#B76E79] to-rose-400 flex items-center justify-center text-white font-bold text-lg">
            {(user.displayName?.charAt(0) || user.email?.charAt(0))?.toUpperCase()}
          </div>
          <div className="min-w-0 flex-1 pt-1">
            <p className="font-bold text-gray-900 text-base truncate">
              {user.displayName}
            </p>
            <p className="text-sm text-gray-500 truncate">
              {user.email}
            </p>
          </div>
        </div>
      )}

      <div className="space-y-1 -mx-1">
        {!user ? (
          <Link
            to="/login"
            onClick={onClose}
            className="block px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-xl flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
              <span className="text-blue-600 font-semibold">→</span>
            </div>
            Sign In
          </Link>
        ) : (
          <>
            <Link
              to="/profile"
              onClick={onClose}
              className="block px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-xl flex items-center gap-3 group"
            >
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-gray-200">
                <User size={18} className="text-gray-600" />
              </div>
              Profile
            </Link>

            <Link
              to="/orders"
              onClick={onClose}
              className="block px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-xl flex items-center gap-3 group"
            >
              <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center group-hover:bg-indigo-200">
                <ShoppingBag size={18} className="text-indigo-600" />
              </div>
              Orders
            </Link>

            <button
              onClick={onLogout}
              className="flex items-center gap-3 w-full px-3 py-3 text-sm font-semibold text-red-600 hover:bg-red-50 rounded-xl group"
            >
              <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center group-hover:bg-red-200">
                <span className="text-red-600 font-bold">↗</span>
              </div>
              Sign Out
            </button>
          </>
        )}
      </div>
    </div>
  );
}