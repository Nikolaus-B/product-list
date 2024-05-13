import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../interfaces/Product";

export interface ProdctsState {
  productList: Product[];
}

const initialState: ProdctsState = {
  productList: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: () => {},
});

// export const {  } = productsSlice.actions;
const productsReducer = productsSlice.reducer;
export default productsReducer;
