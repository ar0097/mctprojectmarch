import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { Provider } from "react-redux";
import stateReducer from "./slice";
import { configureStore } from "@reduxjs/toolkit";

const state_store = configureStore({
  reducer: stateReducer
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={state_store}>
    <App />
  </Provider>
);
