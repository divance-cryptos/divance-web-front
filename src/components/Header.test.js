import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

it("shows correct color with colorcode", () => {
  const header = render(<Header />);
  expect(header.getByTestId("header")).toHaveStyle("background: #FFFFFF");
});
