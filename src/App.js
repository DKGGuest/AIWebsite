import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HealthcareDetails from "./pages/HealthcareDetails";
import FinanceDetails from "./pages/FinanceDetails";
import ManufacturingAndAutomotiveDetails from "./pages/ManufacturingAndAutomotiveDetails";
import EducationDetails from "./pages/EducationDetails";
import EntertainmentAndMediaDetails from "./pages/EntertainmentAndMediaDetails";
import NotFound from "./pages/NotFound"; // Custom 404 Page

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/healthcareDetails" element={<HealthcareDetails />} />
        <Route path="/financeDetails" element={<FinanceDetails />} />
        <Route path="/manufacturingAndAutomotiveDetails" element={<ManufacturingAndAutomotiveDetails />} />
        <Route path="/educationDetails" element={<EducationDetails />} />
        <Route path="/entertainmentAndMediaDetails" element={<EntertainmentAndMediaDetails />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all for broken links */}
      </Routes>
    </Router>
  );
};

export default App;
