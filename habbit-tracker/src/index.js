import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HabbitProvider from "./store/HabbitProvider";
import App from "./App";
import ReactGA from 'react-ga4'; // Import react-ga4 for GA4 integration

// Initialize Google Analytics with your Tracking ID
ReactGA.initialize("G-BD339BEY6E");

// Track the initial page view
ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HabbitProvider>
      <App />
    </HabbitProvider>
  </React.StrictMode>
);