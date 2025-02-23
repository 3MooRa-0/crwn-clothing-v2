import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  .name,
  .quantity,
  .price {
    width: 23%;
  }

  .quantity {
    display: flex;

    .arrow {
      cursor: pointer;
    }

    .value {
      margin: 0 10px;
    }
  }
  .remove-button {
    cursor: pointer;
  }
`;
export const ImgContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 70%;
    height: 70%;
  }
`;
