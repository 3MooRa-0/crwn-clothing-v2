import { ItemContainer, ItemDetails } from "./CartItem.styles";

const CartItem = ({ item }) => {
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
