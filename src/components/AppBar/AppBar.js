import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import {
  forexOperations,
  forexSelectors,
  forexActions,
} from "../../redux/forex";

import CurrencySelector from "../CurrencySelector";

const AppBar = ({ fetchLatestCurrency, setBaseCurrency }) => {
  useEffect(() => {
    fetchLatestCurrency();
  }, [fetchLatestCurrency, setBaseCurrency]);

  return (
    <>
      <NavLink to="/">Main</NavLink>
      <NavLink to="/exchange">Convert</NavLink>

      <CurrencySelector handleCurrencyChange={setBaseCurrency} />
    </>
  );
};

const MDTP = {
  fetchLatestCurrency: forexOperations.fetchLatestCurrencies,
  setBaseCurrency: forexActions.setBaseCurrency,
};

export default connect(null, MDTP)(AppBar);
