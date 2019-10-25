import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import NewQuestion from './NewQuestion' 
import CorrectAnswer from './CorrectAnswer' 
import InCorrectAnswer from './InCorrectAnswer' 

let newArrTest = JSON.parse(localStorage.getItem('new')) || []


const CreateTest = ({allTestTitles, setNewQuestions})  =>{
    const [correctAnswerInfo, setCorrectAnswerInfo]=useState({
        title:'',
        isTrue: true,
        point:1,
    })
    const [inCorrectAnswerInfo, setInCorrectAnswerInfo]=useState({
        title:'',
        isTrue: false,
        point: 0,
    })
    // name of test to push question
    const [newTestName, setNewTestName]=useState('')
    // arr of question info
    const [newQuestion, setNewQuestion]=useState({
        type: 'Select',
        answer: []
    }) 
    //total info to push
    const [newTest, setNewTest]=useState([])

    //for button add answer
    const [addIncorrect, setAddIncorrect]=useState({
        one: false,
        two: false,
        firstButton: true,
        secondButton: false,
    })

    const createTest = (e) => {
        setNewTestName(e.target.value)
    }

    useEffect(()=> {
        setNewQuestion({...newQuestion, answer: [correctAnswerInfo,inCorrectAnswerInfo]})
        setNewTest([newTestName, newQuestion])

    },[inCorrectAnswerInfo, correctAnswerInfo, newTestName])

    const testIsReadyHendel = (e) => {
        if(newTestName && correctAnswerInfo.title && correctAnswerInfo.point  && inCorrectAnswerInfo.title &&newQuestion.title){
            newArrTest.push(newTest)
            localStorage.setItem('new', JSON.stringify(newArrTest))
            setNewQuestions(JSON.parse(localStorage.getItem('new')) || [])
        }
    }
 
    return (
        <div className="result">
            <h1>  Добавление вопроса к тестам </h1>
            <div className='newTest'>
                <div className='test-item'>
                    <label htmlFor=""> выберите название теста
                        <select onChange={(e)=> createTest(e)}>
                            <option value="0"> выберите тест </option>
                            {allTestTitles.map(name => {
                                return(
                                    <option key={name} value={name}>{name}</option>
                                )
                            })}
                        </select>
                    </label>
                </div>
                <NewQuestion 
                newQuestion={newQuestion} setNewQuestion={setNewQuestion}
                />
                <CorrectAnswer setCorrectAnswerInfo={setCorrectAnswerInfo} correctAnswerInfo={correctAnswerInfo} newQuestion={newQuestion} setNewQuestion={setNewQuestion}/> 
                <InCorrectAnswer inCorrectAnswerInfo={inCorrectAnswerInfo} setInCorrectAnswerInfo={setInCorrectAnswerInfo}/>
                {addIncorrect.firstButton &&                 
                <button
                onClick={(e) => setAddIncorrect({...addIncorrect, 
                    ...addIncorrect.one=true, 
                    ...addIncorrect.secondButton=true, 
                    ...addIncorrect.firstButton=false})} 
                    className="btn btn-primary" > добавить неправильный ответ 
                </button> }
                {addIncorrect.one && 
                <div>
                   <InCorrectAnswer/>
                </div> }
                {addIncorrect.secondButton &&                 
                <button
                    onClick={(e) => setAddIncorrect({...addIncorrect, 
                    ...addIncorrect.two=true, 
                    ...addIncorrect.secondButton=false})} 
                    className="btn btn-primary" > добавить неправильный ответ 
                </button> }
                {addIncorrect.two && 
                <div>
                   <InCorrectAnswer/>
                </div> }
            </div>
            <Link onClick={(e)=> testIsReadyHendel(e)} className="btn btn-primary" to='/start'> вопрос готов </Link>
        </div>
    );
}
 
export default CreateTest;
