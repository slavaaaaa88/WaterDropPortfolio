**/src/index.js**
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/global.css";
import usePageView from "./hooks/usePageView";

const Root = () => {
  usePageView();
  return <App />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>
);
