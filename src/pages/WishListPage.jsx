import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../features/wishlist/wishlistSlice";
import { addToCart } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";
import { Heart, ShoppingBag } from "lucide-react";

export const WishList = () => {
  const items = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] sm:min-h-[70vh] flex flex-col items-center justify-center text-gray-500 px-4 text-center">
        <Heart size={50} className="text-gray-300 mb-4 sm:size-[60px]" />
        <h2 className="text-lg sm:text-xl font-semibold mb-2">
          Your Wishlist is Empty
        </h2>
        <p className="text-sm text-gray-400 max-w-xs sm:max-w-sm">
          Add items you love to your wishlist ❤️
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">

      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8">
        My Wishlist ({items.length})
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {items.map((item) => (
          <div
            key={`${item.id}-wishlist`}
            className="group relative bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300"
          >
            {/* Remove Button */}
            <button
              onClick={() => dispatch(removeFromWishlist(item.id))}
              className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-white rounded-full p-1.5 sm:p-2 shadow-md hover:scale-110 transition z-10"
            >
              <Heart
                size={16}
                className="fill-red-500 text-red-500 sm:size-[18px]"
              />
            </button>

            {/* Image */}
            <Link to={`/product/${item.id}`}>
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={item.images?.[0]}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
            </Link>

            {/* Info */}
            <div className="p-3 sm:p-4">
              <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                {item.brand}
              </h3>

              <p className="text-xs sm:text-sm text-gray-500 truncate">
                {item.title}
              </p>

              <div className="flex items-center gap-2 mt-2 flex-wrap">
                <span className="font-semibold text-gray-900 text-sm sm:text-base">
                  ₹{item.price}
                </span>

                {item.originalPrice && (
                  <span className="text-gray-400 line-through text-xs sm:text-sm">
                    ₹{item.originalPrice}
                  </span>
                )}

                {item.discount && (
                  <span className="text-pink-600 text-xs sm:text-sm font-medium">
                    ({item.discount}% OFF)
                  </span>
                )}
              </div>

              <button
                onClick={() => {
                  dispatch(addToCart(item));
                  dispatch(removeFromWishlist(item.id));
                }}
                className="mt-3 sm:mt-4 w-full flex items-center justify-center gap-2 bg-black text-white py-2 text-xs sm:text-sm rounded-md hover:bg-gray-800 transition"
              >
                <ShoppingBag size={14} className="sm:size-[16px]" />
                Move to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};