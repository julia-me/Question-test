import React, { useState } from "react";
import { Link } from "react-router-dom";
import NewQuestion from "./NewQuestion";
import CorrectAnswer from "./CorrectAnswer";
import InCorrectAnswer from "./InCorrectAnswer";

let newArrTest = JSON.parse(localStorage.getItem("new")) || [];

const CreateTest = ({ allTestTitles, setNewQuestions }) => {
  const [correctAnswerInfo, setCorrectAnswerInfo] = useState({
    title: "",
    isTrue: true,
    point: 1
  });
  const [inCorrectAnswerInfo, setInCorrectAnswerInfo] = useState();
  const [newTestName, setNewTestName] = useState("");
  const [newQuestion, setNewQuestion] = useState({
    type: "Select",
    answer: []
  });

  const createTest = e => {
    setNewTestName(e.target.value);
  };

  const testIsReadyHendel = e => {
    let incorrectArr = [];
    if (
      newTestName &&
      correctAnswerInfo.title &&
      correctAnswerInfo.point &&
      newQuestion.title
    ) {
      if (inCorrectAnswerInfo) {
        let arr = inCorrectAnswerInfo.split(", ");
        arr.map(answer => {
          return incorrectArr.push({
            title: answer,
            isTrue: false,
            point: 0
          });
        });
        incorrectArr.map(el => {
          return newQuestion.answer.push(el);
        });
      }
      newQuestion.answer.push(correctAnswerInfo);
      let newTest = [newTestName, newQuestion];
      newArrTest.push(newTest);
      localStorage.setItem("new", JSON.stringify(newArrTest));
      setNewQuestions(JSON.parse(localStorage.getItem("new")) || []);
    }
  };

  return (
    <div className="result">
      <h1> Добавление вопроса к тестам </h1>
      <div className="newTest">
        <div className="test-item">
          <label htmlFor="">
            выберите название теста
            <select onChange={e => createTest(e)}>
              <option value="0"> выберите тест </option>
              {allTestTitles.map(name => {
                return (
                  <option key={name} value={name}>
                    {name}
                  </option>
                );
              })}
            </select>
          </label>
        </div>
        <NewQuestion
          newQuestion={newQuestion}
          setNewQuestion={setNewQuestion}
        />
        <CorrectAnswer
          setCorrectAnswerInfo={setCorrectAnswerInfo}
          correctAnswerInfo={correctAnswerInfo}
          newQuestion={newQuestion}
          setNewQuestion={setNewQuestion}
        />
        {newQuestion.type !== "Text" && (
          <InCorrectAnswer
            inCorrectAnswerInfo={inCorrectAnswerInfo}
            setInCorrectAnswerInfo={setInCorrectAnswerInfo}
          />
        )}
      </div>
      <Link
        onClick={e => testIsReadyHendel(e)}
        className="btn btn-primary"
        to="/start"
      >
        вопрос готов
      </Link>
    </div>
  );
};

export default CreateTest;
