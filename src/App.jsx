import React, {useState}  from 'react';
import "./App.css"
import {geographyAQuestionsArr, biologyQuestionsArr, randomQuestionsArr} from './data/questionData.js'
// import * as Questions from './data/questionData.js'
import Question from './components/Question'
import Start from './components/StartPage'
import Result from './components/Result'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';



const App = ()  =>{
  const [maxPoints, setMaxPoints]=useState('')
  const [totalPoint, setTotalPoint] = useState(0)

  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Redirect to="/start" />
      </Route>
      <Route path="/start"><Start/></Route>
      <Route path="/test/geogr">
        <Question data={geographyAQuestionsArr} setMaxPoints={setMaxPoints} maxPoints={maxPoints} totalPoint={totalPoint} setTotalPoint={setTotalPoint} /></Route>
      <Route path="/test/biol">
        <Question data={biologyQuestionsArr} setMaxPoints={setMaxPoints} maxPoints={maxPoints} totalPoint={totalPoint} setTotalPoint={setTotalPoint}  /></Route>
      <Route path="/test/rand">
        <Question data={randomQuestionsArr} setMaxPoints={setMaxPoints} maxPoints={maxPoints} totalPoint={totalPoint} setTotalPoint={setTotalPoint} /></Route>
      <Route path="/result">
        < Result totalPoint={totalPoint} maxPoints={maxPoints}/></Route>
    </Switch>
  </BrowserRouter>

  );
}

 
export default App;
