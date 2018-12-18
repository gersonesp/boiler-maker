import React from "react";
import ReactDOM from "react-dom";
import store from "./store";
import { Provider } from "react-redux";
import "../public/index.css";

ReactDOM.render(
  <Provider store={store}>
    <div>YNWA! TOP OF THE LEAGUE!</div>
  </Provider>,
  document.getElementById("main")
);
