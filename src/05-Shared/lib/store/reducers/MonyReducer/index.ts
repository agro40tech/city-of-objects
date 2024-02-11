import { typeActionMony, typeDefaultStateMony } from "./types";

const defaultState: typeDefaultStateMony = {
  money: 0,
  moneyPeerSecond: 0,
};

export const monyReducer = (state = defaultState, action: typeActionMony) => {
  switch (action.type) {
    case "ADD":
      localStorage.setItem("money", (state.money + action.payload).toString());
      console.log(state.money, action.payload);
      return { ...state, money: state.money + action.payload };

    case "TAKE":
      localStorage.setItem("money", (state.money - action.payload).toString());
      return { ...state, money: state.money - action.payload };

    case "SET":
      localStorage.setItem("money", (state.money + action.payload).toString());
      return { ...state, money: action.payload };

    case "ADD__MONEY__PEER_SECOND":
      localStorage.setItem("moneyPeerSecond", (state.moneyPeerSecond + action.payload).toString());

      return { ...state, moneyPeerSecond: state.moneyPeerSecond + action.payload };

    case "TAKE__MONEY__PEER_SECOND":
      localStorage.setItem("moneyPeerSecond", (state.moneyPeerSecond - action.payload).toString());
      return { ...state, moneyPeerSecond: state.moneyPeerSecond - action.payload };

    case "SET__MONEY__PEER_SECOND":
      localStorage.setItem("moneyPeerSecond", (state.moneyPeerSecond + action.payload).toString());
      return { ...state, moneyPeerSecond: action.payload };

    case "RESET__MONEY__PEER_SECOND":
      localStorage.setItem("moneyPeerSecond", (0).toString());
      return { ...state, moneyPeerSecond: 0 };

    default:
      return state;
  }
};
