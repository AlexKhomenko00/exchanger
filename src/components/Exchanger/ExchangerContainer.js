import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { forexSelectors } from "../../redux/forex";
import { fetchCurrenciesPair } from "../../api/fetchCurrency";

import Exchanger from "./Exchanger";

const ExchangerContainer = ({ baseCurrency }) => {
  const [currentBaseCurrency, setBaseCurrency] = useState(baseCurrency);

  const [counterCurrency, setCounterCurrency] = useState("PLN");

  const [baseCurrencyValue, setBaseCurrencyValue] = useState("");

  const [counterCurrencyValue, setCounterCurrencyValue] = useState("");

  const fetchCounterCurrency = async (baseCurrencyValue) => {
    const exhangeValue = await fetchCurrenciesPair(
      currentBaseCurrency,
      counterCurrency
    );
    setCounterCurrencyValue(+baseCurrencyValue * +exhangeValue);
  };

  useEffect(() => {
    fetchCounterCurrency(baseCurrencyValue);
  }, [currentBaseCurrency, counterCurrency, baseCurrencyValue]);

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
      fetchCounterCurrency={fetchCounterCurrency}
    />
  );
};

const MSTP = (state) => ({
  baseCurrency: forexSelectors.getBaseCurrency(state),
});

export default connect(MSTP)(ExchangerContainer);
