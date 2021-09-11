import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

it("shows correct color with colorcode", () => {
  const { getByTestId } = render(<Header />);
  expect(getByTestId("header")).toHaveStyle("background: #20aee5");
});
