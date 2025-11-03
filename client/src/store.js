import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "./features/transactionsSlice.js";

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
  },
});
