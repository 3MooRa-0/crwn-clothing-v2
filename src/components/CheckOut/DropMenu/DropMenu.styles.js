import styled from "styled-components";

export const CartDropdown = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 47px;
  right: 0;
  z-index: 5;

  button {
    margin: auto;
    margin-top: 15px;
  }

  //Scroll bar
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: #444;
  }
`;
export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: auto;
  font-weight: bold;
`;
export const ItemCart = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;
