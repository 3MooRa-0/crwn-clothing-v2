import styled from "styled-components";

export const CategoryPageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
`;

export const PageTitle = styled.div`
  text-align: center;
  font-size: 24px;
  text-transform: uppercase;
  font-weight: bold;
  margin-block: 10px;
`;
