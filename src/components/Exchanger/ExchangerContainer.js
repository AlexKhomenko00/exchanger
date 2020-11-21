import React, { useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";

import { forexSelectors } from "../../redux/forex";
import { fetchCurrenciesPair } from "../../api/fetchCurrency";

import Exchanger from "./Exchanger";

const ExchangerContainer = ({ baseCurrency }) => {
  const [currentBaseCurrency, setBaseCurrency] = useState(baseCurrency);

  const [counterCurrency, setCounterCurrency] = useState("PLN");

  const [baseCurrencyValue, setBaseCurrencyValue] = useState("");

  const [counterCurrencyValue, setCounterCurrencyValue] = useState("");

  const memoizedFetchCounterCurrency = useCallback(
    async (baseCurrencyValue) => {
      const exhangeValue = await fetchCurrenciesPair(
        currentBaseCurrency,
        counterCurrency
      );
      setCounterCurrencyValue(+baseCurrencyValue * +exhangeValue);
    },
    [counterCurrency, currentBaseCurrency]
  );

  useEffect(() => {
    memoizedFetchCounterCurrency(baseCurrencyValue);
  }, [
    currentBaseCurrency,
    counterCurrency,
    baseCurrencyValue,
    memoizedFetchCounterCurrency,
  ]);

  return (
    <Exchanger
      onBaseCurrencyChange={setBaseCurrency}
      onCounterCurrencyChange={setCounterCurrency}
      baseCurrency={currentBaseCurrency}
      counterCurrency={counterCurrency}
      onBaseCurrencyValueChange={setBaseCurrencyValue}
      onCounterCurrencyValueChange={setCounterCurrencyValue}
      baseCurrencyValue={baseCurrencyValue}
      counterCurrencyValue={counterCurrencyValue}
      fetchCounterCurrency={memoizedFetchCounterCurrency}
    />
  );
};

const MSTP = (state) => ({
  baseCurrency: forexSelectors.getBaseCurrency(state),
});

export default connect(MSTP)(ExchangerContainer);
