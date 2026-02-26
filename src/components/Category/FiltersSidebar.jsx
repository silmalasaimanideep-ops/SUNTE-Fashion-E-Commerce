import {
  toggleBrand,
  toggleSize,
  setDiscount,
  setPriceRange,
  resetFilters,
} from "../../features/filter/filterSlice";
import { useDispatch } from "react-redux";

export const FiltersSidebar = ({
  brands,
  sizes,
  selectedBrands,
  selectedSizes,
  selectedDiscount,
  priceRange,
}) => {

  const dispatch = useDispatch();

  return (
    <aside className="
      hidden lg:block
      w-[200px] xl:w-[220px]
      border-r border-gray-200
      pr-5
      h-[calc(100vh-80px)]
      sticky top-[80px]
      overflow-y-auto
      shrink-0
      scrollbar-hide
    ">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-sm font-bold tracking-wider text-gray-900">
          FILTERS
        </h2>
        <button
          onClick={() => dispatch(resetFilters())}
          className="text-xs font-medium text-pink-600 hover:underline"
        >
          CLEAR ALL
        </button>
      </div>

      {/* BRAND */}
      <div className="pb-5 border-b border-gray-200">
        <h3 className="text-xs font-semibold tracking-widest text-gray-500 mb-3">
          BRAND
        </h3>

        <div className="space-y-2">
          {brands.map((brand) => (
            <label
              key={brand}
              className="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => dispatch(toggleBrand(brand))}
                className="accent-pink-600 w-4 h-4"
              />
              {brand}
            </label>
          ))}
        </div>
      </div>

      {/* SIZE */}
      <div className="py-5 border-b border-gray-200">
        <h3 className="text-xs font-semibold tracking-widest text-gray-500 mb-3">
          SIZE
        </h3>

        <div className="space-y-2">
          {sizes.map((size) => (
            <label
              key={size}
              className="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedSizes.includes(size)}
                onChange={() => dispatch(toggleSize(size))}
                className="accent-pink-600 w-4 h-4"
              />
              {size}
            </label>
          ))}
        </div>
      </div>

      {/* DISCOUNT */}
      <div className="py-5 border-b border-gray-200">
        <h3 className="text-xs font-semibold tracking-widest text-gray-500 mb-3">
          DISCOUNT
        </h3>

        <div className="space-y-2">
          {[10, 20, 30, 40, 50].map((d) => (
            <label
              key={d}
              className="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 cursor-pointer"
            >
              <input
                type="radio"
                checked={selectedDiscount === d}
                onChange={() => dispatch(setDiscount(d))}
                className="accent-pink-600 w-4 h-4"
              />
              {d}% and above
            </label>
          ))}
        </div>
      </div>

      {/* PRICE */}
      <div className="py-5">
        <h3 className="text-xs font-semibold tracking-widest text-gray-500 mb-3">
          PRICE
        </h3>

        <p className="text-sm text-gray-700 mb-3">
          ₹0 – ₹{priceRange}
        </p>

        <input
          type="range"
          min="0"
          max="5000"
          value={priceRange}
          onChange={(e) =>
            dispatch(setPriceRange(Number(e.target.value)))
          }
          className="w-full accent-pink-600"
        />
      </div>

    </aside>
  );
};