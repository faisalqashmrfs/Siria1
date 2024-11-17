import React from 'react';
// import axios from 'axios';
import './History-Story.css';
import TitleSection from '../TitleSection/TitleSection';
import story1 from '../../Static/story1.png';
import story2 from '../../Static/story2.png';

const Store: React.FC = () => {
  // const [stories, setStories] = useState([]);

  // useEffect(() => {
  //   const fetchStories = async () => {
  //     try {
  //       const response = await axios.get('http://127.0.0.1:8000/api/stories');
  //       setStories(response.data.data);
  //     } catch (error) {
  //       console.error('Error fetching stories:', error);
  //     }
  //   };

  //   fetchStories();
  // }, []);

{/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< static arry for tisting Demo >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>></>*/}
const StaticStories  : {id : number , description : string , file : string }[] =  [
  {
    id: 1,
    description:"أكثر*من 8000 سنة قبل الميلاد، اكتست هذه الأرض بنباتات منحتها العطر والسحر والشفاء . سوريا أو آشورية… أﻗﺪم اﻟﺤﻀﺎرات وأﻋﺮﻗﻬﺎ ﻣﻮﻗﻌﻬﺎ اﻟﻤﻤﻴﺰ ﺷﺮق اﻟﻤﺘﻮﺳﻂ ﺟﻌﻞ ﻫﺬه اﻟﻨﺒﺎﺗﺎت ﻓﺮﻳﺪة, ﺗﺨﺘﺼﺮ ﺗﺮاث ﻋﺮﻳﻖ. أكثر من 3000 نوع من النباتات لا يزال معظمها برياً ، استخدمت ﺑﻜﻔﺎءة ﻟﻌﺼﻮر ﻣﻀﺖ ﻟﺤﻔﻆ اﻟﺼﺤﺔ ودﻓﻊ اﻟﻤﺮض.",
    file : story1 
  },
  {
    id: 2,
    description:"شركة سيريا*زودت المبنى بملخصات تجاربهم وتطور علومهم . أصناف من النباتات تحولت إلى غذاء ودواء . تأسست شركة سورية عام 2021، لتكون فصلاً سورياً جديداً في قصة عطاء الأرض والإنسان .",
    file : story2 
  },

] 
{/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< static arry for tisting Demo >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>></>*/}

  return (
    <div className="IB_store HJ_MarginSection">
      
      <TitleSection title_section="  تاريخ وقصة سيريا لمنتجات الطبيعة" className='HJ_DirectionRight' />

{/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< static arry for tisting Demo >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>></>*/}

      {StaticStories.map((story: any, index: number) => (
        <MediaSection
          key={story.id}
          file={story.file}
          text={<HighlightedText text={story.description} />}
          reverse={index % 2 === 0}
        />
      ))}


      {/* {stories.map((story: any, index: number) => (
        <MediaSection
          key={story.id}
          file={story.file}
          text={<HighlightedText text={story.description} />}
          reverse={index % 2 === 0}
        />
      ))} */}


{/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< static arry for tisting Demo >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>></>*/}
    </div>
  );
};

interface MediaSectionProps {
  file: string;
  text: React.ReactNode;
  reverse?: boolean;
}

const MediaSection: React.FC<MediaSectionProps> = ({ file, text, reverse }) => {
  const renderMedia = (file: string) => {
    const fileExtension = file.split('.').pop()?.toLowerCase();

    switch (fileExtension) {
      case 'jpg':
      case 'jpeg':
      case 'png':
      case 'gif':
        return <img src={file} alt="section" className="IB_section-image" />;
      case 'mp4':
      case 'avi':
      case 'mov':
      case 'webm':
        return (
          <video controls className="IB_section-video" controlsList="nodownload">
            <source src={file} type={`video/${fileExtension}`} />
          </video>
        );
      default:
        return null;
    }
  };

  return (
    <div className="IB_section"  >
      <div  className={`HJ_container_Store  ${reverse ? 'reverse Margin' : ''}`}>
        {renderMedia(file)}
        <div className="IB_section-text">
          {text}
        </div>

      </div>

    </div>
  );
};

interface HighlightedTextProps {
  text: string;
}

const HighlightedText: React.FC<HighlightedTextProps> = ({ text }) => {
  const parts = text.split('*');
  return (
    <p>
      <span className="IB_highlight">{parts[0]}</span> {parts.slice( 1 ).join(' ')}
    </p>
  );
};

export default Store;