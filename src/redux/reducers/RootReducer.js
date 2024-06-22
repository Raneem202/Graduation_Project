import { combineReducers } from "redux";
import { Authentication } from "./AuthReducer";
import { GethelloAction } from "../actions/gethelloaction";
import { gethello } from "./gethelloreducer";
import { OwnerReducer } from "./ownerReducer";
import { UserReducer } from "./userReducer";

export const RootReducer = combineReducers({
  Auth: Authentication,
  Owner: OwnerReducer,
  User: UserReducer,
});
