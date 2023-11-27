import { screen, fireEvent } from "@testing-library/react";
import * as reactRedux from "react-redux";

import Navigation from "../Navigation";

import { renderWithProviders } from "../../../utils/test.utils";

describe("Navigation test", () => {
  test("It should render a Sign in Link if there is no currentUser", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: null,
        },
      },
    });

    const signInLinkElement = screen.getByText(/sign in/i);
    expect(signInLinkElement).toBeInTheDocument();

    //we use query if we expect that the return is null
    const signOutLinkElement = screen.queryByText(/sign out/i);
    expect(signOutLinkElement).toBeNull();
  });

  test("It should render a Sign out Link if there is a currentUser", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: {},
        },
      },
    });

    const signInLinkElement = screen.queryByText(/sign in/i);
    expect(signInLinkElement).toBeNull();

    const signOutLinkElement = screen.getByText(/sign out/i);
    expect(signOutLinkElement).toBeInTheDocument();
  });

  test("it should not render a cart DropMenu if isClicked false", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        cart: {
          clicked: false,
          cartItems: [],
        },
      },
    });

    const checkCartClosed = screen.queryByText(/your cart is empty/i);
    expect(checkCartClosed).toBeNull();
  });

  test("it should render a cart DropMenu if isClicked true", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        cart: {
          clicked: true,
          cartItems: [],
        },
      },
    });

    const checkCartOpened = screen.getByText(/your cart is empty/i);
    expect(checkCartOpened).toBeInTheDocument();
  });

  //   test("it should dispatch signOutStart action when clicking on the Sign Out Link", async () => {
  //     const mockDispatch = jest.fn();
  //     jest.spyOn(reactRedux, "useDispatch").mockReturnValue(mockDispatch);

  //     renderWithProviders(<Navigation />, {
  //       preloadedState: {
  //         user: {
  //           currentUser: {},
  //         },
  //       },
  //     });

  //     expect(screen.getByText("SIGN OUT")).toBeInTheDocument();

  //     await fireEvent.click(screen.getByText("SIGN OUT"));

  //     expect(mockDispatch).toHaveBeenCalled();
  //     expect(mockDispatch).toHaveBeenCalledWith(signOutStart());

  //     mockDispatch.mockClear();
  //   });
});
