import React from "react";

const Answer = ({ text, onClick, selected }) => {
  return (
    <div className={`Answer${selected ? " selected": ""}`} onClick={() => onClick(text)}>
      {text}
    </div>
  );
};

export default Answer;
