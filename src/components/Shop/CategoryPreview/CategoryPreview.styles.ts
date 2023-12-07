import styled from "styled-components";

export const PerviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-block: 30px;

  .arrow {
    margin-left: 10px;
  }
`;

export const CategoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CategoryTitle = styled.h2`
  font-size: 28px;
`;

export const PreviewBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 30px;
  margin-top: 20px;
`;

export const CollectionHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
