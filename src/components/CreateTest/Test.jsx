import React from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';



let newArrTest = JSON.parse(localStorage.getItem('new')) || []

const mapStateToProps = (store) => {
  return {
    newQuestion: store.newQuestion,
    questionArrTitle: store.questionArrTitle,
    incorrectAnswer: store.incorrectAnswer,
    correctAnswer: store.correctAnswer,
  }
}

const matchDispatchToProps =(dispatch) =>{
    return{
      getTitle: (title) => {
        dispatch({ type: 'GET_TITLE', payload: title})
      },
      getType: (type) => {
        dispatch({ type: 'GET_TYPE', payload: type})
      },
      getQuestionArrTitle: (type) => {
        dispatch({ type: 'GET_QUESTION_ARR_TITLE', payload: type})
      },
      getCorrectAnswer: (answer) => {
        dispatch({ type: 'GET_CORRECT_ANSWER', payload: answer})
      },
      getIncorrectAnswer: (answer) => {
        dispatch({ type: 'GET_INCORRECT_ANSWER', payload: answer})
      },
      getPoint: (point) => {
        dispatch({ type: 'GET_POINT', payload: point})
      },
  }
}

const Test = ({correctAnswer, incorrectAnswer, newQuestion, getCorrectAnswer, getIncorrectAnswer, getPoint, questionArrTitle, getTitle, getType, getQuestionArrTitle, allTestTitles, setNewQuestions})  =>{
  let questionArrr=[]

  const addQuestion =()=>{
    newQuestion.answer.push(incorrectAnswer, correctAnswer)
    questionArrr.push(questionArrTitle, newQuestion)
    newArrTest.push(questionArrr)
    localStorage.setItem('new', JSON.stringify(newArrTest))
    setNewQuestions(JSON.parse(localStorage.getItem('new')) || [])
    newQuestion.answer=[]
  }

  return (
    <div className='newTest'>
        <h1> Создайте свой вопрос </h1>
        <div className='test-item'>
            <label htmlFor=""> выберите название теста
                <select onChange={(e)=> getQuestionArrTitle(e.target.value)}>
                    <option value="0"> выберите тест </option>
                    {allTestTitles.map(name => {
                        return(
                            <option key={name} value={name}>{name}</option>
                        )
                    })}
                </select>
            </label>
        </div>
        <div>
          <label htmlFor="createQuestion"> Введите вопрос
              <input onChange={(e)=> getTitle(e.target.value)} type="text" id="createQuestion"/>
          </label>
        </div>
        <div>
          <h3> Выберите тип ответа: </h3>
          <select id="typeOfQuestion" onChange={(e)=> getType(e.target.value)}>
            <option value="Select"> Выпадающий список </option>
            <option value="Text">Текстовое поле</option>
            <option value="Radio">Кнопка с одним правильным ответом </option>
            <option value="Checkbox">Кнопка с множеством правильных ответов </option>
          </select>
        </div>
        <div className='test-item'>
          <label htmlFor=""> правильный ответ: 
          <input onChange={(e)=> getCorrectAnswer(e.target.value)} type="text"/></label>
        </div>
        <div className='test-item'>
          <label htmlFor=""> количество баллов: 
          <input onChange={(e)=> getPoint(e.target.value)} type="number"/></label>
        </div>
        {newQuestion.type !== "Text" && 
            <div className='test-item'>
              <label htmlFor=""> неправильный ответ: 
              <input onChange={(e)=> getIncorrectAnswer(e.target.value)} type="text"/></label>
            </div>
        }
        <Link onClick={addQuestion} className="btn btn-primary" to='/'> вопрос готов </Link>
    </div>
  );
}

 
export default connect(mapStateToProps, matchDispatchToProps)(Test);