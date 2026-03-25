import { configureStore } from "@reduxjs/toolkit";
import leaveReducer from "../features/leaveSlice";

const store = configureStore({
  reducer: {
    leaves: leaveReducer,
  },
});

export default store;
