import { useSelector } from "react-redux";

import { forexSelectors } from "../redux/forex";

import CurrenciesTable from "../components/CurrenciesTable/CurrenciesTable";

const CurrenciesTableContainer = () => {
  const exchangeRates = useSelector((state) =>
    forexSelectors.getExchangeRates(state)
  );

  return <CurrenciesTable exchangeRates={exchangeRates} />;
};

export default CurrenciesTableContainer;
