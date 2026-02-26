import { products } from "../data/products";
import { useParams } from "react-router-dom";
import { useState, useMemo, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import {
  addToWishlist,
  removeFromWishlist,
} from "../features/wishlist/wishlistSlice";

import { ProductImages } from "../components/Product/ProductImages";
import { ProductDetailsInfo } from "../components/Product/ProductDetailsInfo";

export const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const wishlistItems = useSelector(
    (state) => state.wishlist.items
  );

  const product = useMemo(() => {
    return products.find((p) => p.id === Number(id));
  }, [id]);

  const [selectedSize, setSelectedSize] = useState(null);
  const [addedMessage, setAddedMessage] = useState("");
  const [pincode, setPincode] = useState("");
  const [deliveryMessage, setDeliveryMessage] = useState("");

  useEffect(() => {
    setSelectedSize(null);
  }, [product]);

  if (!product) {
    return <div className="p-10">Product Not Found</div>;
  }

  const isWishlisted = useMemo(() => {
    return wishlistItems.some(
      (item) => item.id === product.id
    );
  }, [wishlistItems, product.id]);

  const handleAddToCart = useCallback(() => {
    if (!selectedSize && product.sizes?.length > 0) {
      alert("Please select a size first.");
      return;
    }

    dispatch({ ...addToCart({ ...product, selectedSize }) });
    setAddedMessage("Added to Bag ✔");
  }, [dispatch, product, selectedSize]);

  useEffect(() => {
    if (!addedMessage) return;

    const timer = setTimeout(() => {
      setAddedMessage("");
    }, 2000);

    return () => clearTimeout(timer);
  }, [addedMessage]);

  const handleWishlist = useCallback(() => {
    if (isWishlisted) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }
  }, [dispatch, isWishlisted, product]);

  const handleCheckDelivery = useCallback(() => {
    if (pincode.length !== 6) {
      setDeliveryMessage(
        "Please enter a valid 6 digit pincode."
      );
      return;
    }

    const today = new Date();
    today.setDate(today.getDate() + 3);

    setDeliveryMessage(
      `Estimated delivery by ${today.toDateString()}`
    );
  }, [pincode]);

  return (
    <div className="max-w-[1300px] mx-auto px-4 md:px-6 lg:px-8 py-6">
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

    <div className="lg:col-span-7">
      <ProductImages product={product} />
    </div>

    <div className="lg:col-span-5">
      <ProductDetailsInfo
        product={product}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
        handleAddToCart={handleAddToCart}
        handleWishlist={handleWishlist}
        isWishlisted={isWishlisted}
        addedMessage={addedMessage}
        pincode={pincode}
        setPincode={setPincode}
        handleCheckDelivery={handleCheckDelivery}
        deliveryMessage={deliveryMessage}
      />
    </div>

  </div>
</div>
  );
};