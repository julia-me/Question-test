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

 
export default Start;
