import React  from 'react';
import Countdown from 'react-countdown-now';


const Timer = ({setTestIsOver, timeOntext, setShowTimer})  =>{
    const minutes = timeOntext
    let time = minutes * 60 * 1000;

    const Completionist = () => {
        return (
            <div>
                {console.log('try')}
                {setTestIsOver(true)}
                {setShowTimer(false)}
            </div>
        ) 
    };

  return (
    <div className="timer">
        <h1> До окончания теста осталось: </h1>
        <Countdown date={Date.now() + time} >
            <Completionist />
        </Countdown>
    </div>
  );
}

 
export default Timer;
