import { combineReducers } from "redux";

import Reducer from "./converter/reducer";

const rootReducer = combineReducers({
  currencyConverter: Reducer,
});

export default rootReducer;
