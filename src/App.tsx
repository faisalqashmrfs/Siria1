import './App.css'
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import SectionEndPage from './componnents/SectionEndPage/SectionEndPage';
import Certification from './pages/Certification/Certification';
import { ColorProvider } from './Contexts/ColorContext';
import BrandPage from './pages/Brand/BrandPage';
import ShowProduct from './componnents/ShowProducts/ShowProduct';





function App() {

  return (
    <>


      <ColorProvider>
        {/* <ProductDetails /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/brands/:id" element={<BrandPage />} />
          <Route path="/productDetails/:id" element={<ShowProduct />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/certifications" element={<Certification />} />
        </Routes>


        <SectionEndPage />

      </ColorProvider>


    </>
  )
}

export default App
