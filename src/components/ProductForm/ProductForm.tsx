import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import {
  Field,
  Form,
  FormContainer,
  FormHeader,
  FormText,
  FormTitle,
  SendButton,
} from "./ProductForm.styled";
import { useAppDispatch } from "../../redux/atore";
import { addProduct, editProduct } from "../../redux/products/productsSlice";
import { uid } from "uid";

const AddProdctSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  url: Yup.string(),
  count: Yup.number().required("Required"),
  width: Yup.number().required("Required"),
  height: Yup.number().required("Required"),
  weight: Yup.string().required("Required"),
});

interface ProductFormProps {
  id: number | string;
  actionType: string;
  closeModal: () => void;
}

export const ProductForm: React.FC<ProductFormProps> = ({
  id,
  actionType,
  closeModal,
}) => {
  const dispatch = useAppDispatch();

  return (
    <FormContainer>
      <FormHeader>
        <FormTitle>
          {actionType === "add" ? "Add your product now" : "Edit your product"}
        </FormTitle>
        <FormText>Stay connected! We are always ready to help you.</FormText>
      </FormHeader>
      <Formik
        initialValues={{
          name: "",
          url: "",
          count: "",
          weight: "",
          width: "",
          height: "",
        }}
        validationSchema={AddProdctSchema}
        onSubmit={async (values, actions) => {
          const { name, url, count, weight, width, height } = values;

          actions.resetForm();

          actionType === "add"
            ? dispatch(
                addProduct({
                  id: uid(),
                  name: name,
                  imageUrl: url,
                  count: count,
                  weight: weight,
                  size: { width: width, height: height },
                  comments: [],
                })
              )
            : dispatch(
                editProduct({
                  id: id,
                  name: name,
                  imageUrl: url,
                  count: count,
                  weight: weight,
                  size: { width: width, height: height },
                  comments: [],
                })
              );
          closeModal();
        }}
      >
        <Form>
          <label>
            <Field name="name" placeholder="Product name" />
            <ErrorMessage component={"span"} name="name" />
          </label>

          <label>
            <Field name="url" placeholder="https://example" />
            <ErrorMessage component={"span"} name="url" />
          </label>

          <label>
            <Field name="count" placeholder="2" />
            <ErrorMessage component={"span"} name="count" />
          </label>

          <label>
            <Field name="weight" placeholder="200g" />
            <ErrorMessage component={"span"} name="weight" />
          </label>

          <label>
            <Field name="width" placeholder="width" />
            <ErrorMessage component={"span"} name="width" />
          </label>

          <label>
            <Field name="height" placeholder="height" />
            <ErrorMessage component={"span"} name="height" />
          </label>

          <SendButton type="submit">Send</SendButton>
        </Form>
      </Formik>
    </FormContainer>
  );
};
