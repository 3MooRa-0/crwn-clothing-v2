import CheckoutItems from "../../components/CheckOut/CheckoutItems/CheckoutItems";

import {
  CheckoutContianer,
  CheckoutHeader,
  HeaderBlock,
} from "./CheckOut.styles";

//redux related
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import { useSelector } from "react-redux";
import PaymentForm from "../../components/CheckOut/PaymentForm/PaymentForm";

const CheckOut = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <CheckoutContianer className="wrapper">
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItems key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">TOTAL: ${cartTotal}</div>
      <PaymentForm />
    </CheckoutContianer>
  );
};

export default CheckOut;
