import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { logoutUser } from "../../features/user/userSlice";
import { clearCart } from "../../features/cart/cartSlice";
import { clearWishlist } from "../../features/wishlist/wishlistSlice";
import { useNavigate } from "react-router-dom";
import { useState, useMemo, useCallback } from "react";

import { MobileTopBar } from "./MobileTopBar";
import { MobileSearch } from "./MobileSearch";
import { DesktopNavbar } from "./DesktopNavbar";
import { MobileBottomNav } from "./MobileBottomNav";

export function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.currentUser);
  const cartItems = useSelector((state) => state.cart.items);
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const [searchTerm, setSearchTerm] = useState("");

  const cartCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems]
  );

  const wishlistCount = wishlistItems.length;

  const handleLogout = useCallback(async () => {
    await signOut(auth);
    dispatch(logoutUser());
    dispatch(clearCart());
    dispatch(clearWishlist());
    navigate("/");
  }, [dispatch, navigate]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const trimmed = searchTerm.trim();
    if (!trimmed) return;
    navigate(`/search?q=${trimmed}`);
    setSearchTerm("");
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <MobileTopBar
          user={user}
          cartCount={cartCount}
          wishlistCount={wishlistCount}
          handleLogout={handleLogout}
        />

        <MobileSearch
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSearchSubmit={handleSearchSubmit}
        />

        <DesktopNavbar
          user={user}
          cartCount={cartCount}
          wishlistCount={wishlistCount}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSearchSubmit={handleSearchSubmit}
          handleLogout={handleLogout}
        />
      </header>

      <MobileBottomNav />
    </>
  );
}