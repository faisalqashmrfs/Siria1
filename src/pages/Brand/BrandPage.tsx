import React, { useEffect, useState } from 'react';
import { Hero } from '../../componnents/Product_Hero/Hero';
import { TBrandData, TCategoryData, TProductData } from '../../types/types';
import { useParams } from 'react-router-dom';
// import axios from 'axios';
import './Brand.css';
import Product from '../../componnents/Product/Product';
import { ColorContext, ColorProvider } from '../../Contexts/ColorContext';
import Navbar from '../../componnents/Navbar/Navbar';
import image1 from '../../Static/image1.png';
import image2 from '../../Static/main.png';
import main2 from '../../Static/main2.png';
import product1 from '../../Static/product1.png';
import pro1 from '../../Static/pro1.png';

const BrandPage = () => {
  const { id } = useParams<{ id: string }>();
  const [brandData, setBrandData] = useState<TBrandData>();
  const [categories, setCategories] = useState<TCategoryData[]>([]);
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
    
        const data = {
          
            id : 1,
            name: "صحتك دهَب",
            description: "ذهب أخضر السوري يمثل  كافة النباتات والأعشاب الطبيعية السورية من البادية والجبل والساحل وغوطة الشام وسهل حوران.\r\nتشكيلة واسعة من المنتجات الطبيعية بالنكهة السورية الخاصة.\r\nجمعت بعناية ومحبة بأيدي وخبرات سورية.",
            brand_color: "#153d1f",
            presentation_image: main2,
            background_image: image1,
            main_image: image2,
            categories : [
              {
                id : 1,
                name : "عبوة",
                products : [
                  {
                    name: "بنفسج عطري",
                    main_image: pro1,
                    additional_image: product1,
                  },
                  {
                    name: "بنفسج عطري",
                    main_image: pro1,
                    additional_image: product1,
                  },
                  {
                    name: "بنفسج عطري",
                    main_image: pro1,
                    additional_image: product1,
                  },
                  {
                    name: "بنفسج عطري",
                    main_image: pro1,
                    additional_image: product1,
                  },
                  {
                    name: "بنفسج عطري",
                    main_image: pro1,
                    additional_image: product1,
                  },
                  {
                    name: "بنفسج عطري",
                    main_image: pro1,
                    additional_image: product1,
                  },
                  {
                    name: "بنفسج عطري",
                    main_image: pro1,
                    additional_image: product1,
                  },
                  {
                    name: "بنفسج عطري",
                    main_image: pro1,
                    additional_image: product1,
                  },
                  {
                    name: "بنفسج عطري",
                    main_image: pro1,
                    additional_image: product1,
                  },
                  {
                    name: "بنفسج عطري",
                    main_image: pro1,
                    additional_image: product1,
                  },
                  {
                    name: "بنفسج عطري",
                    main_image: pro1,
                    additional_image: product1,
                  },
                ]
              }
            ],
        }
        setBrandData(data);
        setCategories(data.categories);
        setBrandColor(data.brand_color);
        setBackground_image(data.background_image);
        setBrandDescription(data.description);
        setpresentation_image(data.presentation_image);
        setmainImg(data.main_image);
        setname(data.name);
        console.log(data);
        
      ;
  }, [id]);
  // useEffect(() => {
  //   axios.get(`http://127.0.0.1:8000/api/brand/${id}/site`)
  //     .then((response) => {
  //       const data = response.data.data;
  //       setBrandData(data);
  //       setCategories(data.categories);
  //       setBrandColor(data.color);
  //       setBackground_image(data.background_image);
  //       setBrandDescription(data.description);
  //       setpresentation_image(data.presentation_image);
  //       setmainImg(data.main_image);
  //       setname(data.name);
  //       console.log(data);
        
  //     });
  // }, [id]);

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
