import { actionTypes } from "./actionTypes";

const INITIAL_STATE = {
  currencies: {},
  all:{}
};

function Reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case actionTypes.SET_CURRENCIES:
      return {
        ...state,
        currencies: payload.data,
      };
    case actionTypes.SET_ALL:
      return {
        ...state,
        all: payload.data,
      };

    default:
      return state;
  }
}

export default Reducer;
