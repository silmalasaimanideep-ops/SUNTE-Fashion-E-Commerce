import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { resetFilters } from "../features/filter/filterSlice";

import { useCategoryProducts } from "../hooks/useCategoryProducts";
import { FiltersSidebar } from "../components/Category/FiltersSidebar";
import { ProductGrid } from "../components/ProductGrid";

export const CategoryPage = () => {

  const { name } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetFilters());
  }, [name, dispatch]);

  const {
    sortOption,
    selectedBrands,
    selectedSizes,
    selectedDiscount,
    priceRange,
  } = useSelector((state) => state.filters);

  const { brands, sizes, filteredProducts } =
    useCategoryProducts(
      name,
      selectedBrands,
      selectedSizes,
      selectedDiscount,
      priceRange,
      sortOption
    );

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">

        <FiltersSidebar
          brands={brands}
          sizes={sizes}
          selectedBrands={selectedBrands}
          selectedSizes={selectedSizes}
          selectedDiscount={selectedDiscount}
          priceRange={priceRange}
        />

        {/* PRODUCTS */}
        <section className="flex-1">
          <h1 className="mb-4 sm:mb-6 capitalize text-lg sm:text-xl lg:text-2xl tracking-widest font-semibold text-gray-800">
            {name.toUpperCase()} COLLECTION ({filteredProducts.length})
          </h1>

          <ProductGrid products={filteredProducts} />
        </section>

      </div>
    </div>
  );
};