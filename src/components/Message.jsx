import React  from 'react';


const Message = ({semtMessageWindow, data, timeOntext, setShowTimer})  =>{

  const showWind =() => {
    semtMessageWindow(false) 
    setShowTimer(true)
  }

  return (
    <div className="message">
      <div className='message-content'>
            <h1> На прохождение теста у вас есть  <span> {timeOntext} мин. </span> </h1>
            <h2> Количество вопросов в тесте: {data.length} </h2>
            <button onClick={(e) =>  showWind()} className="btn btn-primary"> я готов начать тест </button>
      </div>
    </div>
  );
}

 
export default Message;
