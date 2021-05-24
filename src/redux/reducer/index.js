import { combineReducers } from "redux";
import making from "./makingReducer";
import common from "./commonReducer";
import testing from "./testingReducer";
import user from "./userReducer";
import register from "./registerReducer";

export const rootReducer = combineReducers({
  user: user.reducer,
  register: register.reducer,
  common: common.reducer,
  making: making.reducer,
  testing: testing.reducer,
});
