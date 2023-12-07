import { FC } from "react";
import { CheckoutItemContainer, ImgContainer } from "./CheckoutItems.styles";

//redux related
import {
  addItemToCart,
  reomveItemFromCart,
  clearItemFromCart,
} from "../../../store/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../../store/cart/cart.selector";
import { CartItem } from "../../../store/cart/cart.types";

type CheckoutProps = {
  cartItem: CartItem;
};

const CheckoutItems: FC<CheckoutProps> = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { imageUrl, price, name, quantity } = cartItem;
  const cartItems = useSelector(selectCartItems);

  const addItemHandler = () =>
    dispatch(reomveItemFromCart(cartItems, cartItem));
  const removeItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <ImgContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImgContainer>
      <span className="name"> {name} </span>
      <span className="quantity">
        <div className="arrow" onClick={addItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={removeItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price"> {price * quantity}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </CheckoutItemContainer>
  );
};

export default CheckoutItems;
