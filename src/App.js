import "./App.css";

import React, { useEffect, useState, useRef } from "react";

import { generateOnAnswerClick, hasErrors } from "./utils";
import Answer from "./components/Answer";
import Footer from "./components/Footer";

const Poll = ({
  questionId,
  question,
  answers,
  delimiter = ";",
  multipleAnswers = false,
  showResults = "always",
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [answersArray, setAnswersArray] = useState([]);
  const votedRef = useRef(false);
  const [voted, setVoted] = useState(votedRef.current);

  useEffect(() => {
    if (voted) {
      votedRef.current = true;
    }
  }, [voted]);
  useEffect(() => {
    answers &&
      setAnswersArray(answers.split(delimiter).map((answer) => answer.trim()));
  }, [answers, delimiter]);
  return hasErrors({ questionId, question, answers }) ? null : (
    <div id={questionId} className="ModestPoll">
      <h2>{question}</h2>
      <div className="answersWrapper">
        {answersArray.map((answer) => (
          <Answer
            key={answer}
            text={answer}
            selected={selectedAnswers.includes(answer)}
            onClick={generateOnAnswerClick({
              multipleAnswers,
              setSelectedAnswers,
              selectedAnswers,
            })}
          ></Answer>
        ))}
      </div>
      <Footer
        selectedAnswers={selectedAnswers}
        questionId={questionId}
        showResults={showResults}
        voted={() => setVoted(true)}
      ></Footer>
      {voted ? "asdasdasdas" : "123456"}
    </div>
  );
};

export default Poll;
