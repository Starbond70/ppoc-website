import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ReactGA from "react-ga4";
import React from 'react';
import ReactDOM from 'react-dom/client';

// Only run GA in production
if (import.meta.env.MODE === "production") {
  ReactGA.initialize("G-XXXXXXXXXX"); // Replace with your Measurement ID
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);