import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import forexActions from "./forexActions";

const exchangeRates = createReducer(
  {},
  {
    [forexActions.fetchLatestCurrenciesSuccess]: (state, { payload }) =>
      payload,
  }
);

const baseCurrency = createReducer("EUR", {
  [forexActions.setBaseCurrency]: (state, { payload }) => payload,
});

const error = createReducer(null, {
  [forexActions.fetchCurrenciesError]: (state, { payload }) => payload,
});

export default combineReducers({
  exchangeRates,
  baseCurrency,
  error,
});
