import { reducer } from "./invoiceReducer";
import { combineReducers } from "redux";

export const reducers = combineReducers({
  invoice: reducer,
});
