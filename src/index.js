import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./i18n";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./style.css";
import i18n from "./i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
document.getElementById("root").dir = i18n.dir();
root.render(
  <Suspense>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>
);

//https://blog.logrocket.com/handling-user-authentication-redux-toolkit/
