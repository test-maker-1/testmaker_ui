import { combineReducers } from "redux";
import making from "./makingReducer";
import common from "./commonReducer";
import testing from "./testingReducer";
import user from "./userReducer";

export const rootReducer = combineReducers({
  user: user.reducer,
  common: common.reducer,
  making: making.reducer,
  testing: testing.reducer,
});
