import axios from 'axios';

// Action name constants
export const inc = 'account/increment';
export const dec = 'account/decrement';
export const incByAmt = 'account/incrementByAmount';
export const getAccUserPending = 'account/getUser/pending';
export const getAccUserFulfilled = 'account/getUser/fulfilled';
export const getAccUserRejected = 'account/getUser/rejected';
export const incBonus = 'bonus/increment';

export function getUserAccount(id) {
    return async (dispatch, getState) => {
      try {
        dispatch(getAccountUserPending());
        const response = await axios.get(`http://localhost:8080/accounts/${id}`);
        const amount = response.data?.amount || 0; // Check for valid response and fallback to 0 if undefined
        dispatch(getAccUserFulfilled(amount));
      } catch (error) {
        dispatch(getAccountUserRejected(error.message));
      }
    };
  }
  


// export function getAccUserFulfilled(value) {
//     return { type: getAccUserFulfilledConst, payload: value };
//   }
export function getAccountUserFulfilled(value) {
    return { type: getAccUserFulfilled, payload: value };
  }
  
  export function getAccountUserRejected(error) {
    return { type: getAccUserRejected, error: error };
  }
  
  export function getAccountUserPending() {
    return { type: getAccUserPending };
  }

export function increment() {
  return { type: inc };
}

export function decrement() {
  return { type: dec };
}

export function incrementByAmount(value) {
  return { type: incByAmt, payload: value };
}

export function incrementBonus(value) {
  return { type: incBonus };
}
