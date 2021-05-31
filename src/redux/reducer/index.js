import { combineReducers } from "redux";
import making from "./makingReducer";
import common from "./commonReducer";
import testing from "./testingReducer";
import reply from "./replyReducer";
import user from "./userReducer";
import register from "./registerReducer";
import feed from "./feedReducer";

export const rootReducer = combineReducers({
  user: user.reducer,
  register: register.reducer,
  common: common.reducer,
  making: making.reducer,
  testing: testing.reducer,
  reply: reply.reducer,
  feed: feed.reducer,
});
