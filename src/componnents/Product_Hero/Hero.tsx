
import './Hero.css'
import React from 'react'

interface HeroProps {
  description: string;
  presentation_image: string;
  background_image: string;
  brandImage: string;
  name: string;
}

export const Hero: React.FC<HeroProps> = ({  description, presentation_image, brandImage, background_image , name}) => {

  const mystyle = {
    backgroundImage: `url(${presentation_image})`,
    backgroundRepeat: 'no-repeat',
  };

  const style = {
    backgroundImage: `url(${background_image})`,
  };

  return (
    <div className='MA_hero' style={mystyle}>
   
        <div className='box'> 
          <div className='image'>
            <img src={brandImage} alt="" />
          </div>
          <div className='text'>
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        </div>

        <div className='HJ_photo'>
          <div  style={style}></div>
          <div  style={style}></div>
        </div>
  
    </div>
  );

};
