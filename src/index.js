import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const root = document.getElementById("root");

// Use createRoot from react-dom/client instead of ReactDOM
const rootElement = createRoot(root);

rootElement.render(
  <Provider store={store}>
    <App />
  </Provider>
);
