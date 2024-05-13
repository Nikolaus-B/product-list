import "./App.css";
import { Layout } from "./components/Layout/Layout";
import "modern-normalize";
import products from "./products.json";
import { useEffect } from "react";
import { useAppDispatch } from "./redux/atore";
import { getInitialProducts } from "./redux/products/productsSlice";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getInitialProducts(products));
  }, []);

  return (
    <>
      <Layout />
    </>
  );
}

export default App;
