import { combineReducers } from "redux";
import { UPDATE_FIRST_NAME, UPDATE_LAST_NAME } from "./actionTypes";

const initialNameState = {
  firstName: "",
  lastName: "",
};

const nameReducer = (state = initialNameState, action) => {
  switch (action.type) {
    case UPDATE_FIRST_NAME:
      return {
        ...state,
        firstName: action.payload,
      };
    case UPDATE_LAST_NAME:
      return {
        ...state,
        lastName: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  names: nameReducer,
});

export default rootReducer;
