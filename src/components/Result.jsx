import React, {useState, useEffect} from 'react';

const Result = ({res, data, setResultIsActive, setShowTimer, correctAnswers})  =>{
    const [totalPoints, setTotalPoints]=useState(0)
    let totalPoint = 0

    // useEffect(()=> {
    //     fotalQuestionPoints()
    //     setTotalPoints(totalPoint)
        
    // },[])

    // const fotalQuestionPoints = () =>{
    //     data.forEach(oneQuestion => {
    //         oneQuestion.answer.forEach(correctAnswer => {
    //             if(correctAnswer.isTrue){
    //                 totalPoint +=correctAnswer.point
    //             }
    //         })
    //     })
    // }

    // const goToTest= () => {
    //     setShowTimer(true);
    //     setResultIsActive(false)
    // }
 
    return (
        <div className="result">
            <h1> Вы набрали  <span> {res} </span> баллов/  Из  <span> {totalPoints} </span> </h1>
            <h1> Процент успешности прохождения теста  <span> {Math.floor(res/totalPoints*100)} % </span> </h1>
            {/* <button onClick={(e)=> goToTest()} className="btn btn-primary"> Пройти тест еще раз </button> */}
        </div>
    );
}

 
export default Result;
