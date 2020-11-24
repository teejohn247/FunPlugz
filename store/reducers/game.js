import { SELECT_GAME, QUESTION, VIEWGAME } from '../actions/game';


const initialState = {
  data: [],
  question: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case QUESTION:
        return {
            ...state,
            question: action.question
        }
 
    case VIEWGAME:
        return{
            ...state,
            data: action.data
        }
  }

  return state;
};
