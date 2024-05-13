import Modal from "react-modal";
import { customStyles } from "../../commonStyles/customModalStyles";
import { useAppDispatch } from "../../redux/atore";
import { addProductComment } from "../../redux/products/productsSlice";
import { useState } from "react";
import { Button } from "../../commonStyles/Button";

interface ProductModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  id: number | string;
}

export const AddCommentModal: React.FC<ProductModalProps> = ({
  modalIsOpen,
  closeModal,
  id,
}) => {
  const dispatch = useAppDispatch();
  const [comment, setComment] = useState<string>("");

  const handleCommentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setComment(event.target.value);
  };

  const onAddCommentButtonClick = () => {
    dispatch(addProductComment({ id: id, comment: comment }));
    setComment("");
    closeModal();
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="add comment modal"
    >
      <div>
        <textarea value={comment} onChange={handleCommentChange} />
        <Button onClick={onAddCommentButtonClick}>Add comment</Button>
      </div>
    </Modal>
  );
};
