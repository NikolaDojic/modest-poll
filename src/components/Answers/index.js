import React from "react";
import { calculatePercentage, getResults } from "../../utils";

import Answer from "./Answer";
import "./Answers.css";

const Answers = ({
  answers,
  onAnswerClick,
  selectedAnswers,
  multipleAnswers,
  questionId,
  voted,
}) => {
  const results = getResults(questionId);
  return (
    <div className="Answers">
      {answers.map((answer) => {
        return (
          <Answer
            key={answer}
            text={answer}
            selected={selectedAnswers.includes(answer)}
            onClick={onAnswerClick}
            multipleAnswers={multipleAnswers}
            count={results?.[answer] || 0}
            percentage={calculatePercentage({ questionId, answer })}
            voted={voted}
          ></Answer>
        );
      })}
    </div>
  );
};

export default Answers;
