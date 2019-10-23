import React from 'react';
import { Link } from 'react-router-dom';


const Result = ({totalPoint, maxPoints})  =>{
    console.log(maxPoints)
 
    return (
        <div className="result">
            <h1> Вы набрали  <span> {totalPoint} </span> баллов/  Из  <span> {maxPoints} </span> </h1>
            <h1> Процент успешности прохождения теста  <span> {Math.floor(totalPoint/maxPoints*100)} % </span> </h1>
            <Link className="btn btn-primary" to='/start'> Пройти еще тесты </Link>
        </div>
    );
}
 
export default Result;
