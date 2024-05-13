import { useState } from "react";
import { Product } from "../../interfaces/Product";
import {
  CommentsList,
  ProductButtonsContainer,
  ProductItemContainer,
  ProductItemImg,
  ProductItemTitle,
  TagContainer,
  TagWrapper,
} from "./ProductItem.styled";
import { ProductDeleteModal } from "../ProductDeleteModal/ProductDeleteModal";
import { ProductModal } from "../ProductModal/ProductModal";
import { ProductForm } from "../ProductForm/ProductForm";
import { Button } from "../../commonStyles/Button";
import { AddCommentModal } from "../AddCommentModal/AddCommentModal";
import { uid } from "uid";

interface ProductProps {
  product: Product;
}

export const ProductItem: React.FC<ProductProps> = ({ product }) => {
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [addCommentModalIsOpen, setAddCommentModalIsOpen] = useState(false);

  const openDeleteModal = () => setDeleteModalIsOpen(true);

  const openEditModal = () => setEditModalIsOpen(true);

  const openAddCommentModal = () => setAddCommentModalIsOpen(true);

  const closeDeleteModal = () => setDeleteModalIsOpen(false);

  const closeEditModal = () => setEditModalIsOpen(false);

  const closeAddCommentModal = () => setAddCommentModalIsOpen(false);

  return (
    <>
      {" "}
      <ProductItemContainer>
        <ProductItemTitle>{product.name}</ProductItemTitle>
        <ProductItemImg
          src={
            product.imageUrl === "some url here" || product.imageUrl === ""
              ? "https://static.vecteezy.com/system/resources/thumbnails/022/014/063/small/missing-picture-page-for-website-design-or-mobile-app-design-no-image-available-icon-vector.jpg"
              : product.imageUrl
          }
          alt={product.name}
        />
        <TagWrapper>
          <TagContainer>
            <p>Count: {product.count}</p>
          </TagContainer>
          <TagContainer>
            <p>Weight: {product.weight}</p>
          </TagContainer>
          <TagContainer>
            <p>Wigth: {product.size.width}</p>
          </TagContainer>
          <TagContainer>
            <p>Height: {product.size.height}</p>
          </TagContainer>
        </TagWrapper>
        <div>
          <p>Comments:</p>
          <CommentsList>
            {product.comments.map((comment) => {
              return <li key={uid()}>{comment}</li>;
            })}
          </CommentsList>
        </div>
        <ProductButtonsContainer>
          <Button onClick={openEditModal}>Edit</Button>
          <Button onClick={openDeleteModal}>Delete</Button>
          <Button onClick={openAddCommentModal}>Add comment</Button>
        </ProductButtonsContainer>
      </ProductItemContainer>
      <ProductDeleteModal
        modalIsOpen={deleteModalIsOpen}
        closeModal={closeDeleteModal}
        id={product.id}
      />
      <ProductModal modalIsOpen={editModalIsOpen} closeModal={closeEditModal}>
        <ProductForm
          id={product.id}
          actionType={"edit"}
          closeModal={closeEditModal}
        />
      </ProductModal>
      <AddCommentModal
        modalIsOpen={addCommentModalIsOpen}
        closeModal={closeAddCommentModal}
        id={product.id}
      />
    </>
  );
};
