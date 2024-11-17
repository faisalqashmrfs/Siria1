import React from 'react'
import Product_Section from '../../componnents/Product_section/Product_Section'
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy'
import Iso from '../../componnents/Iso/Iso'
import Store from '../../componnents/Store/History-Story'
import Evaluations from '../../componnents/Evaluations/Evaluations'
import Quote from '../../componnents/Quote/Quote'
import Hero from '../../componnents/Hero/Hero'
import Navbar from '../../componnents/Navbar/Navbar'
import { ColorProvider } from '../../Contexts/ColorContext'




const Home = () => {
  return (
    <>
    <div>
      <ColorProvider>
        <Navbar className='HJ_navbar'/>
      </ColorProvider>
    </div>
    
      <Hero/>
      <Product_Section />
      <Store />
      <Evaluations/>
      <Iso /> 
      <PrivacyPolicy />
      <Quote/>
  
    

    </>
  )
}

export default Home