import { legacy_createStore as createStore } from "redux";
import { testReducer } from "./reducers";

export const store = createStore(testReducer);
export type IRootState = ReturnType<typeof store.getState>;
