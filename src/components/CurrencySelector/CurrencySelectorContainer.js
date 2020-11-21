import { connect } from "react-redux";
import { forexSelectors } from "../../redux/forex";

import CurrencySelector from "./CurrencySelector";

const CurrencySelectorContainer = ({
  startCurrency,
  exchangeRates,
  handleCurrencyChange,
}) => {
  const ratesKeyes = Object.keys(exchangeRates).sort();

  return (
    <CurrencySelector
      startCurrency={startCurrency}
      ratesKeyes={ratesKeyes}
      handleCurrencyChange={handleCurrencyChange}
    />
  );
};

const MSTP = (state, ownProps) => ({
  startCurrency: ownProps.startCurrency
    ? ownProps.startCurrency
    : forexSelectors.getBaseCurrency(state),
  exchangeRates: forexSelectors.getExchangeRates(state),
});

export default connect(MSTP)(CurrencySelectorContainer);
