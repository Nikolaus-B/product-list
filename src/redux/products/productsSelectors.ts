import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../atore";
import { Product } from "../../interfaces/Product";

export const selectProducts = (state: RootState) => state.products.productList;
// export const selectNameFilter = (state: RootState) =>
//   state.products.filters.nameFilter;

export const selectFilteredProductsAlphabetically = createSelector(
  selectProducts,
  (products: Product[]) => {
    const sortedProducts = [...products].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    return sortedProducts;
  }
);

// export const selectFilteredByNameProducts = createSelector(
//   selectProducts,
//   selectNameFilter,
//   (products: Product[], nameFilter: string) => {
//     const filteredProducts = products.filter((product) =>
//       product.name.toLowerCase().includes(nameFilter.toLowerCase())
//     );
//     return filteredProducts;
//   }
// );

// export const selectFilteredProducts = createSelector(
//   [selectProducts, selectNameFilter],
//   (products: Product[], nameFilter: string) => {
//     if (nameFilter) {
//       return products.filter((product) =>
//         product.name.toLowerCase().includes(nameFilter.toLowerCase())
//       );
//     } else {
//       return [...products].sort((a, b) => a.name.localeCompare(b.name));
//     }
//   }
// );
