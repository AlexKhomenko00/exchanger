import { connect } from "react-redux";
import { forexSelectors } from "../../redux/forex";

import CurrencySelector from "./CurrencySelector";

const CurrencySelectorContainer = ({
  baseCurrency,
  exchangeRates,
  handleCurrencyChange,
}) => {
  const ratesKeyes = Object.keys(exchangeRates);

  return (
    <>
      {ratesKeyes.length > 0 && (
        <CurrencySelector
          baseCurrency={baseCurrency}
          ratesKeyes={ratesKeyes}
          handleCurrencyChange={handleCurrencyChange}
        />
      )}
    </>
  );
};

const MSTP = (state) => ({
  baseCurrency: forexSelectors.getBaseCurrency(state),
  exchangeRates: forexSelectors.getExchangeRates(state),
});

export default connect(MSTP)(CurrencySelectorContainer);

// <CurrencySelector
//         baseCurrency={baseCurrency}
//         ratesKeyes={ratesKeyes}
//         handleCurrencyChange={handleCurrencyChange}
//       />
