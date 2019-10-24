import React, {useState} from 'react';

const initialAnswers = (answers) => {
  return answers.map( answer => {
    return {...answer, isChecked:false}
  })
}

const InputCheckbox = ({oneQuestion, number, setAnsver}) =>{
  const [arrOfAnswers, setArrOfAnswers]= useState(initialAnswers(oneQuestion.answer))


  const checkFunction = (e, index) => {
    const newArr=[...arrOfAnswers];
    newArr[index].isChecked=e.target.checked;

    let resultOfRight = newArr
                  .filter(elem =>elem.isChecked)
                  .map(el=> el.point)
                  resultOfRight = resultOfRight.length ? resultOfRight.reduce((a,b)=> a+b) : 0

    let resultisMissed = newArr
                  .filter(elem =>elem.isChecked && !elem.point)
                  .map(el=> el.point)
                  resultisMissed = resultisMissed.length  
    if(resultOfRight - resultisMissed >0){
      setAnsver(resultOfRight - resultisMissed)
    } 
    else{
      setAnsver(0)
    }
  }

  return (
    <div className='card'>
      <div className='card-body'>
        <h1> {number+ 1}. {oneQuestion.title} ?</h1>
        {oneQuestion.url && <img src={oneQuestion.url} alt="oneQuestion.title"/>}
        {oneQuestion.answer.map( (elem, index) => {
          return(
            <div key={elem.title} >
                <label  htmlFor={number+ elem.title}> {elem.title}   
                <input 
                onChange={(e)=> checkFunction(e, index)} 
                value={index} 
                name={number} 
                id={number+elem.title} 
                type="checkbox" /> 
                </label>
            </div>
          )
        })}
      </div>
    </div>
  );
}

 
export default InputCheckbox;
