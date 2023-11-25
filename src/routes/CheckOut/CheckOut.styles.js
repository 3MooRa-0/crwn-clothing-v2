import styled from "styled-components";

export const CheckoutContianer = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  .total {
    font-size: 28px;
    margin-top: 40px;
    margin-right: auto;
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }

  span {
    margin-inline: 5px;
  }

  @media screen and (max-width: 800px) {
    display: none;
  }
`;
export const CheckoutTotal = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;
