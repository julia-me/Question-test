import React  from 'react';


const TimeOver = ({onClick})  =>{

  return (
    <div className="message">
      <div className='message-content'>
            <h1>Время на тест вышло </h1>
            <button  onClick={(e)=> onClick(e)} className="btn btn-primary"> посмотреть результат </button>
      </div>
    </div>
  );
}

 
export default TimeOver;
