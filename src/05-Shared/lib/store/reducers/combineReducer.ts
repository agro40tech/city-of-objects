import { combineReducers } from "redux";
import { testReducer } from "./testReducer";
import { cellReducer } from "./CellObjReducer";
import { monyReducer } from "./MonyReducer";

export const rootReducer = combineReducers({
  test: testReducer,
  cell: cellReducer,
  money: monyReducer,
});
