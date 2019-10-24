import React from 'react';
import { Link } from 'react-router-dom';


const Result = ({maxPoints})  =>{
    console.log(maxPoints)
    let totalPoint=JSON.parse(localStorage.getItem('answ'))
    localStorage.setItem('answ', JSON.stringify(0))  

 
    return (
        <div className="result">
            <h1> Вы набрали  <span> {totalPoint} </span> баллов/  Из  <span> {maxPoints} </span> </h1>
            <h1> Процент успешности прохождения теста  <span> {Math.floor(totalPoint/maxPoints*100)} % </span> </h1>
            <Link className="btn btn-primary" to='/start'> Пройти еще тесты </Link>
        </div>
    );
}
 
export default Result;
