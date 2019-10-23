import React, {useState}  from 'react';
import "./App.css"
import questopnInfoArr from './data/questionData.js'
import Question from './components/Question'
import Timer from './Elements/Timer.jsx' 



const App = ()  =>{
  const timeOntext = 1.5;
  const [testIsOver, setTestIsOver] = useState(false);
  const [showTimer, setShowTimer] = useState(false);
  const [messageWindow, semtMessageWindow]=useState(true)
  // const [testIsOver, setTestIsOver]=useState(false)


  return (
    <div className="App">
    {showTimer && <Timer 
      setTestIsOver={setTestIsOver}
      timeOntext={timeOntext}
      setShowTimer={setShowTimer}/>}
      {/* <button onClick={(e)=> setShowTimer(true)}> showTimer </button> */}
      <Question data={questopnInfoArr} 
      messageWindow={messageWindow} semtMessageWindow={semtMessageWindow} 
      setShowTimer={setShowTimer}
      testIsOver={testIsOver}
      setTestIsOver={setTestIsOver}
      timeOntext={timeOntext}
      />
    </div>
  );
}

 
export default App;
