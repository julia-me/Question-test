import React, {useState, useEffect}  from 'react';
import "./App.css"
import * as Questions from './data/questionData.js'
import Question from './components/Question'
import Start from './components/StartPage'
import Result from './components/Result'
import Timer from './components/Timer'
import CreateTest from './components/CreateTest/CreateTest'

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
localStorage.setItem('test', JSON.stringify([]))
const allTestsArr=Object.entries(Questions)
// let newQuestions = JSON.parse(localStorage.getItem('new')) || []

// allTestsArr.map(arr => {
//   newQuestions.map( quest => {
//     if(arr[0] === quest[0]){
//       arr[1].push(quest[1])
//     }
//   })
// })
// console.log('newQuestions', newQuestions)


const App = ()  =>{
  const [maxPoints, setMaxPoints]=useState('')
  const [usersTime, setUsersTime]= useState(1)
  const [data, setData] = useState([])
  const allTestTitles= Object.keys(Questions)

  const [newQuestions, setNewQuestions] = useState(JSON.parse(localStorage.getItem('new')) || [])

  console.log(allTestsArr)


  useEffect(()=> {
    allTestsArr.map(arr => {
      return newQuestions.map( quest => {
        if(arr[0] === quest[0]){
          return arr[1].push(quest[1])
        }
      })
    })
  }, [newQuestions])

  const TestPage = ({ match }) => {
    allTestsArr.find(test => { 
      if(test[0] === match.params.pageTitle){
        return setData(test[1])
      }
  })

      return(
      <div className="App">
        <h1> Название теста: {match.params.pageTitle}</h1>
        <Timer usersTime={usersTime}/>
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
        <Start allTestTitles={allTestTitles} setUsersTime={setUsersTime}/>
      </Route>

      <Route path="/result">
        < Result 
        maxPoints={maxPoints}/>
      </Route> 

      <Route path="/create">
        < CreateTest allTestTitles={allTestTitles}/>
      </Route> 

      <Route path="/:pageTitle" component={TestPage}/>

    </Switch>
  </BrowserRouter>

  );
}

 
export default App;
