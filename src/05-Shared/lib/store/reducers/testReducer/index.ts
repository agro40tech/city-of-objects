import { typeActionTest, typeDefaultState } from "./types";

const defaultState: typeDefaultState = {
  cash: 0,
};

export const testReducer = (state = defaultState, action: typeActionTest) => {
  switch (action.type) {
    case "ADD":
      return { ...state, cash: state.cash + action.payload };
    default:
      return state;
  }
};
