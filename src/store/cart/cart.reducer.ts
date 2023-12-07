import { AnyAction } from "redux";

import { setCartItems, setClicked } from "./cart.action";

import { CartItem } from "./cart.types";

export type CartState = {
  readonly clicked: boolean;
  readonly cartItems: CartItem[];
};

export const CART_INITIAL_STATE: CartState = {
  clicked: false,
  cartItems: [],
};

export const cartReducer = (
  state = CART_INITIAL_STATE,
  action: AnyAction
): CartState => {
  if (setClicked.match(action)) {
    return {
      ...state,
      clicked: action.payload,
    };
  }
  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }

  return state;
};
