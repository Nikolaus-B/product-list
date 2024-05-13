import styled from "styled-components";

export const ProductItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 420px;
  padding: 24px;

  border: 1px solid ${(p) => p.theme.colors.borderColor};
  border-radius: ${(p) => p.theme.radius.md};
`;

export const ProductItemImg = styled.img`
  width: 370px;
  height: 300px;
`;

export const ProductItemTitle = styled.h3`
  width: 370px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: ${(p) => p.theme.fonts.bigSize};
  line-height: 30px;

  font-weight: ${(p) => p.theme.fonts.bold};
`;

export const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const TagContainer = styled.div`
  display: flex;
  gap: 8px;

  padding: 12px 18px;
  background-color: ${(p) => p.theme.colors.mainWhite};
  border-radius: ${(p) => p.theme.radius.lg};
`;

export const TagText = styled.div`
  display: flex;
  gap: 8px;
  padding: 12px 18px;
  background-color: ${(p) => p.theme.colors.mainWhite};
  border-radius: ${(p) => p.theme.radius.lg};
`;

export const CommentsList = styled.ul`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

export const ProductButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
