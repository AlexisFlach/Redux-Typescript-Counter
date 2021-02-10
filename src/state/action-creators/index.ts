import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import { Action } from "../actions";

// Two different approaches

const increment = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.INCREMENT,
    });
  };
};

const decrement = () => {
  return {
    type: ActionType.DECREMENT,
  };
};
