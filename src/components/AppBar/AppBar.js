import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import {
  forexOperations,
  forexSelectors,
  forexActions,
} from "../../redux/forex";

import CurrencySelector from "../CurrencySelector";

const AppBar = ({ fetchLatestCurrency, setBaseCurrency, baseCurrency }) => {
  useEffect(() => {
    fetchLatestCurrency();
  }, [fetchLatestCurrency]);

  return (
    <>
      <NavLink to="/">Main</NavLink>
      <NavLink to="/exchange">Convert</NavLink>

      <CurrencySelector handleCurrencyChange={setBaseCurrency} />
    </>
  );
};

const MSTP = (state) => ({
  baseCurrency: forexSelectors.getBaseCurrency(state),
});

const MDTP = {
  fetchLatestCurrency: forexOperations.fetchLatestCurrencies,
  setBaseCurrency: forexActions.setBaseCurrency,
};

export default connect(MSTP, MDTP)(AppBar);
