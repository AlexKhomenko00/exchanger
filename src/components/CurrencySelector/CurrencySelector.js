import React from "react";

import s from "./CurrencySelector.module.css";

const CurrencySelector = ({
  startCurrency,
  exchangeRates,
  handleCurrencyChange,
  handleBaseCurrencyChange,
  name,
}) => {
  const ratesKeyes = Object.keys(exchangeRates).sort();

  const handleChange = handleBaseCurrencyChange
    ? handleBaseCurrencyChange
    : handleCurrencyChange;

  return (
    <div className={s.select}>
      <select
        className={s.CurreSelector}
        value={startCurrency}
        name={name}
        onChange={(e) => handleChange(e.target)}
      >
        {ratesKeyes.map((rate) => (
          <option key={rate}>{rate}</option>
        ))}
      </select>
    </div>
  );
};

export default CurrencySelector;
