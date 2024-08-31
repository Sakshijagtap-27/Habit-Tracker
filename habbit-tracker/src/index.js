import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HabbitProvider from "./store/HabbitProvider";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HabbitProvider>
      <App />
    </HabbitProvider>
  </React.StrictMode>
);