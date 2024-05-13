import styled from "styled-components";
import { Field as StyledField, Form as StyledForm } from "formik";

export const FormContainer = styled.div`
  padding: 24px;
  height: 500px;
`;

export const FormHeader = styled.div`
  margin-bottom: 24px;
`;

export const FormTitle = styled.h3`
  margin-bottom: 8px;
  font-size: ${(p) => p.theme.fonts.mdSize};
`;

export const FormText = styled.p`
  color: ${(p) => p.theme.colors.grey};
`;

export const Form = styled(StyledForm)`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Field = styled(StyledField)`
  border: none;
  background-color: ${(p) => p.theme.colors.white};
  outline: none;
  border-radius: ${(p) => p.theme.radius.sm};
  padding: 18px;
  width: 400px;
  height: 56px;

  &.textarea {
    height: 114px;
    resize: none;
  }
`;

export const SendButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 56px;

  margin-top: 10px;
  padding: 16px 60px;

  border: none;
  border-radius: ${(p) => p.theme.radius.xlg};
  background-color: ${(p) => p.theme.colors.red};
  color: ${(p) => p.theme.colors.buttonText};
`;
