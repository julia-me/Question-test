import React from "react";

const InputText = ({ oneQuestion, number, setAnsver }) => {
  const answerValidation = value => {
    value.toLowerCase() === oneQuestion.answer[0].title.toString().toLowerCase()
      ? setAnsver(1)
      : setAnsver(0);
  };

  return (
    <div className="card" key={oneQuestion.title}>
      <div className="card-body">
        <h1>
          {number + 1}. {oneQuestion.title} ?
        </h1>
        {oneQuestion.url && (
          <img src={oneQuestion.url} alt="oneQuestion.title" />
        )}
        <input
          onChange={e => answerValidation(e.target.value)}
          key={oneQuestion.answer[0].title}
          type="text"
          placeholder="введите ответ"
        />
      </div>
    </div>
  );
};

export default InputText;
