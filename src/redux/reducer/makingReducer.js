import { createSlice } from "@reduxjs/toolkit";
import initState from "../../constants/makingInitState";

const prefix = "making";

const making = createSlice({
  name: prefix,
  initialState: initState.common,
  reducers: {}
});

export default making;
