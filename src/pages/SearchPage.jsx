import { products } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import { useLocation } from "react-router-dom";
import { useMemo } from "react";
export const Search = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q") || "";

 const filteredProducts = useMemo(() => {
  return products.filter((product) =>
    `${product.title} ${product.brand} ${product.category}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );
}, [query]);

  return (
  <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 pb-20 lg:pb-10">

    <h1 className="mb-6 text-sm sm:text-lg md:text-xl tracking-wide sm:tracking-widest font-semibold text-gray-800 break-words">
      SEARCH RESULTS FOR "<span className="font-bold">{query}</span>" ({filteredProducts.length})
    </h1>

    {filteredProducts.length === 0 ? (
      <div className="min-h-[40vh] flex items-center justify-center text-gray-500 text-sm sm:text-base text-center px-4">
        No products found.
      </div>
    ) : (
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    )}
  </div>
);
};
