import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import GetInTouch from './pages/GetInTouch.jsx';
import ServicePage from './pages/ServicePage.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import { lenis } from './hooks/useLenis.js';
import IntroOverlay from './components/IntroOverlay.jsx';
import PillNav from './components/PillNav.jsx';
import logo from './assets/brandLogo/logo.webp';
import Noise from './components/Noise.jsx';



function App() {

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
  }, []);

  
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
        <Route path="/services/:slug" element={<ServicePage />} />
        <Route path="/contact" element={<GetInTouch />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </Router>
  );
}

export default App; 