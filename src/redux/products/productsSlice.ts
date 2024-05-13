import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../interfaces/Product";
import { Filters } from "../../interfaces/Filters";

export interface ProdctsState {
  productList: Product[];
  filters: Filters;
}

const initialState: ProdctsState = {
  productList: [],
  filters: { nameFilter: "" },
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getInitialProducts: (state, action) => {
      state.productList = action.payload;
    },
    addProduct: (state, action) => {
      state.productList.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.productList = state.productList.filter(
        (product) => product.id !== action.payload
      );
    },
    addProductComment: (state, action) => {
      const productIndex = state.productList.findIndex(
        (product) => product.id === action.payload.id
      );
      if (productIndex !== -1) {
        state.productList[productIndex].comments.push(action.payload.comment);
      }
    },
    editProduct: (state, action) => {
      const productIndex = state.productList.findIndex(
        (product) => product.id === action.payload.id
      );
      if (productIndex !== -1) {
        state.productList[productIndex] = {
          ...action.payload,
          comments: state.productList[productIndex].comments,
        };
      }
    },
  },
});

export const {
  getInitialProducts,
  addProduct,
  deleteProduct,
  editProduct,
  addProductComment,
} = productsSlice.actions;
const productsReducer = productsSlice.reducer;
export default productsReducer;
