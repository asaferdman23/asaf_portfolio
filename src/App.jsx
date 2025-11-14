import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import JumindNavbar from './components/jumind/JumindNavbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Jumind from './pages/Jumind';

function AnimatedRoutes() {
  const location = useLocation();
  const isJumindPage = location.pathname === '/' || location.pathname === '/jumind';

  return (
    <>
      {!isJumindPage && <Navbar />}
      {isJumindPage && <JumindNavbar />}
      
      <main className={isJumindPage ? '' : 'flex-1'}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Jumind />} />
            <Route path="/old-home" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
      
      {!isJumindPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <ScrollToTop />
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;