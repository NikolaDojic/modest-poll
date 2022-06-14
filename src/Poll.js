import "./Poll.css";

import React, { useState } from "react";

import { generateOnAnswerClick, hasErrors } from "./utils";
import Answers from "./components/Answers";
import Footer from "./components/Footer";

const Poll = ({ questionId, question, answers, multipleAnswers = false }) => {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [voted, setVoted] = useState(false);

  return hasErrors({ questionId, question, answers }) ? null : (
    <div id={questionId} className="Poll">
      <h2>{question}</h2>
      <Answers
        answers={answers}
        selectedAnswers={selectedAnswers}
        onAnswerClick={generateOnAnswerClick({
          setSelectedAnswers,
          selectedAnswers,
        })}
        multipleAnswers={multipleAnswers}
        questionId={questionId}
        voted={voted}
      ></Answers>
      <Footer
        selectedAnswers={selectedAnswers}
        questionId={questionId}
        setVoted={setVoted}
        voted={voted}
        multipleAnswers={multipleAnswers}
      ></Footer>
    </div>
  );
};

export default Poll;
