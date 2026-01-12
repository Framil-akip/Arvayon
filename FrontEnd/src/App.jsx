import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import EmployeeCard from './pages/EmployeeCard';
import BottomNav from './components/BottomNav';
import ScrollToTop from './components/ScrollToTop';

const MainLayout = () => {
  return (
    <div className="bg-primary min-h-screen text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <BottomNav />
    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/profile/:id" element={<EmployeeCard />} />

        <Route path="/*" element={<MainLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
