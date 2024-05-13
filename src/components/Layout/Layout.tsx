import { useState } from "react";
import { Filters } from "../Filters/Filters";
import { ProductsList } from "../ProductsList/ProductsList";
import { ProdctModal } from "../ProdctModal/ProdctModal";

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
      <main>
        <button onClick={openModal}>Add</button>
        <Filters />
        <ProductsList />
      </main>
      <ProdctModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </>
  );
};
