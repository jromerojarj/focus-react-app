// Dependencies
import React, { StrictMode } from "react";
import { render } from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// Router
import { Router } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history";

// Consts
const ROOT = document.getElementById("root");
const history = createHistory();

render(
  <StrictMode>
    <Router history={history}>
      <App />
    </Router>
  </StrictMode>,
  ROOT
);

serviceWorker.unregister();
