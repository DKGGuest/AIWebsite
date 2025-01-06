import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes} from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import Healthcare from "./pages/Healthcare.jsx";
import Finance from "./pages/Finance.jsx";
import ManufacturingAndAutomotive from "./pages/Manufacturing & Automotive.jsx";
import Education from "./pages/Education.jsx";
import EntertainmentAndMedia from "./pages/Entertainment & Media.jsx";
import ExploreMorePage from "./pages-dummy/ExploreMorePage.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/healthcare-details" element={<Healthcare />} />
                <Route path="/finance-details" element={<Finance />} />
                <Route path="/manufacturing-and-automotive-details" element={<ManufacturingAndAutomotive />} /> 
                <Route path="/education-details" element={<Education />} />
                <Route path="/entertainment-and-media-details" element={<EntertainmentAndMedia />} />
                <Route path="/explore-more" element={<ExploreMorePage />}  /> 
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
