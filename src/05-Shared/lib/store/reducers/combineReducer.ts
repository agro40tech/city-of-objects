import { combineReducers } from "redux";
import { testReducer } from "./testReducer";
import { cellReducer } from "./CellObjReducer";

export const rootReducer = combineReducers({
  test: testReducer,
  cell: cellReducer,
});
