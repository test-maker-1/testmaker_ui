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
    submitOneComment: (state, { payload }) => {},
    addOneComment: (state, { payload }) => {
      //상단에 새 댓글 추가
      state.replies.unshift(payload);
    },
  },
});

//actions
export const { getReplyInfo, addReplyInfo, submitOneComment, addOneComment } =
  reply.actions;

export default reply;
