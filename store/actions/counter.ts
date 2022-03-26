import { AppDispatch } from "../configureStore";

export function increment() {
  return {
    type: "INCREMENT",
  };
}

export function decrement() {
  return {
    type: "DECREMENT",
  };
}

export function incrementByAmount(amount: number) {
  return {
    type: "INCREMENT_BY_AMOUNT",
    payload: amount,
  };
}
export const incrementAsync = (amount: number) => (dispatch: AppDispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};
