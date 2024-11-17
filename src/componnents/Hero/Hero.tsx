import React from "react";
import "./Hero.css";
import hand from "../../assets/images/homePageBg.png";
import heroimage from "../../assets/images/home/Intersect.webp";
import heroimageMobile from "../../assets/images/home/mobilehero.png";
import flower from '../../assets/images/home/_Downloader 2.svg'

const Hero = () => {
  return (
    <div className="ne_hero_container">
      <picture>
        <source media="(max-width: 767px)" srcSet={heroimageMobile} />
        <img src={heroimage} alt="" className="hero_image" />
      </picture>
      <img src={hand} alt="" className="hand" />
      
      <div className="ne_hero_text">
        <p>من قلب جبال ساحل سوريا</p>
        <h1>كلمتنا الاولى كتبت</h1>
        <div className="flower-img">
        <img src={flower} alt="" />
      </div>
      </div>
      
    </div>
  );
};

export default Hero;
