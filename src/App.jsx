import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Footer from './components/Footer';
import Header from './components/Header';

// Lazy load pages
const IndexPage = lazy(() => import("./pages/index/IndexPage"));
const About = lazy(() => import("./pages/about/About"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const ExportsPage = lazy(() => import("./pages/exports/Exports"));
const B2b = lazy(() => import("./pages/b2bproducts/B2b"));
const Clothes = lazy(() => import("./pages/clothes/Clothes"));
const Uniforms = lazy(() => import("./pages/uniforms/Uniforms"));
const Brand = lazy(() => import("./pages/brand/Brand"));

// Simple loader component
function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/exports" element={<ExportsPage />} />
          <Route path="/b2b" element={<B2b />} />
          <Route path="/clothes" element={<Clothes />} />
          <Route path="/uniforms" element={<Uniforms />} />
          <Route path="/brand" element={<Brand />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;