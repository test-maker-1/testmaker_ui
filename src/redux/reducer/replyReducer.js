import { createSlice } from "@reduxjs/toolkit";
import initState from "../../constants/testingState";

const prefix = "reply";

const reply = createSlice({
  name: prefix,
  initialState: initState.reply,
  reducers: {
    getReplyInfo: (state, { payload }) => {
      //recent3replies
      state.testUid = payload;
    },
    addReplyInfo: (state, { payload }) => {
      state.replies.push(...payload);
    },
  },
});

//actions
export const { getReplyInfo, addReplyInfo } = reply.actions;

export default reply;
