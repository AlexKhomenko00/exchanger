import { createSelector } from "@reduxjs/toolkit";

const getExchangeRates = ({ forex }) => forex.exchangeRates;

const getBaseCurrency = ({ forex }) => forex.baseCurrency;

const getError = (state) => state.forex.error;

export default {
  getExchangeRates,
  getBaseCurrency,
  getError,
};
