import { render, screen } from "@testing-library/react";
import Answers from "./";

const mockProps = {
  answers: ["test answer", "test answer2", "test answer3"],
  selectedAnswers: [],
};

describe("Answers component", () => {
  it("Should render the Answers component", () => {
    const { container } = render(<Answers {...mockProps} />);
    const answersEl = container.querySelector(".Answers");
    expect(answersEl).toBeInTheDocument();
  });
  it("should render all answers", () => {
    render(<Answers {...mockProps} />);
    mockProps.answers.forEach((answer) => {
      expect(screen.getByText(answer)).toBeInTheDocument();
    });
  });
});
