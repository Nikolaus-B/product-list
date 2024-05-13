import Modal from "react-modal";
import { useAppDispatch } from "../../redux/atore";
import { deleteProduct } from "../../redux/products/productsSlice";
import { Button } from "../../commonStyles/Button";
import { DeleteModalButtonContainer } from "./ProductDeleteModal.styled";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

interface ProductModalProps {
  id: number | string;
  modalIsOpen: boolean;
  closeModal: () => void;
}

export const ProductDeleteModal: React.FC<ProductModalProps> = ({
  modalIsOpen,
  closeModal,
  id,
}) => {
  const dispatch = useAppDispatch();
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Delete product modal"
    >
      <p>Are you sure you want to delete the product?</p>
      <DeleteModalButtonContainer>
        <Button onClick={() => dispatch(deleteProduct(id))}>Yes</Button>
        <Button onClick={closeModal}>No</Button>
      </DeleteModalButtonContainer>
    </Modal>
  );
};
