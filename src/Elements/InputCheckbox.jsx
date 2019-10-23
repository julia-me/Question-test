import React, {useState, useEffect} from 'react';

const initialAnswers = (answers) => {
  return answers.map( answer => {
    return {...answer, isChecked:false}
  })
}

const InputCheckbox = ({oneQuestion, number, setAnsver}) =>{
  const [arrOfAnswers, setArrOfAnswers]= useState(initialAnswers(oneQuestion.answer))

  useEffect(()=> {
    // console.log(arrOfAnswers)
  })

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
                  resultisMissed = resultisMissed.length/2  
    // if(newArr[index].isTrue){
    //   result = result.length ? result.reduce((a,b)=> a+b) :0
    //   setAnsver(result)
    // }
    // else{
    //   result = result.length ? result.reduce((a,b)=> a -b) :0
    //   setAnsver(-result)
    // } 
    setAnsver(resultOfRight - resultisMissed)
    // console.log(result)
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

// const InputCheckbox = ({oneQuestion, number, setAnsver}) =>{

//   const [allPoints, setAllPoints]= useState(0.0)
//   const [decorClass, setDecorClass]= useState(new Array(oneQuestion.answer.length))

//   useEffect(()=> {
//     if(allPoints>=0){
//       setAnsver(allPoints)
//     }
//   },[allPoints]);


//   const result = (e) => {
//     const indexOfAnswersArr = e.target.value
//     const answer = oneQuestion.answer[indexOfAnswersArr];
//     let arr = [...decorClass];
//     if(e.target.checked){
//       const countpoints = allPoints + answer.point;
//       setAllPoints(countpoints) 
//       arr[indexOfAnswersArr] = 'chosen';
//       setDecorClass(arr);
//     }
//     else{
//       const countpoints= allPoints-answer.point ;
//       setAllPoints(countpoints) 
//       arr[indexOfAnswersArr] = '';
//       setDecorClass(arr);
//     }
//   }

//   return (
//     <div className='card'>
//       <div className='card-body'>
//         <h1> {number+ 1}. {oneQuestion.title} ?</h1>
//         {oneQuestion.url && <img src={oneQuestion.url} alt="oneQuestion.title"/>}
//         {oneQuestion.answer.map( (elem, index) => {
//           return(
//             <div key={elem.title} >
//                 <label className={decorClass[index]}   htmlFor={number+ elem.title}> {elem.title}   
//                 <input onChange={(e)=> result(e)} value={index} name={number} id={number+elem.title} type="checkbox" /> 
//                 </label>
//             </div>
//           )
//         })}
//       </div>
//     </div>
//   );
// }