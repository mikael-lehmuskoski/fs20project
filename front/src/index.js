import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App";
import store from "./store";

import "semantic-ui-css/semantic.min.css";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store.store}>
      <PersistGate persistor={store.persistor}>
        <App />
      </PersistGate>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
