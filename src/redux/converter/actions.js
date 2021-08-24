import { actionTypes } from "./actionTypes";

export const setCurrencies = (data) => {
  return {
    type: actionTypes.SET_CURRENCIES,
    payload: {
      data,
    },
  };
};
export const setAll = (data) => {
  return {
    type: actionTypes.SET_ALL,
    payload: {
      data,
    },
  };
};
