import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import { forexReducers } from "./forex";

const store = configureStore({
  reducer: {
    forex: forexReducers,
  },

  devTools: process.env.NODE_ENV === "development",
});

export default store;
