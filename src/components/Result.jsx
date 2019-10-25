import React from 'react';
import { Link } from 'react-router-dom';


const Result = ({maxPoints})  =>{
    let totalPoint=JSON.parse(localStorage.getItem('answ'))
    let pers = Math.floor(totalPoint/maxPoints*100) || 0
    localStorage.setItem('answ', JSON.stringify(0))  

 
    return (
        <div className="result">
            <h1> Вы набрали  <span> {totalPoint} </span> баллов  { maxPoints ? `/  из ${maxPoints} ` : ''} </h1>
            <h1> Процент успешности прохождения теста  <span> {pers} % </span> </h1>
            <Link className="btn btn-primary" to='/start'> Пройти еще тесты </Link>
        </div>
    );
}
 
export default Result;
