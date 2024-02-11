export type typeDefaultStateMony = {
  money: number;
  moneyPeerSecond: number;
};

export enum enumActionMony {
  add = "ADD",
  take = "TAKE",
  set = "SET",
  addMoneyPeerSecond = "ADD__MONEY__PEER_SECOND",
  takeMoneyPeerSecond = "TAKE__MONEY__PEER_SECOND",
  setMoneyPeerSecond = "SET__MONEY__PEER_SECOND",
  resetMoneyPeerSecond = "RESET__MONEY__PEER_SECOND",
}

export type typeActionMony = {
  type: enumActionMony;
  payload: number;
};
