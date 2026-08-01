import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import NotFound from './components/NotFound.jsx';
import Contact from './pages/Contact.jsx';
import Home from './pages/Home.jsx';
import Crew360 from './pages/Crew360.jsx';
import AviationStaff from './pages/AviationStaff.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';

export default function App() {
  return (
    <div className="app-shell">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Crew360 />} />
        <Route path="/product/crew-360" element={<Crew360 />} />
        <Route path="/product/staff-travel" element={<AviationStaff />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}
