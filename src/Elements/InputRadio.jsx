import React, { useState } from "react";

const InputRadio = ({ oneQuestion, number, setAnsver }) => {
  const [decorClass, setDecorClass] = useState(
    new Array(oneQuestion.answer.length)
  );

  const result = indexOfAnswersArr => {
    const answer = oneQuestion.answer[indexOfAnswersArr];
    setAnsver(answer.point);
    let arr = [...decorClass];
    for (let i = 0; i < decorClass.length; i++) {
      arr[i] = "";
    }
    arr[indexOfAnswersArr] = "chosen";
    setDecorClass(arr);
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
        {oneQuestion.answer.map((elem, index) => {
          return (
            <div key={elem.title}>
              <label
                className={decorClass[index]}
                htmlFor={number + elem.title}
              >
                {elem.title}
                <input
                  value={index}
                  onChange={e => result(e.target.value)}
                  name={number}
                  id={number + elem.title}
                  type="radio"
                />
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InputRadio;
