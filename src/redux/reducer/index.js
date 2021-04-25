import { combineReducers } from "redux";
import making from "./makingReducer";
import userReducer from "./userReducer";

export const rootReducer = combineReducers({
  userReducer,
  making: making.reducer
});
