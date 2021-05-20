import { createSlice } from "@reduxjs/toolkit";
import initState from "../../constants/testingState";

const prefix = "reply";

const reply = createSlice({
  name: prefix,
  initialState: initState.reply,
  reducer: {
    updateTestInfo: (state, payload) => {},
  },
});

export default reply;
