import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const widgetContainers = document.querySelectorAll("[widget='modest-poll']");

widgetContainers.forEach(
  (widgetContainer) =>
    console.log(widgetContainer.dataset) ||
    ReactDOM.createRoot(widgetContainer).render(
      <React.StrictMode>
        <App {...widgetContainer.dataset} />
      </React.StrictMode>
    )
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
