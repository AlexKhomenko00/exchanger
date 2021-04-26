import axios from "axios";

const API_KEY = "a88457b0c2762578a02fbe22";

const fetchCurrentExchanges = async (baseCurrency) => {
  try {
    const { data } = await axios.get(
      ` https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${baseCurrency}`
    );

    return data.conversion_rates;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

const fetchCurrenciesPair = async (base, cpty, amount) => {
  try {
    if (!base || !cpty || !amount || +amount <= 0) {
      return 0;
    }
    const { data } = await axios.get(
      `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${base}/${cpty}/${amount} `
    );

    return data.conversion_result;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export { fetchCurrentExchanges, fetchCurrenciesPair };
