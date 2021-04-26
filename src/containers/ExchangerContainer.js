import { useSelector } from "react-redux";
import { useReducer } from "react";

import { fetchCurrenciesPair } from "../api/fetchCurrency";
import useDebounce from "../hooks/useDebounce";
import { forexSelectors } from "../redux/forex";

import Exchanger from "../components/Exchanger/Exchanger";

const INIT_BASE_CURRENCY = (globalBaseCurrency) => ({
  currency: globalBaseCurrency,
  value: "",
});

const INIT_CPTY_CURRENCY = {
  currency: "USD",
  value: "",
};

const currencyReducer = (state, { type, payload }) => {
  switch (type) {
    case "changeValue":
      return { ...state, value: payload };
    case "changeCurrency":
      return { ...state, currency: payload };
    default:
      return state;
  }
};

const ExchangerContainer = () => {
  const baseCurrency = useSelector(forexSelectors.getBaseCurrency);
  const [baseCurrencyState, baseCurrencyDispatch] = useReducer(
    currencyReducer,
    baseCurrency,
    INIT_BASE_CURRENCY
  );

  const [cptyCurrencyState, cptyCurrencyDispatch] = useReducer(
    currencyReducer,
    INIT_CPTY_CURRENCY
  );

  const fetchCurrency = async ({
    baseCurrencyValue,
    cptyCurrencyValue,
    baseCurrency,
    cptyCurrency,
  }) => {
    try {
      if (baseCurrencyValue) {
        const fetchedCptyValue = await fetchCurrenciesPair(
          baseCurrencyState.currency,
          cptyCurrencyState.currency,
          baseCurrencyValue
        );
        return cptyCurrencyDispatch({
          type: "changeValue",
          payload: fetchedCptyValue,
        });
      }
      if (cptyCurrencyValue) {
        const fetchedBaseValue = await fetchCurrenciesPair(
          cptyCurrencyState.currency,
          baseCurrencyState.currency,
          cptyCurrencyValue
        );
        return baseCurrencyDispatch({
          type: "changeValue",
          payload: fetchedBaseValue,
        });
      }
      if (baseCurrency) {
        const fetchedCptyValue = await fetchCurrenciesPair(
          baseCurrency,
          cptyCurrencyState.currency,
          baseCurrencyState.value
        );

        return cptyCurrencyDispatch({
          type: "changeValue",
          payload: fetchedCptyValue,
        });
      }
      if (cptyCurrency) {
        const fetchedCptyValue = await fetchCurrenciesPair(
          cptyCurrency,
          baseCurrencyState.currency,
          cptyCurrencyState.value
        );
        return baseCurrencyDispatch({
          type: "changeValue",
          payload: fetchedCptyValue,
        });
      }
    } catch (e) {
      cptyCurrencyDispatch(INIT_CPTY_CURRENCY);
      baseCurrencyDispatch(INIT_BASE_CURRENCY(baseCurrency));
    }
  };

  const fetchCurrencyValue = useDebounce(fetchCurrency, 500);

  const handleCurrencyValueChange = ({ target: { value, name } }) => {
    if (isNaN(+value)) {
      return;
    }
    if (name === "base") {
      baseCurrencyDispatch({ type: "changeValue", payload: value });
      return fetchCurrencyValue({ baseCurrencyValue: value });
    }
    cptyCurrencyDispatch({ type: "changeValue", payload: value });
    return fetchCurrencyValue({ cptyCurrencyValue: value });
  };

  const handleCurrencyChange = ({ value, name }) => {
    if (name === "base") {
      baseCurrencyDispatch({ type: "changeCurrency", payload: value });
      return fetchCurrencyValue({ baseCurrency: value });
    }
    cptyCurrencyDispatch({ type: "changeCurrency", payload: value });
    return fetchCurrencyValue({ cptyCurrency: value });
  };

  return (
    <Exchanger
      baseCurrencyState={baseCurrencyState}
      cptyCurrencyState={cptyCurrencyState}
      handleCurrencyValueChange={handleCurrencyValueChange}
      handleCurrencyChange={handleCurrencyChange}
    />
  );
};

export default ExchangerContainer;
