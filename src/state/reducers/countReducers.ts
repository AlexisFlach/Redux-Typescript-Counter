import { ActionType } from "../action-types";
import { Action } from "../actions";

interface appState {
  sum: number;
}

const initialState = {
  sum: 0,
};

const reducer = (state: appState = initialState, action: Action): appState => {
  switch (action.type) {
    case ActionType.INCREMENT:
      return { sum: state.sum + 1 };
    case ActionType.DECREMENT:
      return { sum: state.sum - 1 };
    default:
      return state;
  }
};

export default reducer;
