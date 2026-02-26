import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortOption: "",
  selectedBrands: [],
  selectedSizes: [],
  selectedDiscount: 0,
  priceRange: 5000,
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSortOption: (state, action) => {
      state.sortOption = action.payload;
    },

    toggleBrand: (state, action) => {
      const brand = action.payload;
      if (state.selectedBrands.includes(brand)) {
        state.selectedBrands = state.selectedBrands.filter(
          (b) => b !== brand
        );
      } else {
        state.selectedBrands.push(brand);
      }
    },

    toggleSize: (state, action) => {
      const size = action.payload;
      if (state.selectedSizes.includes(size)) {
        state.selectedSizes = state.selectedSizes.filter(
          (s) => s !== size
        );
      } else {
        state.selectedSizes.push(size);
      }
    },

    setDiscount: (state, action) => {
      state.selectedDiscount = action.payload;
    },

    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },

    resetFilters: () => initialState,
  },
});

export const {
  setSortOption,
  toggleBrand,
  toggleSize,
  setDiscount,
  setPriceRange,
  resetFilters,
} = filterSlice.actions;

export default filterSlice.reducer;