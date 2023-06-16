import {
    getAccUserFulfilled,
    getAccUserPending,
    getAccUserRejected,
    inc,
    dec,
    incByAmt
  } from '../Action/Index.js';
  
  const initialState = {
    amount: 0 // Initial value for the amount property
  };
  
  export function accountReducer(state = initialState, action) {
    switch (action.type) {
      case getAccUserFulfilled:
        return { amount: action.payload, pending: false };
      case getAccUserRejected:
        return { ...state, error: action.error, pending: false };
      case getAccUserPending:
        return { ...state, pending: true };
      case inc:
        return { amount: state.amount + 1 };
      case dec:
        return { amount: state.amount - 1 };
      case incByAmt:
        return { amount: state.amount + action.payload };
      default:
        return state;
    }
  }
  