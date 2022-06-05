import { render, screen } from "@testing-library/react";
import Poll from "./Poll";

test("renders learn react link", () => {
  render(<Poll />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
