import axios from "axios";

const fetchCurrentExchanges = (baseCurrency) =>
  axios
    .get(`https://api.exchangeratesapi.io/latest?base=${baseCurrency}`)
    .then(({ data }) => data.rates);

const fetchCurrenciesPair = (base, cpty) =>
  axios
    .get(`https://api.exchangeratesapi.io/latest?base=${base}&symbols=${cpty} `)
    .then(({ data }) => data.rates);

export { fetchCurrentExchanges, fetchCurrenciesPair };