import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../features/cart/cartSlice";
import { useMemo } from "react";

export const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalPrice = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [cartItems]);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-gray-500 text-base sm:text-lg font-medium px-4 text-center">
        Your Cart is Empty
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24 lg:pb-10">
      <h2 className="text-xl sm:text-2xl font-bold mb-6">
        Shopping Cart
      </h2>

      {cartItems.map((item) => (
        <div
          key={`${item.id}-${item.selectedSize || "nosize"}`}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b py-5 gap-4"
        >
          {/* LEFT SIDE */}
          <div className="flex gap-4">
            <img
              src={item.images?.[0]}
              alt={item.title}
              className="w-20 h-24 sm:w-24 sm:h-28 object-cover rounded"
            />

            <div>
              <h3 className="text-sm sm:text-base font-semibold">
                {item.title}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                ₹{item.price}
              </p>

              {item.selectedSize && (
                <p className="text-xs text-gray-500 mt-1">
                  Size: {item.selectedSize}
                </p>
              )}

              {/* Quantity Controls */}
              <div className="flex items-center gap-3 mt-3">
                <button
                  onClick={() =>
                    dispatch(
                      decreaseQuantity({
                        id: item.id,
                        selectedSize: item.selectedSize,
                      })
                    )
                  }
                  className="w-7 h-7 border flex items-center justify-center rounded"
                >
                  -
                </button>

                <span className="text-sm font-medium">
                  {item.quantity}
                </span>

                <button
                  onClick={() =>
                    dispatch(
                      increaseQuantity({
                        id: item.id,
                        selectedSize: item.selectedSize,
                      })
                    )
                  }
                  className="w-7 h-7 border flex items-center justify-center rounded"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* REMOVE BUTTON */}
          <button
            onClick={() =>
              dispatch(
                removeFromCart({
                  id: item.id,
                  selectedSize: item.selectedSize,
                })
              )
            }
            className="text-red-500 text-sm font-medium hover:underline self-start sm:self-auto"
          >
            Remove
          </button>
        </div>
      ))}

      {/* TOTAL SECTION */}
      <div className="mt-8 flex justify-center sm:justify-end">
        <div className="text-lg sm:text-xl font-bold">
          Total: ₹{totalPrice}
        </div>
      </div>
    </div>
  );
};