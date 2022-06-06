import { render, screen } from "@testing-library/react";
import Answer from "./Answer";

const mockProps = {
  text: "Mock answer",
  onClick: jest.fn(() => {}),
  count: 7,
  percentage: 34,
  selected: false,
  voted: false,
  multipleAnswers: true,
};

describe("Answer component", () => {
  it("Should render the answer component", () => {
    render(<Answer {...mockProps} />);
    const answerEl = screen.getByText(/Mock answer/i);
    expect(answerEl).toBeInTheDocument();
  });

  it("Should render an input when voted is 'false'", () => {
    const { container } = render(<Answer {...mockProps} />);
    const answerEl = container.querySelector("input");
    expect(answerEl).toBeInTheDocument();
  });
  it("Should render checkbox when multiple answers", () => {
    const { container } = render(<Answer {...mockProps} />);
    const answerEl = container.querySelector("input[type='checkbox']");
    expect(answerEl).toBeInTheDocument();
  });
  it("Should render radio button when multiple answers is 'false'", () => {
    const { container } = render(
      <Answer {...{ ...mockProps, multipleAnswers: false }} />
    );
    const answerEl = container.querySelector("input[type='radio']");
    expect(answerEl).toBeInTheDocument();
  });
  it("Should not render an input element when voted is 'true'", () => {
    const { container } = render(<Answer {...{ ...mockProps, voted: true }} />);
    const inputEl = container.querySelector("input");
    expect(inputEl).not.toBeInTheDocument();
  });
  it("Input should be checked if selected", () => {
    const { container } = render(
      <Answer {...{ ...mockProps, selected: true }} />
    );
    const inputEl = container.querySelector("input");
    expect(inputEl.checked).toBe(true);
  });
  it("Input should not be checked if selected", () => {
    const { container } = render(<Answer {...mockProps} />);
    const inputEl = container.querySelector("input");
    expect(inputEl.checked).toBe(false);
  });

  it("Should show count when voted is 'true'", () => {
    const { container } = render(<Answer {...{ ...mockProps, voted: true }} />);
    const answerEl = container.querySelector(".count");
    expect(answerEl).toBeInTheDocument();
  });
  it("Should not show count when voted is 'false'", () => {
    const { container } = render(<Answer {...mockProps} />);
    const answerEl = container.querySelector(".count");
    expect(answerEl).not.toBeInTheDocument();
  });
  it("Should show correct count value", () => {
    const { container } = render(<Answer {...{ ...mockProps, voted: true }} />);
    const answerEl = container.querySelector(".count");
    expect(Number(answerEl.innerHTML)).toBe(7);
  });
  it("Should show percentage when voted is 'true'", () => {
    const { container } = render(<Answer {...{ ...mockProps, voted: true }} />);
    const answerEl = container.querySelector(".percentage");
    expect(answerEl).toBeVisible();
  });
  it("Should have correct width for percentage element", () => {
    const { container } = render(<Answer {...{ ...mockProps, voted: true }} />);
    const answerEl = container.querySelector(".percentage");
    expect(answerEl.style.width).toBe("34%");
  });
  it("Should hide percentage when voted is 'false'", () => {
    const { container } = render(<Answer {...mockProps} />);
    const answerEl = container.querySelector(".percentage");
    expect(answerEl.style.width).toBe("0px");
  });
});
