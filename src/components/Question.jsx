import React, {useState, useEffect} from 'react';
import InputText from '../Elements/InputText'
import InputRadio from '../Elements/InputRadio'
import InputCheckbox from '../Elements/InputCheckbox'
import Select from '../Elements/Select'
// import Result from './Result'
// import Message from './Message'
// import Timer from '../Elements/Timer'
// import TimeOver from './TimeOver'
import { Link } from 'react-router-dom';
// import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';



const Question = (props)  => {
  const {data,  maxPoints, setMaxPoints, setTotalPoint} = props
  const [answersModel, setAnswersModel]=useState(new Array(data.length))
  let totalPoint =0
  // const [resultIsActive, setResultIsActive]=useState(false)
  // const [res, setRes] = useState(0)
  // const [correctAnswers, setCorrectAnswers] = useState(0)
  // const [messageWindow, semtMessageWindow] = useState(true)
  // const [testIsOver, setTestIsOver] = useState(false)
  // const timeOntext = 1;
  // const [try1, setTry1]=useState('noth')
  
  // useEffect(()=> {
  //   setAnswersModel(new Array(data.length))
  // },[])

  useEffect(()=> {
    console.log(answersModel)
  },[answersModel])
  
  const setAnswer = (index) => {
    return (pointerCount) => {
      const indexOfElem = index
      let arr = [...answersModel];
      arr[indexOfElem] = pointerCount;
      setAnswersModel(arr);
    }
  }

  const summ =() => {
    setAnswersModel([])
    let resultPoints=0
    answersModel.forEach(point => {
      if(point){
         resultPoints+= point
      }
    })
    setTotalPoint(resultPoints)
  }

  const totalQuestionPoints = () =>{
    data.forEach(oneQuestion => {
        oneQuestion.answer.forEach(correctAnswer => {
            if(correctAnswer.isTrue){
                totalPoint +=correctAnswer.point
            }
        })
    })
    setMaxPoints(totalPoint)
    console.log(totalPoint)
    console.log(maxPoints)
  }
  totalQuestionPoints()

  const sentResultHendel =(e) => {
    summ()
    // setTotalPoint
    // setMaxPoints([...answersModel])
    console.log(maxPoints)
  }


  return (
    <div className="container" >
    {/* {
    messageWindow && <Message 
    semtMessageWindow={semtMessageWindow} 
    data={data}
    timeOntext={timeOntext}
    setShowTimer={setShowTimer}/>  
    } */}
    {
    <div className="div">
      {
      data.map((oneQuestion, index) => {
        switch (oneQuestion.type) {
          case 'Text': 
            return <InputText 
            key={index+oneQuestion.title} 
            setAnsver={setAnswer(index)} 
            oneQuestion={oneQuestion} 
            number={index}/>

          case 'Radio': 
            return <InputRadio 
            key={index+oneQuestion.title} 
            setAnsver={setAnswer(index)}  
            oneQuestion={oneQuestion} 
            number={index} />

          case 'Checkbox': 
            return <InputCheckbox  
            key={index+oneQuestion.title} 
            setAnsver={setAnswer(index)} 
            oneQuestion={oneQuestion} 
            number={index} />

          case 'Select': 
            return <Select 
            key={index+oneQuestion.title} 
            setAnsver={setAnswer(index)} 
            oneQuestion={oneQuestion} 
            number={index}/>

          default: 
            return null
        }
      })
        }
      <Link 
      className="btn btn-primary" 
      to='/result'
      onClick={(e)=> sentResultHendel(e)}
      >
         take result </Link>
      </div>
    }

  </div>
  );
}

 
export default Question;