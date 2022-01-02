import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

it("renders learn react link", async () => {
  render(<Home />);
  const linkElement = await screen.findByText(/divance/i);
  expect(linkElement).toBeInTheDocument();
});
