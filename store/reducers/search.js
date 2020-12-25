import { SEARCH, VENDORS } from '../actions/vendors';



const initialState = {
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    
          case SEARCH:
          return {
              ...state,
              data: action.data
          }
          case VENDORS:
          return {
              ...state,
              data: action.data
          }
    }

  return state;
};
