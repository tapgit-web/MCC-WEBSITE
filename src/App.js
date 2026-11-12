import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import { Home } from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import ContactPage from './components/pages/ContactPage';
import Founder from './components/pages/Founder';
import 'leaflet/dist/leaflet.css';
import Footer from './components/pages/Footer';
import ProductLists from './components/pages/ProductLists';
import ProductDetails from './components/pages/ProductDetails';
import ScrollToTop from './components/ScrollToTop';
import { ScrollProgressBar, PageTransition } from './components/animation/MotionPrimitives';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <PageTransition routeKey={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/Aboutus" element={<AboutUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/founder" element={<Founder />} />
        <Route path="/products" element={<ProductLists />} />
        <Route path="/products/:category" element={<ProductLists />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </PageTransition>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollProgressBar />
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <div className="app-shell">
        <Navbar />

        <main id="main-content" className="app-main">
          <AnimatedRoutes />
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
