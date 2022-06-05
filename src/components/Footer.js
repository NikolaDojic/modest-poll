import React from "react";
import { submitAnswers } from "../utils";

const Footer = ({ selectedAnswers, showResults, questionId, voted }) => {
  return (
    <div className="Footer">
      <button
        disabled={!selectedAnswers.length}
        onClick={() => {
          submitAnswers({ questionId, answers: selectedAnswers });
          voted();
        }}
      >
        Submit
      </button>
      {}
    </div>
  );
};

export default Footer;
