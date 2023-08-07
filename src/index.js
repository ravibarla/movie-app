import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./component/App";
import { applyMiddleware, createStore } from "redux";

import rootReducer from "./reducers";

//function logger(obk,next,action)
//logger(obj)()
const logger = function ({ dispatch, getState }) {
  return function (next) {
    return function (action) {
      //middleware code
      console.log("ACTION TYPE   :", action.type);
      next(action);
    };
  };
};
// console.log("mogivies :", movies);
const store = createStore(rootReducer, applyMiddleware(logger));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);
