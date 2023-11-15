import { createContext, useEffect, useReducer } from "react";

import { getCategoriesAndDocs } from "../utils/firebase";

import { createAction } from "../utils/reducer.utils";
// import { addCollectionAndDocs } from "../utils/firebase.js";

// import SHOP_DATA from "../shop-data.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CATEGORIES_ACTION_TYPES = {
  SET_ALL_CATS: "SET_ALL_CATS",
};

const INITIAL_STATE = {
  categoriesMap: {},
};

const categoriesReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_ALL_CATS:
      return {
        ...state,
        categoriesMap: payload,
      };
    default:
      return state;
  }
};

export const CategoriesProvider = ({ children }) => {
  // const [categoriesMap, setCategoriesMap] = useState([]);

  const [{ categoriesMap }, dispatch] = useReducer(
    categoriesReducer,
    INITIAL_STATE
  );

  const setCategoriesMap = (catMap) =>
    dispatch(createAction(CATEGORIES_ACTION_TYPES.SET_ALL_CATS, catMap));

  // useEffect(() => {
  //   addCollectionAndDocs("categories", SHOP_DATA);
  // }, []);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categorysMap = await getCategoriesAndDocs();
      setCategoriesMap(categorysMap);
    };

    getCategoriesMap();
  }, []);

  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
