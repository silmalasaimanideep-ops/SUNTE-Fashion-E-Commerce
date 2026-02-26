import { useMemo } from "react";
import { products } from "../data/products";

export const useCategoryProducts = (
  name,
  selectedBrands,
  selectedSizes,
  selectedDiscount,
  priceRange,
  sortOption
) => {

  const categoryProducts = useMemo(() => {
    return products.filter(
      (p) => p.category.toLowerCase() === name.toLowerCase()
    );
  }, [name]);

  const brands = useMemo(() => {
    return [...new Set(categoryProducts.map((p) => p.brand))];
  }, [categoryProducts]);

  const sizes = useMemo(() => {
    return [
      ...new Set(categoryProducts.flatMap((p) => p.sizes || [])),
    ];
  }, [categoryProducts]);

  const filteredProducts = useMemo(() => {
    let result = [...categoryProducts];

    if (selectedBrands.length > 0) {
      result = result.filter((product) =>
        selectedBrands.includes(product.brand)
      );
    }

    if (selectedSizes.length > 0) {
      result = result.filter((product) =>
        product.sizes?.some((size) =>
          selectedSizes.includes(size)
        )
      );
    }

    if (selectedDiscount > 0) {
      result = result.filter(
        (product) => product.discount >= selectedDiscount
      );
    }

    result = result.filter(
      (product) => product.price <= priceRange
    );

    if (sortOption === "low-high") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sortOption === "high-low") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sortOption === "popular") {
      result.sort(
        (a, b) => (b.rating?.rate || 0) - (a.rating?.rate || 0)
      );
    }

    return result;
  }, [
    categoryProducts,
    selectedBrands,
    selectedSizes,
    selectedDiscount,
    priceRange,
    sortOption,
  ]);

  return { brands, sizes, filteredProducts };
};