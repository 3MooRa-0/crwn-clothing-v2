import { Link } from "react-router-dom";

import Button from "../../global/Button/Button";
import CartItem from "../CartItem/CartItem";

//redux related
import {
  selectCartItems,
  selectIsClicked,
} from "../../../store/cart/cart.selector";
import { useDispatch, useSelector } from "react-redux";
import { setClicked } from "../../../store/cart/cart.action";

import { CartDropdown, EmptyMessage, ItemCart } from "./DropMenu.styles";
const DropMenu = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const isOpen = useSelector(selectIsClicked);
  const handleCartClick = () => dispatch(setClicked(!isOpen));

  return (
    <CartDropdown>
      <ItemCart>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </ItemCart>
      <Link to="/checkout">
        <Button onClick={handleCartClick}>GO TO CHECKOUT</Button>
      </Link>
    </CartDropdown>
  );
};

export default DropMenu;
