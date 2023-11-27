import { screen, fireEvent } from "@testing-library/react";
import ProductCard from "../ProductCard";
import { renderWithProviders } from "../../../../utils/test.utils";

describe("Product Card tests", () => {
  test("it should add product item when Product Card button is Clicked", async () => {
    const mockProduct = {
      id: 1,
      imageUrl: "test",
      name: "item A",
      price: 10,
    };
    const { store } = renderWithProviders(
      <ProductCard product={mockProduct} />,
      {
        preloadedState: {
          cart: {
            cartItems: [],
          },
        },
      }
    );

    const addToCartButtonElement = screen.getByText(/add to cart/i);
    await fireEvent.click(addToCartButtonElement);

    expect(store.getState().cart.cartItems.length).toBe(1);
  });
});
