import { createStore } from "redux";
import { thunk } from "redux-thunk";
import { applyMiddleware } from "redux";
import { RootReducer } from "./reducers/RootReducer";
const intial = {};
const middelware = [thunk];
export const store = createStore(
  RootReducer,
  intial,
  applyMiddleware(...middelware)
);
