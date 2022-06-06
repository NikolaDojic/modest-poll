import { hasDuplicates, hasErrors, normalizeProps } from "./utils";

describe("testing util functions", () => {
  const hasErrorsParams = {
    questionId: "mockId",
    answers: ["answer"],
    question: "question",
  };
  it("hasErrors should return true if questionId is falsy", () => {
    expect(hasErrors({ ...hasErrorsParams, questionId: "" })).toBe(true);
  });
  it("hasErrors should return true if question is falsy", () => {
    expect(hasErrors({ ...hasErrorsParams, question: "" })).toBe(true);
  });
  it("hasErrors should return true if no answers", () => {
    expect(hasErrors({ ...hasErrorsParams, answers: [] })).toBe(true);
  });
  it("hasErrors should return false with correct params", () => {
    expect(hasErrors(hasErrorsParams)).toBe(false);
  });

  it("hasDuplicates should return true for array with repeated questionId", () => {
    const containers = [
      { dataset: { questionId: "mockId" } },
      { dataset: { questionId: "mockId2" } },
      { dataset: { questionId: "mockId3" } },
      { dataset: { questionId: "mockId4" } },
      { dataset: { questionId: "mockId" } },
    ];
    expect(hasDuplicates(containers)).toBe(true);
  });
  it("hasDuplicates should return false for array with no duplicate questionId", () => {
    const containers = [
      { dataset: { questionId: "mockId1" } },
      { dataset: { questionId: "mockId2" } },
      { dataset: { questionId: "mockId3" } },
      { dataset: { questionId: "mockId4" } },
    ];
    expect(hasDuplicates(containers)).toBe(false);
  });

  it("normalizeProps should return answers as arrays", () => {
    const props = { answers: "answ1; answ2; answ3" };
    const normalizedProps = normalizeProps(props);
    expect(Array.isArray(normalizedProps.answers)).toBe(true);
  });
  it("normalizeProps should return answers as arrays of correct length, with custom delimiter", () => {
    const props = { answers: "answ1- answ2- answ3", delimiter: "-" };
    const normalizedProps = normalizeProps(props);
    expect(normalizedProps.answers.length).toBe(3);
  });
  it("normalizeProps should return multipleAnswers as false if not provided", () => {
    const props = { answers: "answ1- answ2- answ3" };
    const normalizedProps = normalizeProps(props);
    expect(normalizedProps.multipleAnswers).toBe(false);
  });
  it("normalizeProps should return multipleAnswers as true if string 'true' is passed", () => {
    const props = { answers: "answ1- answ2- answ3", multipleAnswers: "true" };
    const normalizedProps = normalizeProps(props);
    expect(normalizedProps.multipleAnswers).toBe(true);
  });
});
