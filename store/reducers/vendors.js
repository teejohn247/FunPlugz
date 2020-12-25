import { VENDORS, EDIT_VENDOR , SEARCH } from '../actions/vendors';



const initialState = {
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case VENDORS:
        return {
            ...state,
            data: action.data
        }
        case EDIT_VENDOR:
          return {
              ...state,
              data: action.data
          }
          // case SEARCH:
          // return {
          //     ...state,
          //     data: action.data
          // }
    }

  return state;
};
