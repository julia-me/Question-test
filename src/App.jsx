import React, {useState}  from 'react';
import "./App.css"
// import {geographyAQuestionsArr, biologyQuestionsArr, randomQuestionsArr} from './data/questionData.js'
import * as Questions from './data/questionData.js'
import Question from './components/Question'
import Start from './components/StartPage'
import Result from './components/Result'
import Timer from './components/Timer'

import { BrowserRouter, Switch, Route, Redirect, StaticRouter } from 'react-router-dom';



const App = ()  =>{
  const [maxPoints, setMaxPoints]=useState('')
  // const [totalPoint, setTotalPoint] = useState(0)
  const [data, setData] = useState([])
  const allTestTitles= Object.keys(Questions)
  const allTestsArr=Object.entries(Questions)


  const TestPage = ({ match }) => {
    allTestsArr.find(test => { 
      if(test[0] === match.params.pageTitle)
      setData(test[1])
  })

      return(
      <div className="App">
        <h1> Название теста: {match.params.pageTitle}</h1>
        <Timer/>
        <Question 
        data={data} 
        setMaxPoints={setMaxPoints} 
        />
      </div>
      )

  }

  return (
    <BrowserRouter>
    <Switch>

      <Route exact path="/">
        <Redirect to="/start" />
      </Route>

      <Route path="/start">
        <Start allTestTitles={allTestTitles}/>
      </Route>

      <Route path="/result">
        < Result 
        // totalPoint={totalPoint} 
        maxPoints={maxPoints}/>
      </Route> 

      <Route path="/:pageTitle" component={TestPage}/>

    </Switch>
  </BrowserRouter>

  );
}

 
export default App;
