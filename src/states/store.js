import { createStore, applyMiddleware } from "redux";
import { reducers } from "./reducers";
import thunk from "redux-thunk";

const initialState = {};

export const store = createStore(
  reducers,
  initialState,
  applyMiddleware(thunk)
);
