import { memo } from "react";
import { ItemContainer, ItemDetails } from "./CartItem.styles";

const CartItem = memo(({ item }) => {
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
});

export default CartItem;
