import "./Poll.css";

import React, { useEffect, useState, useRef } from "react";

import { generateOnAnswerClick, hasErrors } from "./utils";
import Answers from "./components/Answers";
import Footer from "./components/Footer";

const Poll = ({ questionId, question, answers, multipleAnswers = false }) => {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const votedRef = useRef(false);
  //we use ref value in the state variable to be able to respond on the value change, and be sure that value persist throughout re-renders
  const [voted, setVoted] = useState(votedRef.current);

  useEffect(() => {
    if (voted) {
      votedRef.current = true;
    }
  }, [voted]);

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
