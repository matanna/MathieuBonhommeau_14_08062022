import React from "react";
import ReactDOM from "react-dom/client";
import "./style/main.scss";
import App from "./router/App";
import { BrowserRouter } from "react-router-dom";
import { ModalProvider } from "./utils/context/ModalContext";
import { Provider } from "react-redux";
import { store } from "./utils/store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ModalProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ModalProvider>
    </Provider>
  </React.StrictMode>
);
