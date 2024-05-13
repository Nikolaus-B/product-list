import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 56px;

  padding: 16px 10px;

  border: none;
  border-radius: ${(p) => p.theme.radius.xlg};
  background-color: ${(p) => p.theme.colors.red};
  color: ${(p) => p.theme.colors.buttonText};
`;
