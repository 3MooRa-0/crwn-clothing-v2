import { screen } from "@testing-library/react";

import CtgPage from "../CtgPage";
import { renderWithProviders } from "../../../../utils/test.utils";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    category: "mens",
  }),
}));

describe("category tests", () => {
  test("It should render a Spinner if isLoading true", () => {
    renderWithProviders(<CtgPage />, {
      preloadedState: {
        categories: {
          isLoading: true,
          categories: [],
        },
      },
    });

    const spinerElement = screen.getByTestId("spinner");
    expect(spinerElement).toBeInTheDocument();
  });

  test("It should render categories if isLoading false", () => {
    renderWithProviders(<CtgPage />, {
      preloadedState: {
        categories: {
          isLoading: false,
          categories: [
            {
              title: "mens",
              items: [
                { id: 1, name: "Product 1" },
                { id: 2, name: "Product 2" },
              ],
            },
          ],
        },
      },
    });

    const spinerElement = screen.queryByTestId("spinner");
    expect(spinerElement).toBeNull();

    const productElement = screen.getByText(/product 1/i);
    expect(productElement).toBeInTheDocument();
  });
});
