import React, {useState, useEffect}  from 'react';
import "./App.css"
import {geographyAQuestionsArr, biologyQuestionsArr, randomQuestionsArr} from './data/questionData.js'
import * as Questions from './data/questionData.js'
import Question from './components/Question'
import Start from './components/StartPage'
import Result from './components/Result'
import { BrowserRouter, Switch, Route, Redirect, StaticRouter } from 'react-router-dom';



const App = ()  =>{
  const [maxPoints, setMaxPoints]=useState('')
  const [totalPoint, setTotalPoint] = useState(0)
  const [data, setData] = useState([])

  const allTestTitles= Object.keys(Questions)
  const allTestsArr=Object.entries(Questions)
  // console.log(allTestsArr)

  // useEffect(()=> {
  //   // console.log(data)
  // },[data])

  const TestPage = ({ match }) => {
    console.log(match)
    allTestsArr.find(test => { 
      if(test[0] === match.params.pageTitle)
      setData(test[1])
    })

      return(
      <div>
        <h1> pageTitle: {match.params.pageTitle}</h1>
        <Question 
        data={data} 
        setMaxPoints={setMaxPoints} 
        setTotalPoint={setTotalPoint}  />
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
        < Result totalPoint={totalPoint} maxPoints={maxPoints}/>
      </Route> 

      <Route path="/:pageTitle" component={TestPage}/>


      {/* <Route path="/test/geographyAQuestionsArr">
        <Question data={geographyAQuestionsArr} setMaxPoints={setMaxPoints} setTotalPoint={setTotalPoint} />
      </Route>

      <Route path="/test/biologyQuestionsArr">
        <Question data={biologyQuestionsArr} setMaxPoints={setMaxPoints} setTotalPoint={setTotalPoint}  />
      </Route>

      <Route path="/test/randomQuestionsArr">
        <Question data={randomQuestionsArr} setMaxPoints={setMaxPoints} setTotalPoint={setTotalPoint} />
      </Route> */}

    </Switch>
  </BrowserRouter>

  );
}

 
export default App;
