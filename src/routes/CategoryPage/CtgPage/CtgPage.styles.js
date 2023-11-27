import styled from "styled-components";

export const CategoryPageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 15px;
    row-gap: 25px;
  }
`;

export const PageTitle = styled.div`
  text-align: center;
  font-size: 28px;
  text-transform: uppercase;
  margin-block: 10px;
`;
