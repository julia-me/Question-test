import React from 'react';

const CorrectAnswer = ({setCorrectAnswerInfo, correctAnswerInfo, newQuestion, setNewQuestion})  =>{

    const correctAnswer=(answer)=> {
        setCorrectAnswerInfo({...correctAnswerInfo, title:answer})
    }
    const points=(point)=> {
        if(point){
            setCorrectAnswerInfo({...correctAnswerInfo, point: +point})
        }
        if(!point){
            setCorrectAnswerInfo({...correctAnswerInfo, point:100})
        }
    }

    return (
        <div className="test-item">
            <label htmlFor="correct">
                Введите правильный вариант ответа
                <input onChange={(e)=> correctAnswer(e.target.value)} type="text" id='correct'/>
            </label>
            <label htmlFor="point">
                Введите количество баллов
                <input onChange={(e)=> points(e.target.value)} type="number" id='point'/>
            </label>
        </div>
    );
}
 
export default CorrectAnswer;

// answer: [{
//     title:'',
//     isTrue:'',
//     point:'',
// }]