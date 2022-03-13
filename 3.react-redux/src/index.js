import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux"; // Provider 추가
import store from "./store";

// Provider : store를 App에서 사용하기 위해서 제공
ReactDOM.render(
  // Provider 추가
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
