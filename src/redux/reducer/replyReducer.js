import { createSlice } from "@reduxjs/toolkit";
import initState from "../../constants/testingState";

const prefix = "reply";

const reply = createSlice({
  name: prefix,
  initialState: initState.reply,
  reducer: {
    addReplyInfo: (state, payload) => {
      state.push(payload);
    },
  },
});

//actions
export const { addReplyInfo } = reply.actions;

export default reply;
