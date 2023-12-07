import { render, screen } from "@testing-library/react";
import Button from "../Button";

describe("button tests", () => {
  test("should render base button when is passed", () => {
    render(<Button>Test</Button>);

    const buttonElement = screen.getByRole(/test/i);
    expect(buttonElement).toHaveStyle("background-color: white");
  });
});
