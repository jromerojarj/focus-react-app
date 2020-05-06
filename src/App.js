// Dependencies
import React from "react";
import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom";

// Pages
import { Calls, NotFound } from "./pages/";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Calls} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default withRouter(App);
