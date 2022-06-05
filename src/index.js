import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";

import { hasDuplicates, normalizeProps } from "./utils";
import Poll from "./Poll";
import reportWebVitals from "./reportWebVitals";

const widgetContainers = document.querySelectorAll("[widget='modest-poll']");

if (hasDuplicates(widgetContainers)) {
  throw new Error(
    "There are 2 or more polls with same 'data-question-id' attribute"
  );
}

widgetContainers.forEach((widgetContainer) =>
  ReactDOM.createRoot(widgetContainer).render(
    <React.StrictMode>
      <Poll {...normalizeProps(widgetContainer.dataset)} />
    </React.StrictMode>
  )
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
