import React, { useEffect, useState } from "react";
import "./ProductSlider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import useWindowSize from "../../useWindowSize "; // Import the custom hook
import { FaAngleDoubleLeft } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

interface Product {
  id?: number;
  name: string;
  additional_image: string;
  color: string;
}

const ProductSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Default to show one frame at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Tablet and mobile breakpoint
        settings: {
          slidesToShow: 2, // Show two slides at a time for screens <= 768px
        },
      },
      {
        breakpoint: 480, // Mobile breakpoint
        settings: {
          slidesToShow: 1, // Show one slide at a time for screens <= 480px
        },
      },
    ],
  };

  const [products, setProducts] = useState<Product[]>([]);
  const size = useWindowSize(); // Use the custom hook to get the window size

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/products")
      .then((response) => {
        setProducts(response.data.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Helper function to chunk the products array into groups of 3 or 2 based on screen size
  const chunkProducts = (arr: Product[], size: number) => {
    const chunkedArr = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArr.push(arr.slice(i, i + size));
    }
    return chunkedArr;
  };

  // Determine the chunk size based on the screen width
  const chunkSize = size.width <= 768 ? 1 : 3;
  const chunkedProducts = chunkProducts(products, chunkSize);

  return (
    <div className="ne_ProductSlider">
      <h1 className="ne_slider_heading">قد يعجبك ايضا :</h1>
      <div className="ne_slider">
        <Slider {...settings}>
          {chunkedProducts.map((chunk, index) => (
            <div className="ne_slide_container" key={index}>
              {chunk.map((product) => (
                <div className="ne_product_con" key={product.id}>
                  <img src={product.additional_image} alt={product.name} />
                  <p
                    className="ne_product_text"
                    style={{ color: product.color }}
                  >
                    {product.name}
                  </p>
                  <button   className="ne_product_info"> <FaAngleDoubleLeft className='fa-angle-icon' />مزيد من التفاصيل</button>
                </div>
              ))}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductSlider;
