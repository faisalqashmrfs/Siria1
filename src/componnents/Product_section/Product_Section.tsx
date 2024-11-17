import { useState, useEffect } from 'react';
import React from 'react';
import './Product_Section.css';
import vie from './../../assets/images/home/a vie.webp';
import malika from './../../assets/images/home/malika.webp';
import Oghawir from './../../assets/images/home/Oghawir.webp';
import gold from './../../assets/images/home/green gold.webp';
import TitleSection from '../TitleSection/TitleSection';

const Product_Section = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleResize = () => {
    if (window.innerWidth < 900) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  return (
    <div className='HJ_Margin'>
      <TitleSection title_section="  منتجاتنا" className='HJ_DirectionLeft' />

      {isMobile ? (
        <div >

          <div className='MA_mobile_product'>
            <div className='mobile_product_circles'>
              <div className='row'>
                <img src={gold} alt='product4' />
                <img src={malika} alt='product2' />
              </div>
              <div className='row'>
                <img src={Oghawir} alt='product1' />
                <img src={vie} alt='product3' />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className='MA_product'>
            <div className='product_circles'>
              <img src={Oghawir} alt='product1' />
              <img src={malika} alt='product2' />
              <img src={vie} alt='product3' />
              <img src={gold} alt='product4' />
            </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default Product_Section;