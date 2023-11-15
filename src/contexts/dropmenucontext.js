import { createContext, useReducer } from "react";

export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const decreaseItem = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === productToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }
  return cartItems.map((item) =>
    item.id === productToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

export const deleteItem = (cartItems, productToDelete) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === productToDelete.id
  );

  if (existingCartItem) {
    return cartItems.filter((cartItem) => cartItem.id !== productToDelete.id);
  }
};

export const DropmenuContext = createContext({
  isOpen: false,
  setIsOpen: () => null,
  cartItems: [],
  addItemToCart: () => {},
  decreseToCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});
export const CART_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_OPENED_CART: "SET_OPENED_CART",
};

const INITIAL_STATE = {
  isOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_OPENED_CART:
      return {
        ...state,
        isOpen: payload,
      };
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error(`Invalid Error ${type}`);
  }
};

const createAction = (type, payload) => ({ type, payload });

export const DropmenuProvider = ({ children }) => {
  // const [isOpen, setIsOpen] = useState(false);
  // const [cartItems, setCartItems] = useState([]);
  // const [cartCount, setCartCount] = useState(0);
  // const [cartTotal, setCartTotal] = useState(0);

  const [{ isOpen, cartCount, cartItems, cartTotal }, dispatch] = useReducer(
    cartReducer,
    INITIAL_STATE
  );
  const setIsOpen = (bool) =>
    dispatch(createAction(CART_ACTION_TYPES.SET_OPENED_CART, bool));

  const updateCartItemReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    const newCartTotal = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );

    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItems,
        cartTotal: newCartTotal,
        cartCount: newCartCount,
      })
    );
  };

  // useEffect(() => {
  //   const newCartCount = cartItems.reduce(
  //     (total, cartItem) => total + cartItem.quantity,
  //     0
  //   );
  //   setCartCount(newCartCount);
  // }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemReducer(newCartItems);
  };

  const decreseToCart = (productToDecrese) => {
    const newCartItems = decreaseItem(cartItems, productToDecrese);
    updateCartItemReducer(newCartItems);
  };

  const deleteToCart = (productToRemove) => {
    const newCartItems = deleteItem(cartItems, productToRemove);
    updateCartItemReducer(newCartItems);
  };

  // useEffect(() => {
  //   const totalCart = cartItems.reduce(
  //     (total, cartItem) => total + cartItem.quantity * cartItem.price,
  //     0
  //   );
  //   setCartTotal(totalCart);
  // }, [cartItems]);

  const value = {
    isOpen,
    setIsOpen,
    cartItems,
    addItemToCart,
    cartCount,
    cartTotal,
    decreseToCart,
    deleteToCart,
  };

  return (
    <DropmenuContext.Provider value={value}>
      {children}
    </DropmenuContext.Provider>
  );
};
