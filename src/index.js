import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./component/App";
import { applyMiddleware, createStore } from "redux";

import rootReducer from "./reducers";
import thunk from "redux-thunk";
//function logger(obk,next,action)
//logger(obj)()
// const logger = function ({ dispatch, getState }) {
//   return function (next) {
//     return function (action) {
//       //middleware code
//       console.log("ACTION TYPE   :", action.type);
//       next(action);
//     };
//   };
// };
const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    //logger code
    console.log("ACTION TYPE   :", action.type);
    next(action);
  };
// console.log("mogivies :", movies);

//thunk
// const thunk =
//   ({ dispatch, getState }) =>
//   (next) =>
//   (action) => {
//     //logger code
//     // console.log("ACTION TYPE   :", action.type);
//     if (typeof action === "function") {
//       action(dispatch);
//       return;
//     }

//     next(action);
//   };
const store = createStore(rootReducer, applyMiddleware(logger, thunk));
export const storeContext = createContext();
// console.log("storeContext :", storeContext);
const root = ReactDOM.createRoot(document.getElementById("root"));
class Provider extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <storeContext.Provider value={store}>
        {this.props.children}
      </storeContext.Provider>
    );
  }
}
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App  />
      
    </Provider>
  </React.StrictMode>
);
