// Dependencies
import React, { StrictMode } from "react";
import { render } from "react-dom";
import * as serviceWorker from "./serviceWorker";

// Components
import App from "./App";

// Router
import { Router } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history";

// Redux dependencies
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";

// Reducers
import reducers from "./reducers";

// Redux config
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(reduxThunk))
);

// Consts
const ROOT = document.getElementById("root");
const history = createHistory();

render(
  <StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </StrictMode>,
  ROOT
);

serviceWorker.unregister();
