import React from "react";

const Select = ({ oneQuestion, number, setAnsver, answerForOption }) => {
  const result = indexOfAnswersArr => {
    const answer = oneQuestion.answer[indexOfAnswersArr];
    if (answer) {
      setAnsver(answer.point);
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h1>
          {number + 1}. {oneQuestion.title} ?
        </h1>
        {oneQuestion.url && (
          <img src={oneQuestion.url} alt="oneQuestion.title" />
        )}
        <select
          onChange={e => {
            result(e.target.value);
          }}
        >
          <option value="-1">выберите вариант ответа </option>
          {oneQuestion.answer.map((elem, index) => {
            return (
              <option key={elem.title} value={index}>
                {elem.title}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Select;
