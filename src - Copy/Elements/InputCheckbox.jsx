import React, {useState, useEffect} from 'react';

const InputCheckbox = ({oneQuestion, number, setAnsver}) =>{

  const [allPoints, setAllPoints]= useState(0.0)
  const [decorClass, setDecorClass]= useState(new Array(oneQuestion.answer.length))

  useEffect(()=> {
    if(allPoints>=0){
      setAnsver(allPoints)
    }
  },[allPoints]);


  const result = (e) => {
    const indexOfAnswersArr = e.target.value
    const answer = oneQuestion.answer[indexOfAnswersArr];
    let arr = [...decorClass];
    if(e.target.checked){
      const countpoints = allPoints + answer.point;
      setAllPoints(countpoints) 
      arr[indexOfAnswersArr] = 'chosen';
      setDecorClass(arr);
    }
    else{
      const countpoints= allPoints-answer.point ;
      setAllPoints(countpoints) 
      arr[indexOfAnswersArr] = '';
      setDecorClass(arr);
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
                <label className={decorClass[index]}   htmlFor={number+ elem.title}> {elem.title}   
                <input onChange={(e)=> result(e)} value={index} name={number} id={number+elem.title} type="checkbox" /> 
                </label>
            </div>
          )
        })}
      </div>
    </div>
  );
}

 
export default InputCheckbox;