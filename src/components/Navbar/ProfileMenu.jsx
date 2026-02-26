import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { User, ShoppingBag } from "lucide-react";

export function ProfileMenu({ user, handleLogout }) {
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={profileRef}>
      <button
        onClick={() => setProfileOpen(!profileOpen)}
        className="w-10 h-10 rounded-full bg-black border text-white flex items-center justify-center hover:scale-105 transition"
      >
        {user ? user.displayName?.charAt(0) : <User size={20} />}
      </button>

      {profileOpen && (
        <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 py-4 px-4 z-[100]">

          {user && (
            <div className="flex items-start gap-3 p-4 rounded-xl hover:bg-gray-50 transition-all mb-4 -mx-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#B76E79] to-rose-400 flex items-center justify-center text-white font-bold text-lg flex-shrink-0 mt-0.5">
                {user.displayName?.charAt(0)?.toUpperCase()}
              </div>
              <div className="min-w-0 flex-1 pt-1">
                <p className="font-bold text-gray-900 text-base leading-tight truncate">{user.displayName}</p>
                <p className="text-sm text-gray-500 truncate">{user.email}</p>
              </div>
            </div>
          )}

          <div className="space-y-1 -mx-1">
            {!user ? (
              <Link
                to="/login"
                onClick={() => setProfileOpen(false)}
                className="block px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-xl transition-all flex items-center gap-3"
              >
                Sign In
              </Link>
            ) : (
              <>
                <Link
                  to="/profile"
                  onClick={() => setProfileOpen(false)}
                  className="block px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-xl transition-all flex items-center gap-3 group"
                >
                  <User size={18} />
                  Profile
                </Link>

                <Link
                  to="/orders"
                  onClick={() => setProfileOpen(false)}
                  className="block px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-xl transition-all flex items-center gap-3 group"
                >
                  <ShoppingBag size={18} />
                  Orders
                </Link>

                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 w-full px-3 py-3 text-sm font-semibold text-red-600 hover:bg-red-50 rounded-xl transition-all group"
                >
                  Sign Out
                </button>
              </>
            )}
          </div>

        </div>
      )}
    </div>
  );
}