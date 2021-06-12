import { createSlice } from "@reduxjs/toolkit";
import initState from "../../constants/testingState";

const prefix = "reply";

const reply = createSlice({
  name: prefix,
  initialState: initState.reply,
  reducers: {
    getReplyInfo: (state, { payload: { testid } }) => {
      //recent3replies
      state.testUid = testid;
    },
    getReplyInfoSuccess: (state, { payload: { data, timestamp } }) => {
      //console.log(data, timestamp);
      if (timestamp === 0) state.replies = [];
      state.replies.push(...data);
    },
    moreReplyInfo: (state, { payload: { testid } }) => {},
    addReplyInfo: (state, { payload }) => {
      state.replies.push(...payload);
    },
    submitOneComment: (state, { payload }) => {},
    addOneComment: (state, { payload }) => {
      //상단에 새 댓글 추가
      state.replies.unshift(payload);
    },
    reportComment: (state, { payload }) => {},
    stopCallComments: (state, { payload }) => {
      state.isStop = true;
    },
  },
});

//actions
export const {
  getReplyInfo,
  addReplyInfo,
  submitOneComment,
  addOneComment,
  reportComment,
  moreReplyInfo,
  stopCallComments,
} = reply.actions;

export default reply;
