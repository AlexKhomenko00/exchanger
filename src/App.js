import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Container from "./components/Container";
import AppBar from "./containers/AppBarContainer";
import MainPage from "./views/MainPage";
import Exchanger from "./containers/ExchangerContainer";
import { forexOperations, forexSelectors } from "./redux/forex";

const App = () => {
  const dispatch = useDispatch();
  const baseCurrency = useSelector(forexSelectors.getBaseCurrency);

  useEffect(() => {
    dispatch(forexOperations.fetchLatestCurrencies());
  }, [dispatch, baseCurrency]);

  return (
    <Container>
      <AppBar />
      <Switch>
        <Route exact path="/" component={MainPage}></Route>
        <Route exact path="/exchange" component={Exchanger}></Route>
        <Redirect to="/" />
      </Switch>
    </Container>
  );
};

export default App;
