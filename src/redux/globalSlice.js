import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  config: {
    name: "John Doe",
    access_token: "",
  },
  isLoading: false,
  isSuccess: false,
};

const globalSlice = createSlice({
  name: "global-slice",
  initialState: initialState,
  reducers: {
    setConfig: (state, { payload }) => {
      state.config = { ...state.config, ...payload };
    },
  },
});

export const { setConfig } = globalSlice.actions;

export default globalSlice.reducer;
