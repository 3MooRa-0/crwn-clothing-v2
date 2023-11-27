import { screen } from "@testing-library/react";

import { renderWithProviders } from "../../../../utils/test.utils";
import CartIcon from "../CartIcon";

describe("Cart Icon test", () => {
  test("Uses preloaded state to render", () => {
    const initialCartItems = [
      {
        id: 1,
        name: "Item A",
        imageUrl: "test",
        price: 10,
        quantity: 1,
      },
      {
        id: 2,
        name: "Item B",
        imageUrl: "test",
        price: 10,
        quantity: 2,
      },
    ];

    renderWithProviders(<CartIcon />, {
      preloadedState: {
        cart: {
          cartItems: initialCartItems,
        },
      },
    });

    const cartIcontElemnt = screen.getByText("3");

    expect(cartIcontElemnt).toBeInTheDocument();
  });
});
