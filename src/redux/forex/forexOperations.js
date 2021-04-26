/* eslint-disable import/no-anonymous-default-export */
import { fetchCurrentExchanges } from "../../api/fetchCurrency";
import forexActions from "./forexActions";

const fetchLatestCurrencies = () => async (dispatch, getState) => {
  dispatch(forexActions.fetchLatestCurrenciesStart());

  const {
    forex: { baseCurrency },
  } = getState();

  try {
    const data = await fetchCurrentExchanges(baseCurrency);

    dispatch(forexActions.fetchLatestCurrenciesSuccess(data));
  } catch (error) {
    dispatch(forexActions.fetchLatestCurrenciesError(error));
  }
};

export default {
  fetchLatestCurrencies,
};
