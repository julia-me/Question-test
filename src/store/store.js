import {createStore, combineReducers} from 'redux';
import {getQuestionInfo, getTitleQuestionArr, getCorrect, getIncorrect} from './reducer'


const initialState ={
  newQuestion: getQuestionInfo,
  questionArrTitle:getTitleQuestionArr,
  incorrectAnswer: getIncorrect,
  correctAnswer: getCorrect,
}

const rootRedecer = combineReducers(initialState);

const store = createStore(rootRedecer);

export default store 

