import { render, screen } from "@testing-library/react";
import Footer from "./";

const mockProps = {
  questionId: "mockQuestin",
  selectedAnswers: [],
  voted: false,
};

describe("Footer component", () => {
  it("Should render the Footer component", () => {
    const { container } = render(<Footer {...mockProps} />);
    const footerEl = container.querySelector(".Footer");
    expect(footerEl).toBeInTheDocument();
  });
  it("should show the button if not voted", () => {
    render(<Footer {...mockProps} />);
    const buttonEl = screen.getByText(/submit/i);
    expect(buttonEl).toBeInTheDocument();
  });
  it("button should be disabled if no selected answers", () => {
    render(<Footer {...mockProps} />);
    const buttonEl = screen.getByText(/Submit/i);
    expect(buttonEl).toBeDisabled();
  });
  it("should hide button if voted", () => {
    render(<Footer {...{ ...mockProps, voted: true }} />);
    const buttonEl = screen.queryByText(/Submit/i);
    expect(buttonEl).not.toBeInTheDocument();
  });
  it("should show 'Thank you' message if voted", () => {
    render(<Footer {...{ ...mockProps, voted: true }} />);
    const buttonEl = screen.queryByText(/Thanks for voting!/i);
    expect(buttonEl).toBeInTheDocument();
  });
  it("should hide 'Thank you' message if not voted", () => {
    render(<Footer {...{ ...mockProps }} />);
    const buttonEl = screen.queryByText(/Thanks for voting!/i);
    expect(buttonEl).not.toBeInTheDocument();
  });
});
