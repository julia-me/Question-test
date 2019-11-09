import React from 'react';

const InCorrectAnswer = ({inCorrectAnswerInfo, setInCorrectAnswerInfo})  =>{
    const inCorrectAnswer=(answer)=> {
        setInCorrectAnswerInfo(answer)
    }

    return (
        <div className="test-item">
            <label htmlFor="incorrect">
                Введите неправильные варианты ответа через запятую и пробел: 
                <input onChange={(e)=> inCorrectAnswer(e.target.value)} type="text" id='incorrect'/>
            </label>
        </div>
    );
}
 
export default InCorrectAnswer;
