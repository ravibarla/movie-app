import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./component/App";
import { createStore } from "redux";

import movies from "./reducers";

// console.log("mogivies :", movies);
const store = createStore(movies);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);
