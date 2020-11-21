/* eslint-disable import/no-anonymous-default-export */

const getExchangeRates = ({ forex }) => forex.exchangeRates;

const getBaseCurrency = ({ forex }) => forex.baseCurrency;

const getError = (state) => state.forex.error;

export default {
  getExchangeRates,
  getBaseCurrency,
  getError,
};
