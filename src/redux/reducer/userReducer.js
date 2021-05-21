import { createSlice } from "@reduxjs/toolkit";
import { reducerUtils } from "../../utils/asyncUtils";

const prefix = "user";

const initialState = {
  user: reducerUtils.init(),
};

const user = createSlice({
  name: prefix,
  initialState,

  reducers: {},
});

export default user;
