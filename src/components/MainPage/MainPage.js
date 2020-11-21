import React, { useEffect } from "react";
import { connect } from "react-redux";

import { forexOperations, forexSelectors } from "../../redux/forex";

import './MainPage.css'

const MainPage = ({ fetchLatestCurrency, exchangeRates, baseCurrency }) => {
  useEffect(() => {
    fetchLatestCurrency(baseCurrency);
  }, [fetchLatestCurrency, baseCurrency]);

  const ratesKeyes = Object.keys(exchangeRates).sort();

  return (
    <>
      <table className="exchangeTable">
        <caption> Обмен валют </caption>
        <thead>
          <tr>
            <th>Конвертируемая валюта</th>
            <th>Курс</th>
          </tr>
        </thead>
        <tbody>
          {ratesKeyes.map((rate) => <tr>
            <td>{rate}</td>
            <td>{exchangeRates[rate]}</td>
          </tr>)
          }
       </tbody>
     </table>
      
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
