import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import IndexPage from './pages/index/IndexPage'
import About from './pages/about/About'
import Contact from './pages/contact/Contact';
import ExportsPage from './pages/exports/Exports';
import B2b from './pages/b2bproducts/B2b';
import Clothes from './pages/clothes/Clothes'
import Uniforms from './pages/uniforms/Uniforms';
import Brand from './pages/brand/Brand';

const App = () => {
  return (
    <div className='body'>
      <Header />
      <Router>
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
      </Router>
      <Footer />
    </div>
  )
}

export default App
