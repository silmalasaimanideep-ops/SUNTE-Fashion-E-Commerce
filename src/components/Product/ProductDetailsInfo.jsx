import { Heart } from "lucide-react";

export const ProductDetailsInfo = ({
  product,
  selectedSize,
  setSelectedSize,
  handleAddToCart,
  handleWishlist,
  isWishlisted,
  addedMessage,
  pincode,
  setPincode,
  handleCheckDelivery,
  deliveryMessage,
}) => {
  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-2xl md:text-3xl font-bold">
          {product.brand}
        </h1>
        <p className="text-md md:text-lg text-gray-500">
          {product.title}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">
          {product.rating?.rate || 4.5} ★
        </span>
        <span className="text-sm text-gray-500">
          {product.rating?.count || 120} Ratings
        </span>
      </div>

      <div className="border-t pt-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-2xl md:text-3xl font-bold">
            ₹{product.price}
          </span>

          {product.originalPrice && (
            <span className="text-gray-400 line-through">
              ₹{product.originalPrice}
            </span>
          )}

          {product.discount && (
            <span className="text-pink-600 font-semibold">
              {product.discount}% OFF
            </span>
          )}
        </div>

        <p className="text-green-600 text-sm mt-1">
          inclusive of all taxes
        </p>
      </div>

      {product.sizes && (
        <div className="border-t pt-6">
          <p className="font-semibold mb-3">SELECT SIZE</p>

          <div className="flex flex-wrap gap-3">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`w-12 h-12 rounded-full border flex items-center justify-center font-medium transition ${
                  selectedSize === size
                    ? "bg-black text-white border-black"
                    : "hover:border-black"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-4 pt-6">
        <button
          onClick={handleAddToCart}
          className="flex-1 bg-pink-600 text-white py-3 rounded-md font-semibold hover:bg-pink-700 transition"
        >
          ADD TO BAG
        </button>

        <button
          onClick={handleWishlist}
          className={`flex-1 flex items-center justify-center gap-2 border py-3 rounded-md font-semibold transition ${
            isWishlisted
              ? "bg-pink-600 text-white border-pink-600"
              : "hover:bg-gray-50"
          }`}
        >
          <Heart size={18} fill={isWishlisted ? "white" : "none"} />
          {isWishlisted ? "WISHLISTED" : "WISHLIST"}
        </button>
      </div>

      {addedMessage && (
        <p className="text-green-600 font-medium">
          {addedMessage}
        </p>
      )}

      <div className="border-t pt-6">
        <p className="font-semibold">DELIVERY OPTIONS</p>

        <div className="flex flex-col sm:flex-row gap-2 mt-3">
          <input
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            placeholder="Enter pincode"
            className="border p-2 flex-1 rounded"
          />
          <button
            onClick={handleCheckDelivery}
            className="bg-black text-white px-6 py-2 rounded"
          >
            CHECK
          </button>
        </div>

        {deliveryMessage && (
          <p className="text-sm mt-2 text-gray-600">
            {deliveryMessage}
          </p>
        )}
      </div>

      <div className="border-t pt-6">
        <p className="font-semibold">BEST OFFERS</p>

        <ul className="text-sm text-gray-600 mt-2 space-y-1">
          <li>• 10% Instant Discount on ICICI Bank</li>
          <li>• Flat ₹300 off on orders above ₹1299</li>
          <li>• Easy 7 days return & exchange</li>
          <li>• No Cost EMI available</li>
        </ul>
      </div>

      <div className="border-t pt-6">
        <p className="font-semibold">PRODUCT DETAILS</p>

        <p className="text-gray-600 mt-2">
          {product.description ||
            "Premium quality fabric with modern styling. Comfortable for daily wear."}
        </p>
      </div>

    </div>
  );
};