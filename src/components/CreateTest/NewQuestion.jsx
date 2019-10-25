import React from 'react';


const NewQuestion = ({ newQuestion, setNewQuestion})  =>{ 

    const typeOfAnswers =(type)=> {
        setNewQuestion({...newQuestion, type:type})
    }

    const questionTitle =(title) => {
        setNewQuestion({...newQuestion, title:title})
    }


    return (
        <div className="test-item">
            <h1> Создание вопроса  </h1>
            <div>
                <label htmlFor="createQuestion"> Введите вопрос
                    <input  onChange={(e) => questionTitle(e.target.value)} type="text" id="createQuestion"/>
                </label>
            </div>
            <div>
                <h3> Выберите тип ответа: </h3>
                <select id="typeOfQuestion" onChange={(e)=> typeOfAnswers(e.target.value)}>
                    <option value="Select"> Выпадающий список </option>
                    <option value="Text">Текстовое поле</option>
                    <option value="Radio">Кнопка с одним правильным ответом </option>
                    <option value="Checkbox">Кнопка с множеством правильных ответов </option>
                </select>
            </div>
        </div>
    );
}
 
export default NewQuestion;
