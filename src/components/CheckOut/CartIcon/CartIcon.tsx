import { ReactComponent as ShoppingIcon } from "../../../assets/images/shopping-bag.svg";

import { CartContainer, Icon, ItemCount } from "./CartIcon.styles";

//redux related
import { setClicked } from "../../../store/cart/cart.action";
import {
  selectIsClicked,
  selectCartCount,
} from "../../../store/cart/cart.selector";
import { useDispatch, useSelector } from "react-redux";

const CartIcon = () => {
  const dispatch = useDispatch();

  const isOpen = useSelector(selectIsClicked);
  const cartCount = useSelector(selectCartCount);

  const handleCartClick = () => dispatch(setClicked(!isOpen));

  return (
    <CartContainer onClick={handleCartClick}>
      <Icon>
        <ShoppingIcon />
      </Icon>
      <ItemCount>{cartCount}</ItemCount>
    </CartContainer>
  );
};

export default CartIcon;
