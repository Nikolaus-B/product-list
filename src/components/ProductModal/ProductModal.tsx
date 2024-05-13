import Modal from "react-modal";
import { ReactNode } from "react";
import { customStyles } from "../../commonStyles/customModalStyles";

interface ProductModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  children: ReactNode;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  modalIsOpen,
  closeModal,
  children,
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      {children}
    </Modal>
  );
};
