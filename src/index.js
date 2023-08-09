import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./component/App";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
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
// export const storeContext = createContext();
const store = createStore(rootReducer, applyMiddleware(logger, thunk));
// console.log("storeContext :", storeContext);
const root = ReactDOM.createRoot(document.getElementById("root"));
// class Provider extends React.Component {
//   render() {
//     const { store } = this.props;
//     return (
//       <storeContext.Provider value={store}>
//         {this.props.children}
//       </storeContext.Provider>
//     );
//   }
// }
// const connectedAppCompnent=connect(callback)(App);
// export function connect(callback) {
//   return function (Component) {
//     class ConnectedComponent extends React.Component {
//       constructor(props) {
//         super(props);
//         this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate());
//       }
//       componentWillUnmount() {
//         this.unsubscribe();
//       }
//       render() {
//         const { store } = this.props;
//         const state = store.getState();
//         const dataToBePassedAsProps = callback(state);
//         return (
//           <Component {...dataToBePassedAsProps} dispatch={store.dispatch} />
//         );
//       }
//     }

//     class connectedComponentWrapper extends React.Component {
//       render() {
//         return (
//           <storeContext.Consumer>
//             {(store) => <ConnectedComponent store={store} />}
//           </storeContext.Consumer>
//         );
//       }
//     }
//     return connectedComponentWrapper;
//   };
// }
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
