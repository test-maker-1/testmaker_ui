import { createSlice } from "@reduxjs/toolkit";
import initState from "../../constants/testingState";

const prefix = "testing";

const testing = createSlice({
  name: prefix,
  initialState: initState.welcome,
  reducer: {
    updateTestInfo: (state, payload) => {},
  },
});

export default testing;