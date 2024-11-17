import React, { useEffect, useState } from 'react';
import { Hero } from '../../componnents/Product_Hero/Hero';
import { TBrandData, TCategoryData, TProductData } from '../../types/types';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Brand.css';
import Product from '../../componnents/Product/Product';
import { ColorContext, ColorProvider } from '../../Contexts/ColorContext';
import Navbar from '../../componnents/Navbar/Navbar';

const BrandPage = () => {
  const { id } = useParams<{ id: string }>();
  const [brandData, setBrandData] = useState<TBrandData>();
  const [categories, setCategories] = useState([]);
  const [brandDescription, setBrandDescription] = useState('');
  const [products, setProducts] = useState<TProductData[]>([]);
  const [background_image, setBackground_image] = useState('');
  const [mainImg, setmainImg] = useState('');
  const [presentation_image, setpresentation_image] = useState('');
  const [activeIndex, setActiveIndex] = useState<number>(0); // افتراضيًا الفئة الأولى
  const [name, setname] = useState<string>('');

  const { setBrandColor } = React.useContext(ColorContext);
  const { brandColor } = React.useContext(ColorContext);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/brand/${id}/site`)
      .then((response) => {
        const data = response.data.data;
        setBrandData(data);
        setCategories(data.categories);
        setBrandColor(data.color);
        setBackground_image(data.background_image);
        setBrandDescription(data.description);
        setpresentation_image(data.presentation_image);
        setmainImg(data.main_image);
        setname(data.name);
      });
  }, [id]);

  useEffect(() => {
    if (brandData && brandData.categories.length > 0) {
      setActiveIndex(0); // تعيين الفئة الأولى كافتراضية
      getProductsDependOnCategory(0); // عرض منتجات الفئة الأولى
    }
  }, [brandData]);

  const getProductsDependOnCategory = (category: number) => {
    if (brandData && brandData.categories[category]) {
      setProducts(brandData.categories[category].products);
    }
  };

  const handlecategory = (index: number) => {
    setActiveIndex(index);
    getProductsDependOnCategory(index);
  };

  console.log(products);
  
  return (
    <>
      <div>
        <ColorProvider>
          <Navbar />
        </ColorProvider>
      </div>

      <Hero
        description={brandDescription}
        background_image={background_image}
        presentation_image={presentation_image}
        brandImage={mainImg}
        name={name}
      />
      <div className='ra-brand'>
        <div className="ra_nav_filterbuttons">
          {categories?.map((category: TCategoryData, index) => {
            const buttonClass = activeIndex === index ? 'active-button' : 'filterbutton';
            return (
              <button
                className={buttonClass}
                value={category.name}
                key={index}
                onClick={() => handlecategory(index)}
              >
                {category.name}
              </button>
            );
          })}
        </div>

        <div className='ra-products'>
          {products.map((product, index) => (
            <Product
              key={index}
              main_image={product.main_image}
              additional_image={product.additional_image}
              name={product.name}
              color={brandColor}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default BrandPage;
