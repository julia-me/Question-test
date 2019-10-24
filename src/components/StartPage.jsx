import React from 'react';
import { Link } from 'react-router-dom';


const Start = ({allTestTitles})  =>{

  return (
    <div className="App">
      <div className="start-page">
        <h1> Выберите тест, который хотите пройти </h1>
        <div className='types-of-test'>
          {allTestTitles.map((title, index)=> {
            return (
              <Link to={{pathname: `/${title}`}} className="btn btn-primary" key={title+index}>
              Тест по  {title}
            </Link>
            )
          })}
        </div>
      </div>
    </div>
  );
}

// let allTestsArr= [
// ["randomQuestionsArr", ['randomQuestionsArr1', 'randomQuestionsArr2']],
// ["biologyQuestionsArr", ['biologyQuestionsArr3', 'biologyQuestionsArr1', 'biologyQuestionsArr2']],
// ["geographyAQuestionsArr", ['geographyAQuestionsArr2', 'geographyAQuestionsArr4']],
// ]

//allTestsArr.find(el => {
// 	return el[0] = 'biologyQuestionsArr'
// })

// allTestsArr.find(test => { 
//   console.log(test[0] === 'biologyQuestionsArr') 
//   return test[0] === 'biologyQuestionsArr'
// })
 
export default Start;
