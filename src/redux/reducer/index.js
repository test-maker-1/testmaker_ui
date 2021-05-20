import { combineReducers } from "redux";
import making from "./makingReducer";
import common from "./commonReducer";
import testing from "./testingReducer";
import reply from "./replyReducer";

export const rootReducer = combineReducers({
  common: common.reducer,
  making: making.reducer,
  testing: testing.reducer,
  reply: reply.reducer,
});
