import styled from "styled-components";

export const PaymentContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-inline: auto;

  h2 {
    font-size: 20px;
    margin-bottom: 20px;
  }

  button {
    margin-top: 20px;
  }
`;
export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;
  margin-top: 20px;

  @media screen and (max-width: 800px) {
    min-width: 200px;
  }
`;
