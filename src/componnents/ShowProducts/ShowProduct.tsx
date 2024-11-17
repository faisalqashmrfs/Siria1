import React from 'react'
import ProductDetails from '../../pages/ProductDetails/ProductDetails'
import ProductSlider from '../ProductSlider/ProductSlider'
import { ColorProvider } from '../../Contexts/ColorContext'
import { Navbar } from 'react-bootstrap'

const ShowProduct = () => {
  return (
    <>
      <div>
        <ColorProvider>
          <Navbar />
        </ColorProvider>
      </div>
      
      <ProductDetails />
      <ProductSlider />
    </>
  )
}

export default ShowProduct