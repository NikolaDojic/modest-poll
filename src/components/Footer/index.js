import React from "react";
import { submitAnswers } from "../../utils";
import "./Footer.css";

const Footer = ({ selectedAnswers, questionId, voted, setVoted }) => {
  return (
    <div className="Footer">
      {!voted ? (
        <button
          disabled={!selectedAnswers.length}
          onClick={() => {
            submitAnswers({ questionId, answers: selectedAnswers });
            setVoted(true);
          }}
        >
          Submit
        </button>
      ) : (
        <div className="thanksMessage">Thanks for voting! </div>
      )}
    </div>
  );
};

export default Footer;
