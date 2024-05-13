import { useState } from "react";
import { Filters } from "../Filters/Filters";
import { ProductsList } from "../ProductsList/ProductsList";
import { ProductModal } from "../ProductModal/ProductModal";
import { Container } from "./Layout.styled";
import { ProductForm } from "../ProductForm/ProductForm";
import { Button } from "../../commonStyles/Button";

export const Layout = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Container>
        <Button onClick={openModal}>Add product</Button>
        <Filters />
        <ProductsList />
      </Container>
      <ProductModal modalIsOpen={modalIsOpen} closeModal={closeModal}>
        <ProductForm id={"none"} actionType={"add"} closeModal={closeModal} />
      </ProductModal>
    </>
  );
};
