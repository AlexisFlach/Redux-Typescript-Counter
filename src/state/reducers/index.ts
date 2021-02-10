import { combineReducers } from "redux";
import countReducers from "./countReducers";

const reducers = combineReducers({
  count: countReducers,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
