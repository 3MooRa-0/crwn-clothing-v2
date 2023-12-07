import { Link } from "react-router-dom";

import Button from "../../global/Button/Button";
import CartItem from "../CartItem/CartItem";

//redux related
import { selectCartItems } from "../../../store/cart/cart.selector";
import { useSelector } from "react-redux";

import { CartDropdown, EmptyMessage, ItemCart } from "./DropMenu.styles";
const DropMenu = () => {
  const cartItems = useSelector(selectCartItems);

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
        <Button>GO TO CHECKOUT</Button>
      </Link>
    </CartDropdown>
  );
};

export default DropMenu;
