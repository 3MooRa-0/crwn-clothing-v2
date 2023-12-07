import { FC } from "react";

import { ItemContainer, ItemDetails } from "./CartItem.styles";

import { CartItem as TCartItem } from "../../../store/cart/cart.types";

type CartProps = {
  item: TCartItem;
};

const CartItem: FC<CartProps> = ({ item }) => {
  const { imageUrl, price, name, quantity } = item;

  return (
    <ItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </ItemContainer>
  );
};

export default CartItem;
