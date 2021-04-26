import { useDispatch, useSelector } from "react-redux";
import { forexSelectors, forexActions } from "../redux/forex";

import AppBar from "../components/AppBar/AppBar";
import CurrencySelector from "../containers/CurrencySelectorContainer";

const AppBarContainer = () => {
  const dispatch = useDispatch();

  const baseCurrency = useSelector(forexSelectors.getBaseCurrency);

  const setBaseCurrency = ({ value: currency }) => {
    dispatch({
      type: forexActions.setBaseCurrency.toString(),
      payload: currency,
    });
  };

  return (
    <AppBar>
      <CurrencySelector
        startCurrency={baseCurrency}
        handleBaseCurrencyChange={setBaseCurrency}
      />
    </AppBar>
  );
};

export default AppBarContainer;
