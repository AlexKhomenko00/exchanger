import React from "react";

const CurrencySelector = ({
  startCurrency,
  ratesKeyes,
  handleCurrencyChange,
}) => (
  <select
    value={startCurrency}
    onChange={(e) => handleCurrencyChange(e.target.value)}
  >
    {ratesKeyes.map((rate) => (
      <option key={rate}>{rate}</option>
    ))}
  </select>
);

export default CurrencySelector;
