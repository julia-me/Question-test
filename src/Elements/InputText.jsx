import React from 'react';

const InputText = ({oneQuestion, number, setAnsver}) =>{

  const answerValidation =(value)=> {
    (value.toLowerCase() === oneQuestion.answer[0].title.toString().toLowerCase())
              ? setAnsver(1): setAnsver(0)
    console.log(value.toLowerCase())
    console.log(oneQuestion.answer[0])
  }

  return (
    <div className='card' key={oneQuestion.title}>
      <div className='card-body'>
        <h1> {number+1}. {oneQuestion.title} ?</h1>
        {oneQuestion.url && <img src={oneQuestion.url} alt="oneQuestion.title"/>}
        <input onChange={(e)=> answerValidation(e.target.value) } key={oneQuestion.answer[0].title} type="text" placeholder="введите ответ" />
        {/* {oneQuestion.answer.map(elem => {
        return <input onChange={(e)=> answerValidation(e.target.value) } key={elem.title} type="text" placeholder="введите ответ" />
        })} */}
      </div>
    </div>
  );
}

 
export default InputText;

// const InputText = ({oneQuestion, number, setAnsver}) =>{

//   const result =(userAnswer) => {
//     oneQuestion.answer.map( oneAnsw => {
//       if(userAnswer.toUpperCase() === oneAnsw.title.toUpperCase()){
//          return setAnsver(oneAnsw.point)
//       } 
//       else{
//         return setAnsver(0)
//       }
//     });
//   }

//   return (
//     <div className='card' key={oneQuestion.title}>
//       <div className='card-body'>
//         <h1> {number+1}. {oneQuestion.title} ?</h1>
//         {oneQuestion.url && <img src={oneQuestion.url} alt="oneQuestion.title"/>}
//         {oneQuestion.answer.map(elem => {
//           return <input onChange={(e)=> result(e.target.value) } key={elem.title} type="text" placeholder="введите ответ" />
//         })}
//       </div>
//     </div>
//   );
// }