import React from "react";
import { Switch, Route } from "react-router-dom";

import Container from "./components/Container";
import AppBar from "./components/AppBar";
import MainPage from "./components/MainPage";
import Exchanger from "./components/Exchanger";

const App = () => {
  return (
    <Container>
      <AppBar />
      <Switch>
        <Route exact path="/" component={MainPage}></Route>
        <Route exact path="/exchange" component={Exchanger}></Route>
      </Switch>
    </Container>
  );
};

export default App;
