import { combineReducers } from "redux";
import { cellReducer } from "./CellObjReducer";
import { monyReducer } from "./MonyReducer";

export const rootReducer = combineReducers({
  cell: cellReducer,
  money: monyReducer,
});
