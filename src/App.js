// Dependencies
import React from "react";
import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

// Pages
import { Calls, NotFound, VMBoxes } from "./pages/";

const App = () => (
  <BrowserRouter>
    <ReactNotification />
    <Switch>
      <Route path="/" exact component={VMBoxes} />
      <Route path="/calls/:vmBoxID" component={Calls} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default withRouter(App);
