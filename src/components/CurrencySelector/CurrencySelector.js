import React from "react";

const CurrencySelector = ({
  baseCurrency,
  ratesKeyes,
  handleCurrencyChange,
}) => (
  <select
    value={baseCurrency}
    onChange={(e) => handleCurrencyChange(e.target.value)}
  >
    {ratesKeyes.map((rate) => (
      <option key={rate}>{rate}</option>
    ))}
  </select>
);

export default CurrencySelector;
