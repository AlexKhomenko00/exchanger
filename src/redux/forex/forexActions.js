import { createAction } from "@reduxjs/toolkit";

const fetchLatestCurrenciesStart = createAction(
  "phonebook/fetchLatestCurrenciesStart"
);
const fetchLatestCurrenciesSuccess = createAction(
  "phonebook/fetchLatestCurreniesSuccess"
);
const fetchLatestCurrenciesError = createAction(
  "phonebook/fetchLatestCurreniesSuccess"
);

const setBaseCurrency = createAction("phonebook/setBaseCurrency");

export default {
  fetchLatestCurrenciesStart,
  fetchLatestCurrenciesSuccess,
  fetchLatestCurrenciesError,
  setBaseCurrency,
};
