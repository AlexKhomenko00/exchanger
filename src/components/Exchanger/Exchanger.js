import React from "react";

import CurrencySelector from "../CurrencySelector";

const Exchanger = ({
  onBaseCurrencyChange,
  onCounterCurrencyChange,
  baseCurrency,
  counterCurrency,
  onBaseCurrencyValueChange,
  onCounterCurrencyValueChange,
  baseCurrencyValue,
  counterCurrencyValue,
  fetchCounterCurrency,
}) => {
  return (
    <section className="exchanger">
      <form>
        <input
          type="number"
          value={baseCurrencyValue}
          onChange={(e) => {
            onBaseCurrencyValueChange(e.target.value);
            fetchCounterCurrency(e.target.value);
          }}
        />
        <CurrencySelector
          handleCurrencyChange={onBaseCurrencyChange}
          startCurrency={baseCurrency}
        />
        <input
          type="number"
          value={counterCurrencyValue}
          onChange={(e) => onCounterCurrencyValueChange(e.target.value)}
        />
        <CurrencySelector
          handleCurrencyChange={onCounterCurrencyChange}
          startCurrency={counterCurrency}
        />
      </form>
    </section>
  );
};

export default Exchanger;
