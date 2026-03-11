import { Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

// Layout components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import PageWrapper from "./components/layout/PageWrapper";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Courses = lazy(() => import("./pages/Courses"));
const Contact = lazy(() => import("./pages/Contact"));
const Terms = lazy(() => import("./pages/Terms"));
const Privacy = lazy(() => import("./pages/Privacy"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Loading component
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="relative">
      {/* Outer ring */}
      <div className="w-16 h-16 border-4 border-soma-cyan/20 rounded-full"></div>
      {/* Spinning ring */}
      <div className="absolute top-0 left-0 w-16 h-16 border-4 border-[color:var(--color-soma-cyan)] border-t-transparent rounded-full animate-spin"></div>
      {/* Inner dot */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[color:var(--color-soma-cyan)] rounded-full animate-pulse"></div>
    </div>
  </div>
);

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // FIX: Changed behavior to 'auto' for mobile performance
    window.scrollTo({
      top: 0,
      behavior: 'auto' 
    });
  }, [pathname]);
  
  return null;
}

// Main routes component with animations
function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    /* FIX: Added mode="wait" to ensure the exit animation finishes before mobile nav mounts the next page */
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <Suspense fallback={<PageLoader />}>
            <PageWrapper>
              <Home />
            </PageWrapper>
          </Suspense>
        } />
        <Route path="/about" element={
          <Suspense fallback={<PageLoader />}>
            <PageWrapper>
              <About />
            </PageWrapper>
          </Suspense>
        } />
        <Route path="/services" element={
          <Suspense fallback={<PageLoader />}>
            <PageWrapper>
              <Services />
            </PageWrapper>
          </Suspense>
        } />
        <Route path="/portfolio" element={
          <Suspense fallback={<PageLoader />}>
            <PageWrapper>
              <Portfolio />
            </PageWrapper>
          </Suspense>
        } />
        <Route path="/courses" element={
          <Suspense fallback={<PageLoader />}>
            <PageWrapper>
              <Courses />
            </PageWrapper>
          </Suspense>
        } />
        <Route path="/contact" element={
          <Suspense fallback={<PageLoader />}>
            <PageWrapper>
              <Contact />
            </PageWrapper>
          </Suspense>
        } />
        <Route path="/terms" element={
          <Suspense fallback={<PageLoader />}>
            <PageWrapper>
              <Terms />
            </PageWrapper>
          </Suspense>
        } />
        <Route path="/privacy" element={
          <Suspense fallback={<PageLoader />}>
            <PageWrapper>
              <Privacy />
            </PageWrapper>
          </Suspense>
        } />
        {/* 404 route */}
        <Route path="*" element={
          <Suspense fallback={<PageLoader />}>
            <PageWrapper>
              <NotFound />
            </PageWrapper>
          </Suspense>
        } />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#050505] text-black dark:text-white transition-colors duration-300">
      <Header />
      
      {/* Main content with proper spacing */}
      <main className="flex-grow pt-24 relative z-10">
        <ScrollToTop />
        <AnimatedRoutes />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;