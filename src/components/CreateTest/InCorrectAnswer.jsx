import React from 'react';

const InCorrectAnswer = ({inCorrectAnswerInfo, setInCorrectAnswerInfo})  =>{

    const inCorrectAnswer=(answer)=> {
        setInCorrectAnswerInfo({...inCorrectAnswerInfo, title:answer})
    }

    return (
        <div className="test-item">
            <label htmlFor="incorrect">
                Введите неправильный вариант ответа
                <input onChange={(e)=> inCorrectAnswer(e.target.value)} type="text" id='incorrect'/>
            </label>
        </div>
    );
}
 
export default InCorrectAnswer;
