import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import AuthProvider from './context/AuthProvider'

import "antd/dist/antd.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppProvider from "./context/AppProvider";
import { storeLoad } from "./redux/loading/storeloading";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
      <AuthProvider>
        <AppProvider>
          <PersistGate persistor={persistor}>
            <App />
          </PersistGate>
        </AppProvider>
      </AuthProvider>
    {/* </Provider> */}
  </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
