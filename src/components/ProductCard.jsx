import { Link } from "react-router-dom";
import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import {
  addToWishlist,
  removeFromWishlist,
} from "../features/wishlist/wishlistSlice";
import { Heart,Check } from "lucide-react";

export const ProductCard = React.memo(({ product }) => {

  const [added, setAdded] = React.useState(false);

  const dispatch = useDispatch();

  const wishlistItems = useSelector(
    (state) => state.wishlist.items
  );

  const isWishlisted = useMemo(() => {
    return wishlistItems.some(
      (item) => item.id === product.id
    );
  }, [wishlistItems, product.id]);

  const { originalPrice, discount } = useMemo(() => {
    const original =
      product.originalPrice ||
      Math.round(product.price * 1.5);

    const discountPercent = Math.round(
      ((original - product.price) / original) * 100
    );

    return {
      originalPrice: original,
      discount: discountPercent,
    };
  }, [product]);

  const images = useMemo(() => {
    return (
      product.images || [
        `/products/${product.id}-front.png`,
        `/products/${product.id}-back.png`,
      ]
    );
  }, [product]);

  return (
    <div className="font-[Poppins] group">
      <div className="relative bg-white overflow-hidden hover:shadow-md">

        {/* IMAGE SECTION */}
        <Link to={`/product/${product.id}`}>
          <div className="relative overflow-hidden">

            <img
              src={images[0]}
              alt={product.title}
              className="w-full aspect-[3/4] object-cover transition duration-500 group-hover:opacity-0" 
              />

            {images[1] && (
              <img
                src={images[1]}
                alt="back"
                className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-500"
              />
            )}
          </div>

          {/* PRODUCT INFO */}
          <div className="pt-2 px-2 space-y-0">

            <h3 className="text-xs sm:text-sm tracking-wide text-gray-800 font-medium">
              {product.brand}
            </h3>

            <p className="text-xs sm:text-sm text-gray-500 truncate">
              {product.title}
            </p>

            <div className="flex items-center justify-between mt-2">
            <div>
              <span className="text-sm sm:text-base font-semibold text-gray-900">
                Rs.{product.price}
              </span>
              <span className="text-gray-400 line-through text-xs sm:text-sm ml-2">
                Rs.{originalPrice}
              </span>
            </div>

            <span className="text-[#B76E79] text-xs sm:text-xs font-medium">
              {discount}% OFF
            </span>
          </div>
          </div>
        </Link>

        {/* WISHLIST BUTTON */}
        <button
          onClick={() =>
            isWishlisted
              ? dispatch(removeFromWishlist(product.id))
              : dispatch(addToWishlist(product))
          }
          className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-sm hover:scale-110 transition"
        >
          <Heart
            size={18}
            className={`transition ${
              isWishlisted
                ? "fill-[#B76E79] text-[#B76E79]"
                : "text-gray-600"
            }`}
          />
        </button>

 
        <div className="absolute bottom-0 left-0 right-0 bg-white py-2 px-3 translate-y-full group-hover:translate-y-0 transition-all duration-300">

          <button
  onClick={() => {
    dispatch(addToCart(product));
    setAdded(true);

    // Reset after 1.5 seconds
    setTimeout(() => {
      setAdded(false);
    }, 1500);
  }}
  className="w-full border border-gray-300 py-2 text-xs sm:text-sm tracking-wide hover:border-[#B76E79] hover:text-[#B76E79] transition flex items-center justify-center gap-2"
>
  {added ? (
    <>
      <Check size={16} className="text-green-600" />
      ADDED
    </>
  ) : (
    "ADD TO BAG"
  )}
</button>

          {product.sizes && product.sizes.length > 0 && (
            <p className="text-sm text-gray-500 mt-1">
              Size: {product.sizes[0]}
              </p>
            )}

          <div className="flex items-center justify-between mt-2">
            <div>
              <span className="text-sm sm:text-base font-semibold text-gray-900">
                Rs.{product.price}
              </span>
              <span className="text-gray-400 line-through text-xs sm:text-sm ml-2">
                Rs.{originalPrice}
              </span>
            </div>

            <span className="text-[#B76E79] text-xs sm:text-xs font-medium">
              {discount}% OFF
            </span>
          </div>

        </div>
      </div>
    </div>
  );
});