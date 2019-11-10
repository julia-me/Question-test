import React, { useState, useEffect } from "react";
import InputText from "../Elements/InputText";
import InputRadio from "../Elements/InputRadio";
import InputCheckbox from "../Elements/InputCheckbox";
import Select from "../Elements/Select";
import { Link } from "react-router-dom";

const Question = props => {
  const { data, setMaxPoints } = props;
  const [answersModel, setAnswersModel] = useState(new Array(data.length));
  let totalPoint = 0;
  let resultPoints = 0;

  useEffect(() => {
    summ();
  }, [answersModel]);

  const setAnswer = index => {
    return pointerCount => {
      const indexOfElem = index;
      let arr = [...answersModel];
      arr[indexOfElem] = pointerCount;
      setAnswersModel(arr);
    };
  };

  const summ = () => {
    answersModel.forEach(point => {
      if (point) {
        resultPoints += point;
      }
    });
    localStorage.setItem("answ", JSON.stringify(resultPoints));
  };

  const totalQuestionPoints = () => {
    data.forEach(oneQuestion => {
      oneQuestion.answer.forEach(correctAnswer => {
        if (correctAnswer.isTrue) {
          totalPoint += correctAnswer.point;
        }
      });
    });
    setMaxPoints(totalPoint);
  };
  totalQuestionPoints();

  return (
    <div className="container">
      {
        <div className="question-test">
          {data.map((oneQuestion, index) => {
            switch (oneQuestion.type) {
              case "Text":
                return (
                  <InputText
                    key={index + oneQuestion.title}
                    setAnsver={setAnswer(index)}
                    oneQuestion={oneQuestion}
                    number={index}
                  />
                );

              case "Radio":
                return (
                  <InputRadio
                    key={index + oneQuestion.title}
                    setAnsver={setAnswer(index)}
                    oneQuestion={oneQuestion}
                    number={index}
                  />
                );

              case "Checkbox":
                return (
                  <InputCheckbox
                    key={index + oneQuestion.title}
                    setAnsver={setAnswer(index)}
                    oneQuestion={oneQuestion}
                    number={index}
                  />
                );

              case "Select":
                return (
                  <Select
                    key={index + oneQuestion.title}
                    setAnsver={setAnswer(index)}
                    oneQuestion={oneQuestion}
                    number={index}
                  />
                );

              default:
                return null;
            }
          })}
          <Link className="btn btn-primary" to="/result">
            Посмотреть результат
          </Link>
        </div>
      }
    </div>
  );
};

export default Question;
