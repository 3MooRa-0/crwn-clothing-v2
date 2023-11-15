import { useDispatch, useSelector } from "react-redux";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/crown.svg";
import CartIcon from "../../components/CheckOut/CartIcon/CartIcon";

import "./Navigation.scss";
import DropMenu from "../../components/CheckOut/DropMenu/DropMenu";

import { selectCurrentUser } from "../../store/user/user.selector";

//redux related
import { selectIsClicked } from "../../store/cart/cart.selector";
import { signOutStart } from "../../store/user/user.action";

const Nav = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isOpen = useSelector(selectIsClicked);

  const signOutUser = () => dispatch(signOutStart());

  return (
    <>
      <div className="wrapper nav-wrapper">
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item logo">
              <Link to="/">
                <Logo aria-label="Logo" />
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/shop">SHOP</Link>
            </li>
            <li className="nav__item">
              {!currentUser ? (
                <Link to="/auth">SIGN IN</Link>
              ) : (
                <span onClick={signOutUser}>SIGN OUT</span>
              )}
            </li>
            <li className="nav__item">
              <CartIcon />
            </li>
          </ul>
          {isOpen && <DropMenu />}
        </nav>
      </div>

      <Outlet />
    </>
  );
};

export default Nav;
