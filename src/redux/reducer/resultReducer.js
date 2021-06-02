import { createSlice } from "@reduxjs/toolkit";
import initState from "../../constants/testingState";

const prefix = "result";

const result = createSlice({
  name: prefix,
  initialState: initState.result,
  reducers: {
    setTestID: (state, { payload }) => {
      state.current_testID = payload;
    },
    saveResult: (state, { paylaod }) => {
      console.log(paylaod);
    },
  },
});

export const {} = result.actions;

export default result;
