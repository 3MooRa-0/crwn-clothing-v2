import { CategoryItem } from "../categories/categories.types";

export enum CART_ACTION_TYPES {
  IS_CLICKED = "IS_CLICKED",
  SET_CART_ITEMS = "SET_CART_ITEMS",
}

export type CartItem = CategoryItem & {
  quantity: number;
};
