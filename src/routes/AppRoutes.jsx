import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/LoginPage";
import { Home } from "../pages/HomePage";
import { Cart } from "../pages/CartPage";
import { WishList } from "../pages/WishListPage";
import { ProductDetails } from "../components/ProductDetails";
import { CategoryPage } from "../pages/CategoryPage";
import ProtectedRoute from "../components/ProtectedRoute";
import { Search } from "../pages/SearchPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        }
      />

      <Route path="/login" element={<Login />} />

      <Route
        path="/wishlist"
        element={
          <ProtectedRoute>
            <WishList />
          </ProtectedRoute>
        }
      />

      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/category/:name" element={<CategoryPage />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
};