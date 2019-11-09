const initialState = {
  title: '',
  type: 'Select',
  answer: []
}
const typeOfQuestionArr=''

const correctAnswer={
  title: '',
  point: 0,
  isTrue: true,
}

const incorrectAnswers={
  title: '',
  point: 0,
  isTrue: false,
}
  

const getQuestionInfo = (state=initialState, action) => {
  switch(action.type){
    case 'GET_TITLE':
        return {...state, title: action.payload}
    case 'GET_TYPE':
        return {...state, type: action.payload}
    default: return state
  }
}

const getTitleQuestionArr =(state=typeOfQuestionArr, action) =>{
  switch(action.type){
    case 'GET_QUESTION_ARR_TITLE':
        return action.payload
    default: return state
  }
}

const getIncorrect = (state=incorrectAnswers, action) =>{
  switch(action.type){
    case 'GET_INCORRECT_ANSWER':
        return {...state, title: action.payload}
    default: return state
  }
}

const getCorrect = (state=correctAnswer, action) =>{
  switch(action.type){
    case 'GET_CORRECT_ANSWER':
        return {...state, title: action.payload}
    case 'GET_POINT':
        return {...state, point: +action.payload}
    default: return state
  }
}


export {getQuestionInfo, getTitleQuestionArr, getIncorrect, getCorrect}