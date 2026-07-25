import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import OurServices from './pages/OurServices.jsx';
import GetInTouch from './pages/GetInTouch.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import { lenis } from './hooks/useLenis.js';
import IntroOverlay from './components/IntroOverlay.jsx';
import PillNav from './components/PillNav.jsx';
import logo from './assets/brandLogo/logo.webp';

function App() {
  useEffect(() => {
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <Router>
      <Navbar />
      {/* <IntroOverlay /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/contact" element={<GetInTouch />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </Router>
  );
}

export default App; 