import Button, { BUTTON_TYPE_CLASSES } from "../../global/Button/Button";

import { CardContainer, CardFooter } from "./ProductCard.styles";

//redux related
import { addItemToCart } from "../../../store/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../../store/cart/cart.selector";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = product;
  const cartItems = useSelector(selectCartItems);

  const addingProductHandler = () => {
    return dispatch(addItemToCart(cartItems, product));
  };

  return (
    <CardContainer>
      <img src={imageUrl} alt={name} />
      <CardFooter>
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </CardFooter>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addingProductHandler}
      >
        Add to cart
      </Button>
    </CardContainer>
  );
};

export default ProductCard;
