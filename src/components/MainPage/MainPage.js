import React, { useEffect } from "react";
import { connect } from "react-redux";

import { forexOperations, forexSelectors } from "../../redux/forex";

const MainPage = ({ fetchLatestCurrency, exchangeRates, baseCurrency }) => {
  useEffect(() => {
    fetchLatestCurrency(baseCurrency);
  }, [fetchLatestCurrency, baseCurrency]);

  const ratesKeyes = Object.keys(exchangeRates);

  return (
    <>
      <h1>Main Page</h1>
      <ul>
        {ratesKeyes.map((rate) => (
          <li key={rate}>
            <span>
              {rate}:{exchangeRates[rate]}{" "}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

const MSTP = (state) => ({
  exchangeRates: forexSelectors.getExchangeRates(state),
  baseCurrency: forexSelectors.getBaseCurrency(state),
});

const MDTP = {
  fetchLatestCurrency: forexOperations.fetchLatestCurrencies,
};

export default connect(MSTP, MDTP)(MainPage);
