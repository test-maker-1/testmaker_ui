import { combineReducers } from "redux";
import making from "./makingReducer";
import common from "./commonReducer";
import testing from "./testingReducer";
import feed from "./feedReducer";

export const rootReducer = combineReducers({
  common: common.reducer,
  making: making.reducer,
  testing: testing.reducer,
  feed: feed.reducer,
});
