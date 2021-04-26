import React from "react";
import getSymbolFromCurrency from "currency-symbol-map";

import "./CurrenciesTable.css";

const CurrenciesTable = ({ exchangeRates }) => {
  const ratesKeyes = Object.keys(exchangeRates).sort();

  return (
    <table className="exchangeTable">
      <thead>
        <tr>
          <th>Converted currency </th>
          <th>Exchange rate</th>
        </tr>
      </thead>
      <tbody>
        {ratesKeyes.map((rate) => (
          <tr key={rate}>
            <td>
              <div className="currencyName">
                {getSymbolFromCurrency(rate) && (
                  <span className="currencySymbol">
                    {getSymbolFromCurrency(rate)}
                  </span>
                )}
                {rate}
              </div>
            </td>
            <td>{exchangeRates[rate]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CurrenciesTable;
