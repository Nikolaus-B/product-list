import { appSelector } from "../../redux/atore";
import { selectFilteredProductsAlphabetically } from "../../redux/products/productsSelectors";
import { ProductItem } from "../ProductItem/ProductItem";
import { ProductListStyled } from "./ProductsList.styled";

export const ProductsList = () => {
  const filteredProducts = appSelector(selectFilteredProductsAlphabetically);

  return (
    <ProductListStyled>
      {filteredProducts.map((product) => {
        return <ProductItem key={product.id} product={product} />;
      })}
    </ProductListStyled>
  );
};
