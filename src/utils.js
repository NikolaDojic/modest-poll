export const generateOnAnswerClick =
  ({ setSelectedAnswers, selectedAnswers }) =>
  (answer, multipleAnswers) => {
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
  if (!answers?.length) {
    console.error(
      new Error(`Cannot render poll widget without the 'data-answers'`)
    );
    return true;
  }
  return false;
};

export const submitAnswers = ({ answers, questionId }) => {
  const pollResults = JSON.parse(localStorage.getItem(questionId)) || {};
  answers.forEach((answer) => {
    if (answer in pollResults) {
      pollResults[answer] += 1;
    } else {
      pollResults[answer] = 1;
    }
  });
  localStorage.setItem(questionId, JSON.stringify(pollResults));
};

export const getResults = (questionId) =>
  JSON.parse(localStorage.getItem(questionId)) || {};

export const normalizeProps = ({
  answers,
  delimiter = ";",
  multipleAnswers = false,
  ...props
}) => {
  let multipleAnswersParsed;
  if (multipleAnswers === "true") {
    multipleAnswersParsed = true;
  } else {
    if (multipleAnswers && multipleAnswers !== "false") {
      console.error(
        `'data-multiple-answers' must be 'true' or 'false', value provided: '${multipleAnswers}'`
      );
      console.warn("falling back to 'false' for data-multiple-answers");
    }
    multipleAnswersParsed = false;
  }
  return {
    ...props,
    answers: answers.split(delimiter),
    multipleAnswers: Boolean(multipleAnswersParsed),
  };
};

export const hasDuplicates = (widgetContainers) => {
  const containers = [];
  widgetContainers.forEach((container) => containers.push(container));
  return containers.some(
    (container) =>
      containers.filter(
        (cnt) => cnt.dataset.questionId === container.dataset.questionId
      ).length > 1
  );
};

export const calculatePercentage = ({ questionId, answer }) => {
  const results = getResults(questionId);
  const sum = Object.keys(results).reduce((acc, key) => acc + results[key], 0);
  return (100 * results[answer]) / sum;
};
