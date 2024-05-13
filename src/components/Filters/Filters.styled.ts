import styled from "styled-components";

export const FilterInput = styled.input`
  width: 360px;
  height: 56px;
  padding: 18px;

  border: none;
  border-radius: ${(p) => p.theme.radius.sm};
  background-color: ${(p) => p.theme.colors.white};
  outline: none;
`;
