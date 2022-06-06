import React from "react";

const Answer = ({
  count,
  multipleAnswers,
  onClick,
  percentage,
  selected,
  text,
  voted,
}) => {
  return (
    <div
      className={`Answer${selected ? " selected" : ""}`}
      onClick={() => onClick(text, multipleAnswers)}
    >
      <div className="answerRow">
        {voted ? null : (
          <input
            readOnly
            type={multipleAnswers ? "checkbox" : "radio"}
            checked={selected}
          />
        )}
        <span>{text}</span>
      </div>

      <div
        className={`percentage`}
        style={{
          width: `${voted ? `${percentage}%` : 0}`,
          borderWidth: voted ? 1 : 0,
        }}
      ></div>

      {!voted ? null : <span className="count">{count}</span>}
    </div>
  );
};

export default Answer;
