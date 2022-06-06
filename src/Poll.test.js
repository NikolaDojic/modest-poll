import { render, screen } from "@testing-library/react";
import Poll from "./Poll";

const mockProps = {
  questionId: "mockId",
  question: "Mock question",
  answers: ["mock naswer1", "mock naswer2", "mock naswer3"],
};
describe("Answer component", () => {
  //supressing log outputs
  beforeEach(() => {
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "error").mockImplementation(() => {});
  });
  afterAll(() => {
    console.warn.mockRestore();
    console.error.mockRestore();
  });

  afterEach(() => {
    console.warn.mockClear();
    console.error.mockClear();
  });

  it("Should render the Poll component with correct question", () => {
    render(<Poll {...mockProps} />);
    const questionEl = screen.getByText(/Mock question/i);
    expect(questionEl).toBeInTheDocument();
  });
  it("Should not render the Poll component if no answers", () => {
    render(<Poll {...{ ...mockProps, answers: [] }} />);
    const questionEl = screen.queryByText(/Mock question/i);
    expect(questionEl).not.toBeInTheDocument();
  });
  it("Should not render the Poll component if no questionId", () => {
    render(<Poll {...{ ...mockProps, questionId: "" }} />);
    const questionEl = screen.queryByText(/Mock question/i);
    expect(questionEl).not.toBeInTheDocument();
  });
  it("Should not render the Poll component if no question", () => {
    render(<Poll {...{ ...mockProps, question: "" }} />);
    const questionEl = screen.queryByText(/Mock question/i);
    expect(questionEl).not.toBeInTheDocument();
  });
});
