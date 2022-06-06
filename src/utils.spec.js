import {
  generateOnAnswerClick,
  hasDuplicates,
  hasErrors,
  normalizeProps,
  submitAnswers,
} from "./utils";

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
  it("onAnswerClick should remove answer if already selected", () => {
    const props = {
      selectedAnswers: ["answer1", "answer2"],
      setSelectedAnswers: function (answers) {
        props.selectedAnswers = answers;
      },
    };
    const onAnswerClick = generateOnAnswerClick(props);
    onAnswerClick("answer2", false);
    expect(props.selectedAnswers.includes("answer2")).toBe(false);
  });
  it("onAnswerClick should remove all except one answer if multipleAnswers is false", () => {
    const props = {
      selectedAnswers: ["answer1", "answer2"],
      setSelectedAnswers: function (answers) {
        props.selectedAnswers = answers;
      },
    };
    const onAnswerClick = generateOnAnswerClick(props);
    onAnswerClick("answer4", false);
    expect(props.selectedAnswers.length).toBe(1);
  });
  it("onAnswerClick should add an answer if multipleAnswers is true", () => {
    const props = {
      selectedAnswers: ["answer1", "answer2"],
      setSelectedAnswers: function (answers) {
        props.selectedAnswers = answers;
      },
    };
    const onAnswerClick = generateOnAnswerClick(props);
    onAnswerClick("answer4", true);
    expect(props.selectedAnswers.length).toBe(3);
  });
  it("should increase count for provided answers", () => {
    const props = {
      questionId: "mockId",
      answers: ["answer1", "answer2", "answerX"],
    };
    const initialCount = {
      answer1: 3,
      answer2: 1,
      answer3: 7,
    };
    localStorage.setItem(props.questionId, JSON.stringify(initialCount));
    submitAnswers(props);
    const newCount = JSON.parse(localStorage.getItem(props.questionId));
    expect(newCount.answer1).toBe(4);
    expect(newCount.answer2).toBe(2);
    expect(newCount.answer3).toBe(7);
    expect(newCount.answerX).toBe(1);
    localStorage.removeItem(props.questionId);
  });
});
