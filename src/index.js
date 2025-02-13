import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ScrollToTop from "./components/ScrollToTop"; // Ensures page scrolls to top on route change
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop /> {/* Fix for scrolling on navigation */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
