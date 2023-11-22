import { configureStore, combineReducers } from "@reduxjs/toolkit";
import global_slice from "./globalSlice";
import logger from "redux-logger";

const allReducers = combineReducers({
  global_slice: global_slice,
});

export const store = configureStore({
  reducer: allReducers,
  middleware: (getDefaultMiddleware) =>
    process.env.NODE_ENV === "development"
      ? getDefaultMiddleware().concat(logger)
      : getDefaultMiddleware(),
});
