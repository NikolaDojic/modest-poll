export const generateOnAnswerClick =
  ({ multipleAnswers, setSelectedAnswers, selectedAnswers }) =>
  (answer) => {
    if (selectedAnswers.includes(answer)) {
      setSelectedAnswers(
        selectedAnswers.filter((selectedAnswer) => selectedAnswer !== answer)
      );
    } else {
      const newSelectedAnsers = multipleAnswers
        ? [...selectedAnswers, answer]
        : [answer];
      setSelectedAnswers(newSelectedAnsers);
    }
  };

export const hasErrors = ({ questionId, answers, question }) => {
  if (!questionId) {
    console.error(
      new Error(`Cannot render poll widget without the 'data-question-id'`)
    );
    return true;
  }
  if (!question) {
    console.error(
      new Error(`Cannot render poll widget without the 'data-question'`)
    );
    return true;
  }
  if (!answers) {
    console.error(
      new Error(`Cannot render poll widget without the 'data-answers'`)
    );
    return true;
  }
  if (document.querySelectorAll(`#${questionId}`).length > 1) {
    console.error(
      new Error(`Poll with data-question-id: ${questionId} already exists`)
    );
    return true;
  }
  return false;
};

export const submitAnswers = ({ answers, questionId }) => {
  console.log(answers);
  const pollResults = JSON.parse(localStorage.getItem("questionId")) || {};
  answers.forEach((answer) => {
    if (answer in pollResults) {
      pollResults[answer] += 1;
    } else {
      pollResults[answer] = 1;
    }
  });
  localStorage.setItem(questionId, JSON.stringify(pollResults));
};

export const getAnswers = (questionId) =>
  JSON.parse(localStorage.getItem(questionId));

export const SHOW_RESULTS = {
  ALWAYS: "always",
  AFTER_VOTING: "afterVoting",
  NEVER: "never",
};
