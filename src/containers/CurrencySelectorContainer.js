import { useSelector } from "react-redux";
import { forexSelectors } from "../redux/forex";

import CurrencySelector from "../components/CurrencySelector/CurrencySelector";

const CurrencySelectorContainer = ({
  startCurrencyProp,
  handleBaseCurrencyChange,
  handleCurrencyChange,
  name,
}) => {
  const exchangeRates = useSelector(forexSelectors.getExchangeRates);

  const startCurrencyFromStore = useSelector(forexSelectors.getBaseCurrency);

  return (
    <CurrencySelector
      startCurrency={startCurrencyProp || startCurrencyFromStore}
      exchangeRates={exchangeRates}
      handleBaseCurrencyChange={handleBaseCurrencyChange}
      handleCurrencyChange={handleCurrencyChange}
      name={name}
    />
  );
};

export default CurrencySelectorContainer;
