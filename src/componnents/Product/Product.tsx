import React from 'react'
import './Product.css'
//import product from '../../assets/images/Dahab/product1.webp'
import { FaAngleDoubleLeft } from "react-icons/fa";
import { TProduct } from '../../types/types';
import { useNavigate } from 'react-router-dom';




const Product: React.FC<TProduct> = ({ additional_image, name, color ,main_image}) => {

  const navigate = useNavigate();

  const navigateProductDetails = (_event: React.MouseEvent<HTMLButtonElement>, _id: number) => {
    navigate(`/productDetails`);
  }

  const mystyle = {
    backgroundColor: `${color}`,
  }

  console.log();
  

  return (
    <div className='ra-product'>
      <img className='backimg-edit' src={additional_image} />
      <img className='backimg' src={main_image} />
      <h3>{name}</h3>
      <button onClick={(event) => navigateProductDetails(event, 1)} style={mystyle}>   عرض التفاصيل <FaAngleDoubleLeft className='fa-angle-icon' /> </button>
    </div>
  )

}


export default Product